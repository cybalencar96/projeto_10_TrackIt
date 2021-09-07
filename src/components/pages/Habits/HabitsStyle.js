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

    & .noHabitsText {
        color: #666666;
        font-size: 18px;
        line-height: 22px;
        margin-top: 30px;
    }
`

const NewHabitContainer = styled.section`
    width: 100%;
    height: 180px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: white;
    padding: 20px;

    position: relative;
`

const HabitContainer = styled.section`
    width: 100%;
    height: 90px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: white;
    padding: 15px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    & p {
        font-size: 20px;
        color: #666666;
    }

    & .trash {
        position: absolute;
        width: 18px;
        height: 18px;
        top: 15px;
        right: 15px;
    }
`

const WeekdaysContainer = styled.section`
    display:flex;
    gap:5px;
`

const DayContainer = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.selected ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.selected ? '#FFFFFF' : '#DBDBDB'};
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
    NewHabitContainer,
    HabitContainer,
    WeekdaysContainer,
    DayContainer,
    ButtonsContainer
}