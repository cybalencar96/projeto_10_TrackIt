import {ButtonContainer} from './ButtonStyle'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Button ({width, height, onClick, children, backgroundColor, color, fontSize, loading = false, loadingWidth = 50}) {
    return (
        <ButtonContainer 
            onClick={onClick} 
            width={width} 
            height={height} 
            backgroundColor={backgroundColor}
            color={color}
            fontSize={fontSize}
            >
                {loading ? 	<Loader type="ThreeDots" color="#FFF" height={loadingWidth} width={loadingWidth} /> : children}
        </ButtonContainer>
    )

}