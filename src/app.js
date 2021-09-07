import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/pages/Login/Login.js'
import Register from './components/pages/Register/Register.js'

export default function App () {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Login/>
                </Route>

                <Route path="/cadastro" exact>
                    <Register/>
                </Route>
            </Switch>
        </Router>
    )
}