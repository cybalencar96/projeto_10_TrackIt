import {ButtonContainer} from './ButtonStyle'

export default function Button ({width, height, onClick, children, backgroundColor, color, fontSize}) {
    return (
        <ButtonContainer 
            onClick={onClick} 
            width={width} 
            height={height} 
            backgroundColor={backgroundColor}
            color={color}
            fontSize={fontSize}
            >
                {children}
        </ButtonContainer>
    )

}