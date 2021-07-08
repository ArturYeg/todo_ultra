import { useState } from 'react';
import './Button.css';

function Button(props) {
    const [click, setClick]=useState()

    return  <button 
                type="button" 
                className="Button" 
                disabled={props.disabled}
                onclick={()=>setClick(this.disabled)}
            >
                {props.text}
            </button>
        
}

export default Button;