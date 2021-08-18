function CoinRow({ coin, index }) {
  const priceChangeState = coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'

  return (
    <tr>
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          style={{ width: '3%' }}
          alt={coin.name}
          className='me-4 img-fluid'
        />
        <span>{coin.name}</span>
        <span className='ms-3 text-muted text-uppercase'>{coin.symbol}</span>
      </td>
      <td>$ {coin.current_price}</td>
      <td
        className={priceChangeState}>
        {coin.price_change_percentage_24h} %
      </td>
      <td>{coin.total_volume}</td>
    </tr>
  )
}

export default CoinRow
