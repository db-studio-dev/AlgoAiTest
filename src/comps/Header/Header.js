// Header.js
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import smileImg from "assets/images/header/smile.png";
import "./Header.css";

const Header = ()=>{
    // inits
    const navigate = useNavigate();
    const location = useLocation();

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
                const handleClick = ()=>{
                    navigate(label);
                }
                return(
                    <div className={(location.pathname.includes(label)?"profile-menu-item-selected default-cursor":"link")+" font-20 margin-5 profile-menu-item text-white padding-10 b-r-20"} onClick={handleClick}>
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
