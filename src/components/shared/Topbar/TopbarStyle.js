import styled from 'styled-components'

const TopbarContainer = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index:1;

    padding:15px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
        font-family: 'Playball', cursive;
        color: white;
        font-size: 39px;
    }

    & > img {
        border-radius: 98.5px;
        width: 51px;
    }

`

export {
    TopbarContainer
}