import {ButtonContainer} from './ButtonStyle'

export default function Button ({width, height, onClick, children, color}) {
    return (
        <ButtonContainer onClick={onClick} width={width} height={height} backGroundColor={color}>{children}</ButtonContainer>
    )

}