const { useState } = React;

//Global
var allDone = false;
var ammountDone = 0;
var groceryList = ['brocalli', 'spinnage', 'carrot', 'watermellon', 'apples', 'chocalate', 'milk', 'mayonaise', 'mustard'];
var listAmmount = groceryList.length;

var setStatus = function(inCart) {
  ReactDOM.render(<App />, document.getElementById("app"));
  if (inCart === true) {
    ammountDone++;
  } else {
    ammountDone--;
  }
  if (ammountDone === listAmmount) {
    allDone = true;
  } else {
    allDone = false;
  }
}

const Item = (grocery, setAmountDone) => {
  const [inCart, setCart] = useState(false);
  const [hovering, setHovering] = useState(false);
  const style = {textDecoration: inCart ? 'line-through': 'none', color: inCart ? 'green': 'red', 'font-weight': hovering ? 'bold': ''};
  return <li style={style} onClick={() => {setCart(!inCart); setStatus(!inCart)}} onMouseEnter = {() => {setHovering(true)}} onMouseLeave = {() => {setHovering(false)}}>{grocery.item}</li>
};

const GroceryList = (groceryList) => {
  return(<ul>
    {groceryList.groceries.map((grocery, setAmountDone) => (
      <Item item={grocery}/>
    ))}
  </ul>)
};
const App = () => {
  const style = {textDecoration: allDone  ? 'line-through': 'none', color: allDone ? 'green': 'red'};

  return (<div>
    <h2 style={style}>My Grocery List</h2>
    <GroceryList groceries={groceryList}/>
  </div>)
};

ReactDOM.render(<App />, document.getElementById("app"));