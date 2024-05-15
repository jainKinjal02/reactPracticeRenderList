import { useState } from 'react';
import './App.css';

function App() {
  const list = [
    {name: 'Iphone',
    price: 20},
    {name: 'airpods',
    price: 50},
    {name: 'mac',
    price: 100},
    {name: 'Iphone 15',
    price: 80} 
  ]
const [filteredList , setList] = useState(list);

const handleSearch = (e) => {
  console.log(e.target.value);
  const text = e.target.value;
  const newList = list.filter((item)=> item.name.toLowerCase().includes(text));
  setList(newList);
}


  return (
    <div className="App">
        <div className='search-bar'>
            <input type='search' onChange={(e)=> handleSearch(e)}/>
        </div>
        {filteredList.map((item)=> {
          return (
            <>
              <div className='card-item' key={item.name}>
                <div className='item-name' key={item.name}>{item.name}</div>
                <div className='item-price' key={item.price}>{item.price}</div>
              </div>
            </>
          )
        })}
    </div>
  );
}

export default App;
