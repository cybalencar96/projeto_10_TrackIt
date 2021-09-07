import styled from "styled-components";

const HabitsContainer = styled.main`
    margin: 70px 0;
    padding: 30px;

    & .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 23px;
        color: #126BA5;
    }
`

const HabitContainer = styled.section`
    width: 100%;
    height: 180px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: white;
    padding: 20px;

    position: relative;
`

const WeekdaysContainer = styled.section`
    display:flex;
    gap:5px;
`

const DayContainer = styled.div`
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #DBDBDB;
`

const ButtonsContainer = styled.div`
    position: absolute;
    bottom: 20px;
    height: 35px;
    width: calc(100% - 40px);
    display:flex;
    justify-content: flex-end;
    gap: 10px;

`

export {
    HabitsContainer,
    HabitContainer,
    WeekdaysContainer,
    DayContainer,
    ButtonsContainer
}