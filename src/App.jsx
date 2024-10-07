import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.jsx';
import Service from './pages/service/Service.jsx';
import Services from './pages/services/Services.jsx';
import Contact from './pages/contact/Contact.jsx';
import Pricing from './pages/pricing/Pricing.jsx';
import About from './pages/about/About.jsx';
import NotFound from './pages/notFound/NotFound.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Header from './components/header/Header.jsx';
import Login from './components/login/Login.jsx';
import Signup from './components/signup/Signup.jsx';
import Footer from './components/footer/Footer.jsx';
import Digitalmarket from './pages/Digital-marketing/Digitalmarket.jsx';
import Nfccard from './pages/NFC-card/Nfccard.jsx';
import Business from './pages/Business-Development/Business.jsx';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/digital' element={<Digitalmarket />} />
        <Route path='/nfc' element={<Nfccard/>} />
        <Route path='/busi' element={<Business/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
