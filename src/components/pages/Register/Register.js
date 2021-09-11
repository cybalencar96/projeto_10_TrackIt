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
    const [loading,setLoading] = useState(false);
    
    function register(e) {
        e.preventDefault();
        setLoading(true);
        const body = {
            email,
            password,
            name,
            image
        }

        signup(body).then(res => {
            setLoading(false);
            history.push('/')
        })
        .catch(err => {
            alert('Erro ao registrar. Tente novamente mais tarde.')
            setLoading(false);
            console.error(err.response)
        })
    }
    const regexEmail = '^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$'
    return (
        <LoginContainer>
            <Logo width='180' height='180'/>
            <form onSubmit={register}>
                <MyInput 
                    required
                    disabled={loading} 
                    placeholder='nome' 
                    onChange={e => setName(e.target.value)} 
                    value={name}
                />
                <MyInput 
                    required
                    disabled={loading}
                    placeholder='email'
                    pattern={regexEmail}
                    title='Email inválido'
                    onChange={e => setEmail(e.target.value)} 
                    value={email}
                />
                <MyInput 
                    disabled={loading} 
                    type='password'
                    placeholder='password' 
                    onChange={e => setPassword(e.target.value)} 
                    value={password}
                />
                <MyInput 
                    required
                    disabled={loading}
                    type='url'
                    placeholder='foto' 
                    onChange={e => setImage(e.target.value)} 
                    value={image}
                />
                <Button width='303' height='45' type='submit' loading={loading}>Cadastrar</Button>
            </form>
            
            <Link to='/'>Já tem uma conta? Faça login!</Link>
        </LoginContainer>
    )
}