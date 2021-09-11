import {Input} from './MyInputStyle'

export default function MyInput({
    width, 
    disabled,
    value,
    ...otherProps
}) {

    return (
        <Input 
            disabled={disabled} 
            width={width}
            value={value}
            {...otherProps}
        />
    )
}