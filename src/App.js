import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import TableCoins from './components/TableCoins'

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <form>
          <input
            type='text'
            placeholder='Search a coin'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name='search'
            className='form-control | bg-dark | text-light | border-0 | mt-4 | text-center'
          />
        </form>
        <TableCoins coins={coins} search={search}></TableCoins>
      </div>
    </div>
  )
}

export default App
