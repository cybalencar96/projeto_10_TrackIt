import styled from 'styled-components'

const ButtonContainer = styled.button`
    background: ${(props) => props.backgroundColor ? (props) => props.backgroundColor : '#52B6FF'};
    border-radius: 4.63636px;
    color: ${props => props.color ? props.color : 'white'};
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border: none;

    font-size: ${props => props.fontSize ? props.fontSize : 21}px;
    

    &:focus {
        outline: none;
    }
`

export {
    ButtonContainer
}