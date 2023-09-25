import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

 

const Mainlayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Mainlayout;