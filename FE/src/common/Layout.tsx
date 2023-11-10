import { Outlet } from "react-router-dom";
import Header from "../Block/Header";
import MainApp from "../Pages/MainApp";
import styled from "styled-components";
import Sider from "../Block/Sider";

const Layout = () =>{
    return(
        <div>
            <Holder>
            <Sider/>
            <Space/>
            <Outlet/>
            </Holder>
           
        </div>
    )
}
export default Layout;
const Space = styled.div`
    height: 100%;
    width: 150px;
`
const Holder = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #f8f9fa;
`
