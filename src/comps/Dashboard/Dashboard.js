// Dashboard.js
import Roles from "./comps/Roles/Roles"
import "./Dashboard.css";

const Dashboard = ()=>{
    const SideMenu = ()=>{
        const items = [
            "Users",
            "Roles",
            "Agencies",
            "Projects",
            "Global Plan",
            "Reports"
        ]
        const Item = ({label})=>{
            return(
                <div className="side-menu-item padding-10 full-width link">
                    {label}
                </div>
            )
        }
        return(
            <div className="relative flex-col space-between side-menu">
                <div className="flex-col">
                    {items.map((item, index)=><Item label={item} key={index}/>)}
                </div>
                <div className="flex-col-center">
                    <div className="text-white font-10 margin-10">
                        Something
                    </div>
                </div>
            </div>
        )
    }
    const Content = ()=>{
        return(
            <div className="relative dashboard-content">
                <div className="relative dashboard-content-container full-width">
                    <Roles/>
                </div>
            </div>
        )
    }
    return (
        <div className="Dashboard flex-row">
            <SideMenu/>
            <Content/>
        </div>
    )
}
export default Dashboard;

// end
