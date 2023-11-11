import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Coins from './components/Coins';
import Coin from './Routes/Coin';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';


function App() {
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&locale=en'

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <div>
        <Navbar />
        <Search/>
        <Routes>
          <Route path='/' element={<Coins coins={coins} />} />
          <Route path='/coin' element={<Coin/>} >
            <Route path=':coinId' element={<Coin/>} />
          </Route>

        </Routes>
      </div>
    </>
  )
}

export default App
