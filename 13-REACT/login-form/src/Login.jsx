function Login() {
    return (
        <div className="frame">
            <input className="btn log" type="email" name="email" id="email" placeholder="Username" />
            <input className="btn log" type="password" name="password" id="password" placeholder="Password" />
            <input className="btn sub" type="submit" value="Login" />
        </div>
    )
};

export default Login;