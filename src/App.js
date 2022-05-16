import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Items from './components/Home/Items/Items';
import AllItems from './components/Inventory/All-Items/AllItems';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/home/items" element={<Items></Items>}></Route>
        <Route path="/inventory/:itemId" element={<Inventory></Inventory>}></Route>
        <Route path="/manageinventory" element={<AllItems></AllItems>}></Route>
      </Routes>
    </div>
  );
};

export default App;
