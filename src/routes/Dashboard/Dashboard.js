// Dashboard.js
import { useState } from 'react';
import Users from "./routes/Users/Users";
import Roles from "./routes/Roles/Roles";
import Agencies from "./routes/Agencies/Agencies";
import Projects from "./routes/Projects/Projects";
import Global_Plan from "./routes/Global_Plan/Global_Plan";
import Reports from "./routes/Reports/Reports";
import "./Dashboard.css";

// init side menu routes
const routes = {
    Roles: <Roles/>,
    Users: <Users/>,
    Agencies: <Agencies/>,
    Projects: <Projects/>,
    Global_Plan: <Global_Plan/>,
    Reports: <Reports/>,
}

const Dashboard = ()=>{
    //inits
    const [route, setRoute] = useState(Object.keys(routes)[0])

    // comps
    const SideMenu = ()=>{
        const Item = ({label})=>{
            const handleClick = ()=>{
                setRoute(label);
            }
            return(
                <div className={((route==label)?"side-menu-item-selected":"")+" side-menu-item padding-10 full-width link"} onClick={handleClick}>
                    {label.split("_").join(" ")}
                </div>
            )
        }
        return(
            <div className="relative flex-col space-between side-menu">
                <div className="flex-col">
                    {Object.keys(routes).map((item, index)=><Item label={item} key={index}/>)}
                </div>
                <div className="flex-col full-width margin-10">
                    <div className="text-white font-10">
                        : )
                    </div>
                </div>
            </div>
        )
    }
    const Content = ()=>{
        return(
            <div className="relative dashboard-content">
                <div className="relative dashboard-content-container full-width">
                    {routes[route]}
                </div>
            </div>
        )
    }

    // render
    return (
        <div className="relative Dashboard flex-row">
            <SideMenu/>
            <Content/>
        </div>
    )
}
export default Dashboard;

// end
