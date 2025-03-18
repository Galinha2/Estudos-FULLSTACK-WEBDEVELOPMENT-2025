const customCss = {
  color: 'red',
}

function result() {
  let time = new Date().getHours();
  
  if(time > 0 && time < 13) {
    const name = 'Morning'
    const color = customCss.color = 'red'
    return {name, color};
  };
  if(time > 12 && time < 18) {
    const name = 'Afternoon'
    const color = customCss.color = 'green'
    return {name, color};
  };
  if(time > 17) {
    const name = 'Evening'
    const color = customCss.color = 'blue'
    return {name, color};
  };
};

const App = () => {
  return (
    <>
      <h1 style={{color: result().color}}>Good {result().name}!</h1>
    </>
  )
};

export default App;