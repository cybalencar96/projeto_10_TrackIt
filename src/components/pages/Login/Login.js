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
    const [loading, setLoading] = useState(false);
    function sendLogin() {
        setLoading(true);
        const body = {
            email: email,
            password: password
        }
        login(body).then(res => {
            setUser(res.data);
            setLoading(false);
            history.push('/hoje')
        })
        .catch(err => {
            console.log(err); 
            alert('usuário ou senha incorretos')
            setLoading(false)
        })
    }

    return (
        <LoginContainer>
            <Logo width="182" height="182"/>
            <MyInput disabled={loading} placeholder="email" onChange={e => setEmail(e.target.value)} value={email}/>
            <MyInput disabled={loading} placeholder="senha" onChange={e => setPassword(e.target.value)} value={password}/>
            <Button width="303" height="45" onClick={sendLogin} loading={loading}>Entrar</Button>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </LoginContainer>
    )
}