// Header.js
import { useEffect, useRef, useState } from 'react';
import smileImg from "assets/images/header/smile.png";
import "./Header.css";

const Header = ()=>{
    // comps
    const Title = ()=>{
        return(
            <div className="font-30">
                AlgoAI Test Page
            </div>
        )
    }
    const ProfilePic = ()=>{
        // inits
        const [showMenu, setShowMenu] = useState(false);
        
        // comps
        const ProfileMenu = ()=>{
            const items = [
                "Dashboard",
                "Profile",
                "Billing",
                "History",
                "Stuff"
            ]
            const Item = ({label})=>{
                return(
                    <div className="font-20 margin-5 link profile-menu-item text-white padding-10 b-r-20">
                        {label}
                    </div>
                )
            }
            return(
                <div className="profile-menu absolute flex-col-center b-r-20 padding-20 z-10" style={{
                    width: "200px",
                    right: "50px",
                    top: "50px"
                }}>
                    {items.map((item, index)=><Item label={item} key={index}/>)}
                </div>
            )
        }
        
        // functions
        const handleClick = ()=>{
            setShowMenu(!showMenu);
        }
        
        // render
        return (
            <div className='relative'>
                <img src={smileImg} className="link" width="50" onClick={handleClick}/>
                {showMenu?<ProfileMenu/>:""}
            </div>
        )
    }

    // render
    return (
        <div className="Header flex-col-center">
            <div className='Header-container'>
                <Title/>
                <ProfilePic/>
            </div>
        </div>
    )
}
export default Header;

// end
