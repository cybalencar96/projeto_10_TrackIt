import {Input} from './MyInputStyle'

export default function MyInput({placeholder, onChange, value}) {

    return (
        <Input placeholder={placeholder} onChange={onChange} value={value}/>
    )
}