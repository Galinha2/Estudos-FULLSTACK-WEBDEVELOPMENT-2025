import './App.css'
import Note from "./notes";
import contacts from './contacts';

const App = () => {
  return (
    <div className='frame'>
      <Note {... contacts[0]} />
      <Note {... contacts[1]} />
      <Note {... contacts[2]} />
      <Note {... contacts[3]} />
  </div>
  )
};

export default App;