import styled from 'styled-components'

const BottomBarContainer = styled.footer`
    background-color: #E5E5E5;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    
    padding: 0 30px;
    height: 70px;
    background-color: white;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & .progressbarContainer {
        width: 90px;
        height: 90px;
        margin-bottom: 30px;
        background-color: #52B6FF;
        border-radius: 50px;
        display:flex;
        justify-content: center;
        align-items: center
    }

    & .progressbarContainer div {
        width: 80px;
        height: 80px;
    }

    & .habitHistoryBtns {
        color: #52B6FF;
        font-size: 18px
    }
`

export {
    BottomBarContainer
}