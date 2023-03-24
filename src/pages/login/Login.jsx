import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ArrowIcon, FbTextImg } from "../../utils/icons"
import './Login.css'


const Login = ({setName}) => {
    const navigate = useNavigate();
    const [nameInput, setNameInput] = useState()

    const handleInputChange = e => {
        setNameInput(e.target.value)
    }

    const handleSubmit = () => {
        if (nameInput !== undefined){
            const capitalizedNameInput = nameInput.charAt(0).toUpperCase() + nameInput.slice(1)
            setName(capitalizedNameInput)
            localStorage.setItem("profileName", capitalizedNameInput);
            setNameInput('')
        }
        navigate('/')
    }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-text-container">
                    <div className="login-logo-wrapper">
                        <img src={FbTextImg} />
                    </div>
                    <div>Facebook helps you connect and share with the people in your life.</div>
                </div>

                <div className="login-input-container">
                    <input 
                        placeholder="What should we call you?"
                        value={nameInput}
                        onChange={handleInputChange}
                        onSubmit={handleSubmit}
                        onKeyDown={e => {
                            if (e.key==='Enter') 
                                handleSubmit()
                        }}
                    />

                    <button onClick={handleSubmit}>
                        <ArrowIcon />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Login