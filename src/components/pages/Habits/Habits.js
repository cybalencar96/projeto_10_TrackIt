import Topbar from "../../shared/Topbar/Topbar";
import BottomBar from '../../shared/BottomBar/BottomBar'
import {HabitsContainer, HabitContainer, WeekdaysContainer, DayContainer, ButtonsContainer} from './HabitsStyle'
import Button from "../../shared/Button/Button";
import MyInput from "../../shared/MyInput/MyInput";

export default function Habits() {
    return (
        <>
            <Topbar />
            <HabitsContainer>
                <section className="title">
                    <p>Meus Hábitos</p>
                    <Button width="40" height="40">+</Button>
                </section>

                <Habit />
                <Habit />

            </HabitsContainer>
            <BottomBar/>    
        </>
    )
}

function Habit() {
    const weekdays = ['D','S','T','Q','Q','S','S'];
    return (
        <HabitContainer>
            <MyInput placeholder="nome do hábito" width="100%"/>
            <WeekdaysContainer>
                {
                    weekdays.map(weekday => <Weekday day={weekday}/>)
                }
            </WeekdaysContainer>
            <ButtonsContainer>
                <Button backgroundColor="white" color="#52B6FF" fontSize="19">Cancelar</Button>
                <Button fontSize="19">Salvar</Button>
            </ButtonsContainer>


        </HabitContainer>

    )
}

function Weekday({day}) {
    return (
        <DayContainer>{day}</DayContainer>
    )
}

