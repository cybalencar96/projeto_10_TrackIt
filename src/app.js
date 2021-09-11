import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/pages/Login/Login.js'
import Register from './components/pages/Register/Register.js'
import Habits from './components/pages/Habits/Habits'
import Today from './components/pages/Today/Today.js'
import History from './components/pages/History/History.js'
import UserContext from './contexts/UserContext'
import { useState } from 'react'

export default function App () {
    
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={user}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Login setUser={setUser}/>
                    </Route>

                    <Route path="/cadastro" exact>
                        <Register/>
                    </Route>

                    <Route path="/hoje" exact>
                        <Today />
                    </Route>

                    <Route path="/habitos" exact>
                        <Habits />
                    </Route>

                    <Route path="/historico" exact>
                        <History />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    )
}