import MyInput from '../../shared/MyInput/MyInput'
import {Link} from 'react-router-dom'
import Button from '../../shared/Button/Button'
import Logo from '../../shared/Logo/Logo'
import { LoginContainer } from '../Login/LoginStyle'
export default function Register() {
    return (
        <LoginContainer>
            <Logo width='180' height='180'/>
            <MyInput placeholder='password'/>
            <MyInput placeholder='email'/>
            <MyInput placeholder='nome'/>
            <MyInput placeholder='email'/>
            <Button width='303' height='45'>Cadastrar</Button>
            <Link to='/'>Já tem uma conta? Faça login!</Link>
        </LoginContainer>
    )
}