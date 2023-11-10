import styled from "styled-components";

const Game3 = () =>{
    return(
        <div>
        <Container>
          <TheHolder>
             game 3 on construction
          </TheHolder>  
        </Container>
        </div>
    )
}

export default Game3;
const TheHolder = styled.div`
    min-height: 100px;
    width: 300px;
    border: 1px solid silver;
    border-radius: 8px;
`
const Container = styled.div`
    height: 90vh;
    width: 700px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* background-color: orange;\ */
`