import {Input} from './MyInputStyle'

export default function MyInput({placeholder, onChange, value , width}) {

    return (
        <Input placeholder={placeholder} onChange={onChange} value={value} width={width}/>
    )
}