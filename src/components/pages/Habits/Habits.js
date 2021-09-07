import Topbar from "../../shared/Topbar/Topbar";
import BottomBar from '../../shared/BottomBar/BottomBar'
import {HabitsContainer, NewHabitContainer, HabitContainer, WeekdaysContainer, DayContainer, ButtonsContainer} from './HabitsStyle'
import Button from "../../shared/Button/Button";
import MyInput from "../../shared/MyInput/MyInput";
import { useState } from "react";

let key = 0;

export default function Habits() {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState({title: "", daysSelecteds:[]});

    function saveNewHabit(title) {
        newHabit["key"] = key;
        newHabit.title = title;
        key++;
        setHabits([...habits,newHabit]);
        setNewHabit({title: "", daysSelecteds:[]});

    }
    
    return (
        <>
            <Topbar />
            <HabitsContainer>
                <section className="title">
                    <p>Meus Hábitos</p>
                    <Button width="40" height="40">+</Button>
                </section>
                {
                    habits.length === 0 ?
                        <>
                            <NewHabit newHabit={newHabit} setNewHabit={setNewHabit} saveNewHabit={saveNewHabit}/>
                            <p className="noHabitsText">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                        </>
                            :
                            habits.map(habit => <Habit title={habit.title} daysSelecteds={habit.daysSelecteds}/>)
                }

            </HabitsContainer>
            <BottomBar/>    
        </>
    )
}

function NewHabit({selectDay,setNewHabit, saveNewHabit, newHabit}) {
    const weekdays = ['D','S','T','Q','Q','S','S'];
    const [inputValue, setInputValue] = useState("");
    
    function selectDay(dayKey) {
        if (newHabit.daysSelecteds.includes(dayKey)) {
            newHabit.daysSelecteds = newHabit.daysSelecteds.filter(daySelected => daySelected !== dayKey)
        } 
        else {
            newHabit.daysSelecteds.push(dayKey);
            newHabit.daysSelecteds.sort((a,b) => a - b);
        }
        
        setNewHabit({...newHabit});
    }

    return (
        <NewHabitContainer>
            <MyInput placeholder="nome do hábito" width="100%" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
            <WeekdaysContainer>
                {
                    weekdays.map((weekday,index) => {
                        const isSelected = newHabit.daysSelecteds.includes(index);
                        return <Weekday myKey={index} isSelected={isSelected} selectDay={selectDay} day={weekday}/>
                    })
                }
            </WeekdaysContainer>
            <ButtonsContainer>
                <Button backgroundColor="white" color="#52B6FF" fontSize="19">Cancelar</Button>
                <Button fontSize="19" onClick={() => saveNewHabit(inputValue)}>Salvar</Button>
            </ButtonsContainer>
        </NewHabitContainer>
    )
}

function Habit({title, daysSelecteds}) {
    const weekdays = ['D','S','T','Q','Q','S','S'];

    return (
        <HabitContainer>
            <p>{title}</p>
            <WeekdaysContainer>
                {
                    weekdays.map((day,index) => {
                        const isSelected = daysSelecteds.includes(index);
                        return <Weekday day={day} isSelected={isSelected}/>
                    })
                }  
            </WeekdaysContainer> 
        </HabitContainer>
    )

}

function Weekday({day, isSelected,selectDay, myKey}) {
    return (
        <DayContainer onClick={() => selectDay(myKey)} selected={isSelected}>{day}</DayContainer>
    )
}

