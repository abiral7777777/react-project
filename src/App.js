import logo from './logo.svg';
import './App.css';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Layout from './pages/theme/Layout';
import UserManagement from './pages/UserManagement';
import Contact from './pages/theme/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUsers from "./pages/AddUsers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/user-management" element={< UserManagement />} />
            <Route path="/faq" element={< FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/adduser" element={<AddUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;