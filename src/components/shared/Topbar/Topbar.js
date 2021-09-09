import { TopbarContainer } from "./TopbarStyle"
import { useContext } from "react"
import UserContext from "../../../contexts/UserContext"
export default function Topbar (props) {
    const user = useContext(UserContext);
    return (
        <TopbarContainer>
            <p>TrackIt</p>
            {/* <img src={props.userImg} /> */}
            <img src={user.image} alt=""/>
        </TopbarContainer>
    )
}