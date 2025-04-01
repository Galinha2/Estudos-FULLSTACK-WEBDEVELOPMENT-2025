import Login from "./Login";

let IsLogin = false;

const App = () => {
  return (
    <div> 
      {(IsLogin === true ? <h1>Hello World!</h1> : <Login />)}
    </div>
)};

export default App;