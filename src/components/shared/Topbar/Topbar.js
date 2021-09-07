import { TopbarContainer } from "./TopbarStyle"

export default function Topbar (props) {
    return (
        <TopbarContainer>
            <p>TrackIt</p>
            {/* <img src={props.userImg} /> */}
            <img src="./assets/userImg.jpg" alt=""/>
        </TopbarContainer>
    )
}