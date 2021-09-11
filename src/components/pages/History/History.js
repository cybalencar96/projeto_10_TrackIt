import BottomBar from "../../shared/BottomBar/BottomBar";
import Topbar from "../../shared/Topbar/Topbar";
import styled from "styled-components";

export default function History() {
    return (
        <>
            <Topbar />
            <HistoryContainer>
                <section className="title">
                    <p>Histórico</p>
                </section>
                <p className="noHistory">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoryContainer>
            <BottomBar />
        </>
    )
}

const HistoryContainer = styled.main`
    margin: 70px 0;
    padding: 30px;

    & .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 23px;
        color: #126BA5;
    }

    & .noHistory {
        color: #666666;
        font-size: 18px;
        line-height: 22px;
        margin-top: 30px;
    }
`