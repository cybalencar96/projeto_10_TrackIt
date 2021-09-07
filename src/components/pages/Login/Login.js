import {LoginContainer, Input} from './LoginStyle.js'
import {Link} from 'react-router-dom'
import Logo from '../../shared/Logo/Logo'
import Button from '../../shared/Button/Button'
import MyInput from '../../shared/MyInput/MyInput.js'

export default function Login() {
    return (
        <LoginContainer>
            <Logo width="182" height="182"/>
            <MyInput placeholder="email"/>
            <MyInput placeholder="senha"/>
            <Button width="303" height="45" onClick={() => alert("oi")}>Entrar</Button>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </LoginContainer>
    )
}