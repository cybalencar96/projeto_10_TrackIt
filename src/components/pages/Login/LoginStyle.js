import styled from 'styled-components'


const LoginContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & a {
        margin-top: 20px
    }

    & form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export {
    LoginContainer,
}