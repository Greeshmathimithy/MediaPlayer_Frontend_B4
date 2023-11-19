import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';
import Add from './components/Add';
import Category from './components/Category';
import View from './components/View';
import VideoCard from './components/VideoCard';


function App() {
  return (
    <div>
      <Header/>
     
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watchhistory' element={<WatchHistory/>} />
        </Routes>  
        <Footer/>
        <Add/>
        <Category/>
        <View/>
        <VideoCard/>

    </div>
  );
}

export default App;
