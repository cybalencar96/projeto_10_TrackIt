import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/pages/Login/Login.js'
import Register from './components/pages/Register/Register.js'
import Habits from './components/pages/Habits/Habits'
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

                <Route path="/habitos" exact>
                    <Habits />
                </Route>
            </Switch>
        </Router>
    )
}