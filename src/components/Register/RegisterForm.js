import React, {useState} from 'react';

// CSS
import './register.css';
// ReCAPTCHA
import ReCAPTCHA from 'react-google-recaptcha';

const RegisterForm = () => {

    // States
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPass: ''
    });
    const [validCaptcha, setValidCaptcha] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMesage] = useState("");

    const getData = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const getCaptcha = value => {
        if(value){
            setValidCaptcha(true);
        } else {
            setValidCaptcha(false);
        }
    }

    const {username, email, password, confirmPass } = user;

    const register = e => {
        e.preventDefault();
        
        if(password !== confirmPass){
            setErrorMesage("Las contraseñas deben coincidir.");
            setError(true);
            return;
        }

        setError(false);

        if(!validCaptcha){
            alert("Debes verificar que no eres un robot");
            return;
        }

        console.log("Register");
    }

    return (
        <div className="container">
            <h3>Crear una cuenta</h3>
            <div className="form">
                <form className="card-body form-group" onSubmit={register}>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input 
                        type="text"
                        className="form-control form-control-sm" 
                        name="username"
                        id="username"
                        onChange={getData}
                        required
                    />
                    <br/>

                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                        type="email" 
                        className="form-control form-control-sm" 
                        name="email"
                        id="email"
                        onChange={getData}
                        required
                    />
                    <br/>
                    
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control form-control-sm" 
                        name="password"
                        id="password"
                        onChange={getData}
                        required
                    />
                    <br/>

                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control form-control-sm" 
                        name="confirmPass"
                        id="confirmPass"
                        onChange={getData}
                        required
                    />
                    <br/>

                    <ReCAPTCHA 
                        sitekey="6Lfels0ZAAAAACbHu5aWnfFe60qb4K1skstlK-l9"
                        onChange={getCaptcha}
                    />

                    {
                        error ?
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div> :
                            null
                    }                    
                    <br/>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Registrarse</button>
                    <a href="">¿Ya tienes una cuenta?</a>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;