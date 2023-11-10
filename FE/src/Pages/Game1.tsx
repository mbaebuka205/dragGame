import styled from "styled-components";
import data1 from '../../data/data.json'
import data2 from '../../data/data.json'
import {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getKids } from "../api/Api";


const Game1 = () =>{
    // const [item, setItem] = useState(data1)

    const  [state, setState] = useState(data2)

    // useEffect(()=>{
    //     getKids().then((res: any)=>{
    //         setState(res)
    //     })
    // },[])

    console.log(state)

    const onDrag = (res:any) =>{
       const {source, destination} = res

       const newItem = Array.from(state)
       const [removed] = newItem.splice(source.index, 1)
       newItem.splice(destination.index, 0 , removed)

       setState(newItem)
    }

    return(
            <DragDropContext onDragEnd={onDrag}>
         <Container>
                <TheHolder >
                  <Droppable droppableId="Drop">
                     {(props)=>(
                     <Div {...props.droppableProps} ref={props.innerRef}>
                         <div>WORDS</div>
                         {state?.map((prop:any, i:number)=>(     
                          
                        <Draggable draggableId={prop._id} key={prop._id} index={i}>

                            {(prov)=>(
                                <Left
                                key={prop._id}
                                {...prov.dragHandleProps}
                                {...prov.draggableProps}
                                ref={prov.innerRef}
                                >
                                {prop.name}
                              </Left>
                            )}
                        </Draggable>
                         )
                        )}
                     {props.placeholder}
                     </Div>
                     )}
                  </Droppable>


                    <Line/>


                    <Div>
                       <div>IMAGES</div>
                    {data1.map((prop)=>{
                      return(
                          <Right key={prop._id}>
                               <img src={prop.src} style={{height:"100%", width:"100%"}}/> 
                          </Right>
                        )
                     })}
                    </Div>

                </TheHolder>
         </Container>
     </DragDropContext>
        
    )
}

export default Game1;
const Current = styled.div`
    
    `
const Div = styled.div`
/* width: 40%; */
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 49%;
height: 96%;
border: 1px solid silver;
`
const Line = styled.div`
    min-height: 170px;
    width: 2px;
    background-color: silver;
`
const Right = styled.div`
    width: 115px;
    height: 110px;
    border: 1px solid silver;
    margin: 10px;
    `
const Left = styled.div`
    width: 190px;
    height: 80px;
    border: 1px solid silver;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    border-radius: 8px;
    background-color: wheat;
`
const TheHolder = styled.div`
    height: 900px;
    width: 500px;
    border: 1px solid silver;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

`
const Container = styled.div`
    height: 90vh;
    width: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
`