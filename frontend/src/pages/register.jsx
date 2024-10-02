import Header from '../components/layout/header';
import '../styles/register.css'
import { NavLink } from 'react-router-dom'

const RegisterPage = () => {
    return (
       <div>
        <div><Header/></div>
         <div className="container pt-20">
            <div className="wrapper">
                <form action="">
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" required />
                        <i className='bx bxs-lock'></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> I agree to the <a href="hi">Terms & Conditions</a>
                        </label>
                    </div>
                    <button type="submit" className="btn">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
       </div>
    )
}
export default RegisterPage;