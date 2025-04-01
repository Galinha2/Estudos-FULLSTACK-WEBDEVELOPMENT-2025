import Card from "./card";
import contacts from "./contacts";

function createCard(index) {
  return(
    <Card 
      key={index.id} 
      title={index.title} 
      avatar={index.avatar} 
      phone={index.phone} 
      email={index.email}/>
  )
}

const App = () => {
  return (
    <div>
      {contacts.map(createCard)}
    </div>
  )
};

export default App;