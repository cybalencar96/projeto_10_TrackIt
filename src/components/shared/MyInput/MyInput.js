import {Input} from './MyInputStyle'

export default function MyInput({placeholder, onChange, value , width, disabled}) {

    return (
        <Input placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} width={width}/>
    )
}