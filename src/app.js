import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/pages/Login/Login.js'
export default function App () {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}