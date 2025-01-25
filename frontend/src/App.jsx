import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AddProduct from './components/Addproduct/AddProduct';
import Home from './components/Home/Home'; // Ensure you have a Home component
import EditProduct from './components/EditProduct/EditProduct';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path='/editProduct' element={<EditProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
