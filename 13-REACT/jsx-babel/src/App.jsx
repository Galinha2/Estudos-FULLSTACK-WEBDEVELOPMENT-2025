const Card = ({title}) => {
  return (
    <h3 className="movies">{title}</h3>
  )
};

const name = 'Henrique'
const lname = 'Galinha'

const App = () => {
  return (
    <>
      <h1>Hello {name + ' ' + lname}!</h1>
      <ul>
        <li><a href="#"><Card title='Avatar'/></a></li>
        <li><a href="#"><Card title='Star Wars'/></a></li>
        <li><a href="#"><Card title='Minecraft'/></a></li>
      </ul>
    </>
  )
};

export default App
