// Roles.js

// imports
import { useState, useEffect } from 'react';
import data from "./data.json"
import dropIcon from "assets/images/general/dropIcon.png";
import "./Roles.css";

// Main
const Roles = ()=>{
    // inits
    const [currentRole, setCurrentRole] = useState("Administrator");

    // comps
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
            const Holder = ()=>{
                const handleClick = ()=>{
                    setShowList(true);
                }
                return(
                    <div className='roles-holder font-20 padding-10 flex-row align-center space-between link' onClick={handleClick}>
                        <div>
                            {currentRole.split("_").join(" ")}
                        </div>
                        <img src={dropIcon} height="20"/>
                    </div>
                )
            }
            const List = ()=>{
                const Item = ({label})=>{
                    const handleClick = ()=>{
                        setCurrentRole(label);
                        setShowList(false);
                    }
                    return(
                        <div className={'font-20 link roles-list-item margin-5 padding-5 b-r-5 '+((label==currentRole)?"roles-list-item-selected":"")} onClick={handleClick}>
                            {label.split("_").join(" ")}
                        </div>
                    )
                }
                return(
                    <div className='absolute flex-col padding-10 roles-list z-10' style={{
                        top: "0px",
                        left: "0px"
                    }}>
                        {Object.keys(data).map((role, index)=><Item label={role} key={index}/>)}
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
        const [currentPermGroup, setCurrentPermGroup] = useState(Object.keys(data[currentRole])[0]);
        const PermissionsGroups = ()=>{
            const Group = ({group})=>{
                const handleClick = ()=>{
                    setCurrentPermGroup(group);
                }
                return(
                    <div className={'margin-5 '+((currentPermGroup===group)?"permissions-group-selected":"permissions-group link")} onClick={handleClick}>
                        {group.split("_").join(" ")}
                    </div>
                )
            }
            return(
                <div className='flex-col permissions-groups'>
                    {Object.keys(data[currentRole]).map((group, index)=><Group group={group} key={index}/>)}
                </div>
            )
        }
        const Permissions = ()=>{
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
            const PermissionsList = ()=>{
                const Permission = ({label})=>{
                    const Slider = ()=>{
                        const [on, setOn] = useState(false);
                        const handleClick = ()=>{
                            setOn(!on)
                        }
                        return(
                            <div className='relative slider flex-col-center link' onClick={handleClick} style={{
                                backgroundColor: on?"green":"grey"
                            }}>
                                <div className='slider-ball' style={{
                                    left:on?"auto":"8px",
                                    right:on?"8px":"auto",
                                }}/>
                            </div>
                        )
                    }
                    return(
                        <div className='flex-row permission align-center space-between padding-10' style={{border:"solid 1px grey"}}>
                            <div className='font-15'>
                                {label}
                            </div>
                            <Slider/>
                        </div>
                    )
                }
                return(
                    <div className='flex-col'>
                        {currentPermGroup?data[currentRole][currentPermGroup].map((permission, index)=><Permission label={permission} key={index}/>):""}
                    </div>
                )
            }
            return(
                <div className='relative permissions flex-col'>
                    <Title/>
                    <PermissionsList/>
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

    // render
    return (
        <div className="relative flex-col full-width">
            <Header/>
            <Content/>
        </div>
    )
}

export default Roles;

// end
