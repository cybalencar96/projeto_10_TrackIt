import {BottomBarContainer} from './BottomBarStyle'
import {Link} from 'react-router-dom'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import UserContext from '../../../contexts/UserContext';
import { useContext } from 'react';

export default function BottomBar() {
    const {userProgress} = useContext(UserContext)

    return (
        <BottomBarContainer>
            <Link to="/habitos">
                <div className='habitHistoryBtns'>
                    Hábitos
                </div>
            </Link>
            <Link to="hoje">
                <div className="progressbarContainer">
                    <div >
                        <CircularProgressbar 
                            value={userProgress}
                            background     
                            text='Hoje'                       
                            styles={buildStyles({
                                pathColor: 'white',
                                trailColor: '#52B6FF',
                                backgroundColor: '#52B6FF',
                                textColor: 'white' 
                            })}
                        />
                    </div>
                </div>
            </Link>
            <Link to="/historico">
                <div className='habitHistoryBtns'>
                    Histórico
                </div>
            </Link>
        </BottomBarContainer>
    )
}