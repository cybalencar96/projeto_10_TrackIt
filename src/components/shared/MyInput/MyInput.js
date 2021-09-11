import {Input} from './MyInputStyle'

export default function MyInput({
    width, 
    disabled, 
    ...otherProps
}) {

    return (
        <Input 
            disabled={disabled} 
            width={width}
            {...otherProps}
        />
    )
}