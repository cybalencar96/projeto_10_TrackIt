import { LoginContainer } from './LoginStyle.js'
import {Link, useHistory } from 'react-router-dom'
import Logo from '../../shared/Logo/Logo'
import Button from '../../shared/Button/Button'
import MyInput from '../../shared/MyInput/MyInput.js'
import UserContext from '../../../contexts/UserContext.js'
import { useEffect, useState } from 'react'
import {login} from '../../../api/auth'

export default function Login({setUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function sendLogin() {
        const body = {
            email: email,
            password: password
        }
        login(body).then(res => {
            setUser(res.data);
            history.push('/habitos')
        })
        .catch(err => {console.log(err); alert('usuário ou senha incorretos')})
    }

    return (
        <LoginContainer>
            <Logo width="182" height="182"/>
            <MyInput placeholder="email" onChange={e => setEmail(e.target.value)} value={email}/>
            <MyInput placeholder="senha" onChange={e => setPassword(e.target.value)} value={password}/>
            <Button width="303" height="45" onClick={sendLogin}>Entrar</Button>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </LoginContainer>
    )
}