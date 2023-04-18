import '../assets/css/homeArrow.css';
import { useNavigate } from "react-router-dom";

function ToHomeArrow() {
    const navigate = useNavigate();
    return (
        <>
        <div className="arrow-container pirata">
        <p onClick={()=> navigate('/')}>Home <i className="fa-solid fa-house fa-fw"></i></p>
        </div>
        </>
    );
    }

export default ToHomeArrow;