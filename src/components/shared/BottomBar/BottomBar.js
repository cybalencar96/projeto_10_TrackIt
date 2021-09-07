import {BottomBarContainer} from './BottomBarStyle'
import {Link} from 'react-router-dom'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function BottomBar() {
    const percentage = 66;
    return (
        <BottomBarContainer>
            <Link to="/habitos">
                <div>
                    Hábitos
                </div>
            </Link>
            <Link to="hoje">
                <div className="progressbarContainer">
                    <div >
                        <CircularProgressbar 
                            value={percentage}
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
                <div>
                    Histórico
                </div>
            </Link>
        </BottomBarContainer>
    )
}