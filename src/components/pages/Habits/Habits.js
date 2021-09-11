import Topbar from "../../shared/Topbar/Topbar";
import BottomBar from '../../shared/BottomBar/BottomBar'
import {HabitsContainer, NewHabitContainer, HabitContainer, WeekdaysContainer, DayContainer, ButtonsContainer} from './HabitsStyle'
import Button from "../../shared/Button/Button";
import MyInput from "../../shared/MyInput/MyInput";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../../contexts/UserContext";
import { getHabits, postHabit, deleteHabit } from '../../../api/trackit'

export default function Habits() {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState({name: "", days:[]});
    const [showNewHabitForm, setShowNewHabitForm] = useState(false);
    const [newHabitInputValue, setNewHabitInputValue] = useState("");
    const [loading, setLoading] = useState(false);

    const {user} = useContext(UserContext);
    
    const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }

    useEffect(() => {
        getHabits(config).then(res => {
            setHabits(res.data)
        })
    },[]);


    
    function saveNewHabit(e,name) {
        e.preventDefault();
        setLoading(true);
        newHabit.name = name;
        const habitBody = {
            name: newHabit.name,
            days: newHabit.days
        }

        postHabit(habitBody, config).then(res => {
            renderHabits();
            setLoading(false);
            setNewHabitInputValue("");
            //setHabits([...habits,newHabit]);
            setNewHabit({name: "", days:[]});
            setShowNewHabitForm(false);
        })
        .catch(err => {
            alert('Erro ao salvar novo hábito. Por favor tente novamente mais tarde.')
            setLoading(false);
            console.log("erro ao postar habito", err.response)
        })
        
    }

    function cancelNewHabit() {
        setShowNewHabitForm(false);
    }

    function removeHabit(habitId) {
        if (window.confirm("Deseja realmente deletar o hábito?")) {
            deleteHabit(habitId,config).then((res => renderHabits()));
        }
    }

    function renderHabits() {
        getHabits(config).then(res => setHabits(res.data))
    }
    
    function addHabit() {
        setShowNewHabitForm(() => !showNewHabitForm);
    }
    
    return (
        <>
            <Topbar />
            <HabitsContainer>
                <section className="title">
                    <p>Meus Hábitos</p>
                    <Button width="40" height="40" onClick={addHabit}>+</Button>
                </section>
                {showNewHabitForm ? 
                    <NewHabit 
                        inputValue={newHabitInputValue} 
                        setInputValue={setNewHabitInputValue} 
                        loading={loading} newHabit={newHabit} 
                        setNewHabit={setNewHabit} 
                        saveNewHabit={saveNewHabit}
                        cancelNewHabit={cancelNewHabit}
                    /> 
                    : ""}
                {
                    habits.length === 0 ?
                            <p className="noHabitsText">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                        :
                            habits.map(habit => <Habit myKey={habit.id} name={habit.name} removeHabit={removeHabit} days={habit.days}/>)
                }

            </HabitsContainer>
            <BottomBar/>    
        </>
    )
}

function NewHabit({selectDay,setNewHabit, saveNewHabit, cancelNewHabit, newHabit, loading,inputValue,setInputValue}) {
    const weekdays = ['D','S','T','Q','Q','S','S'];
    
    function selectDay(dayKey) {
        if (newHabit.days.includes(dayKey)) {
            newHabit.days = newHabit.days.filter(daySelected => daySelected !== dayKey)
        } 
        else {
            newHabit.days.push(dayKey);
            newHabit.days.sort((a,b) => a - b);
        }
        
        setNewHabit({...newHabit});
    }

    return (
        <NewHabitContainer onSubmit={(e) => saveNewHabit(e,inputValue)}>
            <MyInput required disabled={loading} placeholder="nome do hábito" width="100%" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
            <WeekdaysContainer>
                {
                    weekdays.map((weekday,index) => {
                        const isSelected = newHabit.days.includes(index);
                        return <Weekday loading={loading} myKey={index} isSelected={isSelected} selectDay={selectDay} day={weekday}/>
                    })
                }
            </WeekdaysContainer>
            <ButtonsContainer>
                <Button fontSize="19" type='submit' loading={loading} width={88} loadingWidth={30}>Salvar</Button>
                <Button onClick={cancelNewHabit} backgroundColor="white" color="#52B6FF" width={88} fontSize="19">Cancelar</Button>
            </ButtonsContainer>
        </NewHabitContainer>
    )
}

function Habit({myKey, name, days, removeHabit}) {
    const weekdays = ['D','S','T','Q','Q','S','S'];

    return (
        <HabitContainer>
            <p>{name}</p>
            <WeekdaysContainer>
                {
                    weekdays.map((day,index) => {
                        const isSelected = days.includes(index);
                        return <Weekday day={day} isSelected={isSelected} selectDay={() => {}}/>
                    })
                }  
            </WeekdaysContainer> 
            <ion-icon class="trash" onClick={() => removeHabit(myKey)} name="trash-outline"></ion-icon>
        </HabitContainer>
    )

}

function Weekday({day, isSelected,selectDay, myKey, loading}) {
    return (
        <DayContainer onClick={loading ? () => {} : () => selectDay(myKey)} selected={isSelected}>{day}</DayContainer>
    )
}

