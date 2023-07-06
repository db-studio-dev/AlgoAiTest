// Roles.js

// imports
import { useState, useEffect } from 'react';
import dropIcon from "assets/images/general/dropIcon.png";
import "./Roles.css";

// General Init
const permissions = {
    Super_Admin:{
        All:[
            "Access and permission to all the system"
        ]
    },
    Administrator:{
        User_Management: [
            "Creating and managing user accounts",
            "Invite users",
            "Granting user access",
            "Delete users",
            "Disable users",
            "Assigning roles and permissions"
        ],
        Content_Management: [
            "Creating and editing",
            "Uploading and optimizing images or videos",
            "Organizing and categorizing content",
            "Archiving or deleting outdated content",
            "Publishing",
            "Translation",
            "SEO Optimization"
        ],
        Notifications: [
            "Send push notifications to app users",
            "Configure and schedule notifications",
            "Target specific user segments, and track the effectiveness of notifications."
        ],
        Analytics_and_Reporting: [
            "Access to analytics and reporting tools"
        ],
        App_Configuration: [
            "Managing app settings",
            "Enabling or disabling features",
            "Customizing the user interface and white label configurations"
        ],
        User_Support: [
            "User feedback",
            "Guidelines",
            "Walkthrough"
        ],
        Integration_and_API_Management: [
            "Configure and manage connections to external services, data sources, or third-party tools used by the app"
        ]
    },
    Content_Editor:{
        All: [
            "Creating and editing",
            "Uploading and optimizing images or videos",
            "Organizing and categorizing content",
            "Archiving or deleting outdated content",
            "Publishing",
            "Translation",
            "SEO Optimization"
        ]
    },
    Translator:{
        All: [
            "View access of original EN content",
            "Creating and editing for translation content",
            "Uploading and optimizing images or videos",
            "Organizing and categorizing content",
            "Archiving or deleting outdated content",
            "Publishing",
            "SEO Optimization"
        ]
    },
    Support:{
        All: [
            "User feedback",
            "Guidelines",
            "Walkthrough"
        ]
    }
}
const roles = Object.keys(permissions);
const permissionsGroups = {}
roles.forEach(role => {
    permissionsGroups[role] = Object.keys(permissions[role]);
});

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
                        setCurrentRole(label)
                    }
                    return(
                        <div className='font-20 link' onClick={handleClick}>
                            {label.split("_").join(" ")}
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
        const [currentPermGroup, setCurrentPermGroup] = useState(permissionsGroups[currentRole][0]);
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
                    {permissionsGroups[currentRole].map((group, index)=><Group group={group} key={index}/>)}
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
                    return(
                        <div>
                            {label}
                        </div>
                    )
                }
                return(
                    <div className='flex-col'>
                        {currentPermGroup?permissions[currentRole][currentPermGroup].map((permission, index)=><Permission label={permission} key={index}/>):""}
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
