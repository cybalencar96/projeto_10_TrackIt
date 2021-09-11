import styled from "styled-components"

const TodayContainer = styled.main`
margin: 70px 0;
padding: 30px;

& .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    color: #126BA5;
}

& .subtitle{
    font-size: 18px;
    color: ${props => props.atLeastOneDone ? '#8FC549' : '#BABABA'};
    margin-top:8px
}

`

const TodayHabitContainer = styled.section`
width: 100%;
height: 90px;
margin-top: 20px;
border-radius: 5px;
background-color: white;
padding: 15px 20px;

display: flex;
justify-content: space-between;

& ion-icon {
    width: 70px;
    height: 100%;
    color: ${props => props.done ? '#8FC549' : '#EBEBEB'}
}
`

const TodayWritePart = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;

& .todayTitle {
    font-size: 20px;
    color: #666666;
}

& .todaySubtitle {
    font-size: 13px;
}

& .actual {
    color: ${props => props.done ? '#8FC549' : '#666666'};  
}

& .record {
    color: ${props => props.recordIsActual ? '#8FC549' : '#666666'};  
}
`

export {
    TodayContainer,
    TodayHabitContainer,
    TodayWritePart
}
