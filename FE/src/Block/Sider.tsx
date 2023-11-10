import { Link } from "react-router-dom";
import styled from "styled-components";

const Sider = () =>{

    return(
        <div>
            <Container>
                <Main to = "/home">
                    Home Page
                </Main>
                <First to="/game1">
                    Game 1
                </First>
                <First to="/game2">
                    Game 2
                </First>
                <First to="/game3">
                    Game 3
                </First>
            </Container>
        </div>
    )
}

export default Sider;
const Main = styled(Link)`
    height: 65px;
    width: 90%;
    background-color: #e0b3e7;
    text-decoration: none;
    color: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    `
const First = styled(Link)`
    height: 65px;
    width: 90%;
    background-color: #fad184;
    text-decoration:none;
    color:white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    height: 350px;
    width: 260px;
    /* background-color: #ebebf3; */
    border: 1px solid silver;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
`