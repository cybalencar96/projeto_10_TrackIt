import MyInput from '../../shared/MyInput/MyInput'
import {Link, useHistory} from 'react-router-dom'
import Button from '../../shared/Button/Button'
import Logo from '../../shared/Logo/Logo'
import { LoginContainer } from '../Login/LoginStyle'
import { useState } from 'react'
import { signup } from '../../../api/auth'

export default function Register() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const history = useHistory();
    
    function register() {
        const body = {
            email,
            password,
            name,
            image
        }

        signup(body).then(res => {
            history.push('/')
        })
        .catch(err => console.error(err))
    }
    return (
        <LoginContainer>
            <Logo width='180' height='180'/>
            <MyInput placeholder='nome' onChange={e => setName(e.target.value)} value={name}/>
            <MyInput placeholder='email'onChange={e => setEmail(e.target.value)} value={email}/>
            <MyInput placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
            <MyInput placeholder='foto' onChange={e => setImage(e.target.value)} value={image}/>
            <Button width='303' height='45' onClick={register}>Cadastrar</Button>
            <Link to='/'>Já tem uma conta? Faça login!</Link>
        </LoginContainer>
    )
}