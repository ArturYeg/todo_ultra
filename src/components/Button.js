import './Button.css';

function Button(props) {
    return  <button 
                type="button" 
                className="Button" 
                disabled={props.disabled}
            >
                {props.text}
            </button>
        
}

export default Button;