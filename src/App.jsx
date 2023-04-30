import React, { useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Remove from './img/remove.svg'


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://643d5217f0ec48ce905912cd.mockapi.io/items').then(res => setItems(res.data))
    axios.get('https://643d5217f0ec48ce905912cd.mockapi.io/cart').then(res => setCartItems(res.data))
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://643d5217f0ec48ce905912cd.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const removeCard = (a) => {
    axios.delete(`https://643d5217f0ec48ce905912cd.mockapi.io/cart/${a}`)
    setCartItems(cartItems.filter((obj) => obj.id !== a))
  }

  const onChangeInputValue = (event) => {
    setSearchValue(event.target.value)
  }

  function classToggle() {
    document.body.classList.toggle('active')
  }

  return (
    <div className="wrapper">
      {cartOpened ? <Cart removeCard={removeCard} items={cartItems} onClose={() => {
        setCartOpened(false)
        classToggle()
      }} /> : null}
      <Header onClickOpened={() => {
        setCartOpened(true)
        classToggle()
      }} />
      <main className="main">
        <div className="main__content">
          <div className='main__top'>
            <h1 className='main__title'>Все кроссовки</h1>
            <div className="main__search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" />
              </svg>
              {searchValue ? <img width={18} height={18} className='main__search-remove' src={Remove}
                onClick={() => setSearchValue('')}
                alt="" /> : null}
              <input
                onChange={onChangeInputValue}
                value={searchValue}
                placeholder='Поиск...' />
            </div>
          </div>
          <div className='main__cards'>
            {items
              .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, index) => (
                <Card
                  key={index}
                  id={obj.id}
                  name={obj.name}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  onPlus={(obj) => onAddToCart(obj)}
                  onFavorite={() => console.log('da')} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
