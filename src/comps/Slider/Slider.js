// Slider.js
import { useState } from 'react';
import "./Slider.css";

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
export default Slider;

// end
