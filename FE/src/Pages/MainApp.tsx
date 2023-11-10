import styled from "styled-components";

const MainApp = () =>{
    return(
        <div>
         <Container>
         <h1><span style={{color:"#eb23b9", fontSize:"45px"}}>WELCOME</span><span style={{color:" #8dbe06"}}>..!!!</span></h1>
         <p style={{fontSize:"25px", fontWeight:"bold"}}>Explore by clicking on the side navs</p>
         </Container>
        </div>
    )
}

export default MainApp;
const Container = styled.div`
    height: 90vh;
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b99a9a;
    background-color: #e6e4e0;
    flex-direction: column;
    text-align: center;
    border-radius: 12px;
    /* background-color:; */
`