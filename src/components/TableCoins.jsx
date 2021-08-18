import CoinRow from './CoinRow'

const HEAD_TITLES = ['#', 'Name', 'Price', 'Price Change', '24h Volume']

function TableCoins({ coins, search }) {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <table className='table table-dark mt-4 table-hover'>
      <thead>
        <tr>
          {HEAD_TITLES.map((title) => (
            <td key={title}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.name} index={index + 1} coin={coin}></CoinRow>
        ))}
      </tbody>
    </table>
  )
}

export default TableCoins
