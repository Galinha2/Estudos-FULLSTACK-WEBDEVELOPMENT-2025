import cars from "./practice";

const App = () => {
  const tesla = cars[1]
  const teslaTopSpeed = tesla.speedStats.topSpeed;
  const teslaTopColor = tesla.colorsByPopularity[0]

  const honda = cars[0]
  const hondaTopSpeed = honda.speedStats.topSpeed;
  const hondaTopColor = honda.colorsByPopularity[0]

  return (
    <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColor}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColor}</td>
    </tr>
  </table>
  )
};

export default App;