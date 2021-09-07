import styled from 'styled-components'

const ButtonContainer = styled.button`
    background: ${(props) => props.backGroundColor ? props.backGroundColor : '#52B6FF'};
    border-radius: 4.63636px;
    color: white;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border: none;

    font-size: 21px;
    

    &:focus {
        outline: none;
    }
`

export {
    ButtonContainer
}