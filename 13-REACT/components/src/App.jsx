import './App.css'
import Note from "./notes";
import contacts from './contacts';

function AllNotes(index) {
  return(
    <Note 
      key={index.id}
      title={index.title}
      text={index.text}
    />
  )
};

const App = () => {
  return (
    <div className='frame'>
      {contacts.map(AllNotes)}
  </div>
  )
};

export default App;