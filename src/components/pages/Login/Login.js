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

    const user = JSON.parse(localStorage.getItem('user'))
    if (!!user) {
        setUser(user)
        history.push('/hoje')
    }

    function sendLogin(e) {
        e.preventDefault();

        setLoading(true);
        const body = {
            email: email,
            password: password
        }
        login(body).then(res => {
            setUser(res.data);
            setLoading(false);

            localStorage.setItem('user',JSON.stringify(res.data));

            history.push('/hoje')
        })
        .catch(err => {
            console.log(err); 
            alert('usuário ou senha incorretos')
            setLoading(false)
        })
    }
    const regex = '^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$'

    return (
        <LoginContainer>
            <Logo width="182" height="182"/>
            <form onSubmit={sendLogin}>
                <MyInput 
                    required 
                    name="email"
                    pattern={regex}
                    title='Email inválido'
                    disabled={loading} 
                    placeholder="email" 
                    onChange={e => setEmail(e.target.value)} 
                    value={email}
                />
                <MyInput 
                    required 
                    name="password"
                    type="password"
                    disabled={loading} 
                    placeholder="senha" 
                    onChange={e => setPassword(e.target.value)} 
                    value={password}
                />
                <Button width="303" height="45" type='submit' loading={loading}>Entrar</Button>
            </form>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </LoginContainer>
    )
}