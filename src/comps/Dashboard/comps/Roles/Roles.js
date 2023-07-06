// Roles.js
import { useState } from 'react';
import dropIcon from "assets/images/general/dropIcon.png";
import "./Roles.css";

const Roles = ()=>{
    const [currentRole, setCurrentRole] = useState("Administrator");
    const Header = ()=>{
        const Title = ()=>{
            return(
                <div className="font-20">
                    Roles and Permissions
                </div>
            )
        }
        const Roles = ()=>{
            const [showList, setShowList] = useState(false);
            const roles = [
                "Super Admin",
                "Administrator",
                "Content Editor",
                "Translator",
                "Support"
            ]
            const Holder = ()=>{
                const handleClick = ()=>{
                    setShowList(true);
                }
                return(
                    <div className='roles-holder font-20 padding-10 flex-row align-center space-between link' onClick={handleClick}>
                        <div>
                            {currentRole}
                        </div>
                        <img src={dropIcon} height="20"/>
                    </div>
                )
            }
            const List = ()=>{
                const Item = ({label})=>{
                    const handleClick = ()=>{
                        setCurrentRole(label)
                    }
                    return(
                        <div className='font-20 link' onClick={handleClick}>
                            {label}
                        </div>
                    )
                }
                return(
                    <div className='absolute flex-col padding-10 roles-list z-10' style={{
                        top: "0px",
                        left: "0px"
                    }}>
                        {roles.map((role, index)=><Item label={role} key={index}/>)}
                    </div>
                )
            }
            return(
                <div className="relative">
                    <Holder/>
                    {showList?<List/>:""}
                </div>
            )
        }
        return(
            <div className="flex-row space-between align-center full-width">
                <Title/>
                <Roles/>
            </div>
        )
    }
    const Content = ()=>{
        const PermissionsGroups = ()=>{
            const groups = {
                Administrator: [
                    "User Management",
                    "Content Management",
                    "Notifications",
                    "Analytics and Reporting",
                    "App Configuration",
                    "User Support",
                    "Integration and API Management"
                ]
            }
            const Group = ({group})=>{
                return(
                    <div className='permissions-group margin-5 link'>
                        {group}
                    </div>
                )
            }
            return(
                <div className='flex-col permissions-groups'>
                    {groups[currentRole]?groups[currentRole].map((group, index)=><Group group={group} key={index}/>):""}
                </div>
            )
        }
        const Permissions = ()=>{
            const permissions = {
                Administrator:{
                    User_Management:[

                    ]
                }
            }
            const Title = ()=>{
                return(
                    <div className='relative flex-row permissions-title padding-10 full-width'>
                        <div className='flex-col-center text-white font-20' style={{width:"80%"}}>
                            Action
                        </div>
                        <div className='text-white font-20'>
                            |
                        </div>
                        <div className='flex-col-center text-white font-20' style={{width:"20%"}}>
                            Permission
                        </div>
                    </div>
                )
            }
            return(
                <div className='relative permissions flex-col'>
                    <Title/>
                </div>
            )
        }
        return(
            <div className='relative flex-row margin-10'>
                <PermissionsGroups/>
                <div className='margin-10'/>
                <Permissions/>
            </div>
        )
    }
    return (
        <div className="relative flex-col full-width">
            <Header/>
            <Content/>
        </div>
    )
}

export default Roles;

// end
