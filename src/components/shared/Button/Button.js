import {ButtonContainer} from './ButtonStyle'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Button ({
    backgroundColor, 
    color, 
    fontSize, 
    loading = false, 
    loadingWidth = 50,
    children,
    ...otherProps
}) {
    return (
        <ButtonContainer 
            backgroundColor={backgroundColor}
            color={color}
            fontSize={fontSize}
            {...otherProps}
            >
                {loading ? 	<Loader type="ThreeDots" color="#FFF" height={loadingWidth} width={loadingWidth} /> : children}
        </ButtonContainer>
    )

}