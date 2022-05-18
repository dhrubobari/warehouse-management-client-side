import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Header/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Items from './components/Home/Items/Items';
import AddItem from './components/Inventory/AddItem/AddItem';
import Inventory from './components/Inventory/Inventory';
import ManageInventory from './components/Inventory/ManageInventory/ManageInventory';
import Login from './components/Login/Login';
import ProtectRoute from './components/Login/ProtectRoute/ProtectRoute';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/home/items" element={<Items></Items>}></Route>
        <Route path="/inventory/:itemId" element={<ProtectRoute><Inventory></Inventory></ProtectRoute>}></Route> 
        <Route path="/manageinventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/addinventory" element={<AddItem></AddItem>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
};

export default App;
