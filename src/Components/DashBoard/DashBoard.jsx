import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const DashBoard = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;