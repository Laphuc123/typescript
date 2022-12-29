import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './common/header/Header';
import Home from './page/home/Home';
import Dashboard from './page/dashboard/Dashboard';
import Registration from './page/registration/Registration';
import Login from './page/login/Login';

function App() {
  return (
    <>
      <div className='bg-[#E5E5E5]'>
        <div className="App bg-[#f4c27f] rounded-[19px]">
          <div className=''>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
          <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
