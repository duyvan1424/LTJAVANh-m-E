import '../styles/register.css'
const RegisterPage = () => {
    return (
        <div class="register-container">
            <h2>Create Account</h2>
            <form action="/register" method="post">
                <div class="input-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" required />
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <button type="submit">Register</button>
            </form> <br />
            <p class="login-text">Already have an account? <a href="/login">Login here</a></p>
        </div>
    )
}
export default RegisterPage;