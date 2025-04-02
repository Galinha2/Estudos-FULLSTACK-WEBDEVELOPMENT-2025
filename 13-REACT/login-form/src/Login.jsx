import { useState } from "react";

function Login() {
    const [state, newState] = useState(false);
    const [name, sentName] =useState('');

    function HashChange() {
        sentName(target.value)
    };

    return (
        <div className="frame">
            <h1>Hello {name}</h1>
            <input className="btn log" type="email" name="email" id="email" placeholder="Username" onChange={HashChange} />
            <input className="btn log" type="password" name="password" id="password" placeholder="Password" />
            <input className="btn sub" type="submit" value={state ? 'Sign in' : 'Log in'} onMouseOver={()=>newState(true)} onMouseOut={()=>newState(false)} onClick={HashChange}/>
            <search />
        </div>
    );
};

export default Login;