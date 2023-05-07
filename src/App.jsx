import React from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header/Header'
import Home from './Pages/Home'
import Favorite from './Pages/Favorite'
import Cart from './components/Cart/Cart'


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const cartResponse = await axios.get('https://643d5217f0ec48ce905912cd.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://644ec7154e86e9a4d80127b7.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://643d5217f0ec48ce905912cd.mockapi.io/items');
      setIsLoading(false)
  
      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }
    
    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        setCartItems(prev => prev.filter((cartObj) => Number(cartObj.id) !== Number(obj.id)))
        axios.delete(`https://643d5217f0ec48ce905912cd.mockapi.io/cart/${obj.id}`)
      } else {
        axios.post('https://643d5217f0ec48ce905912cd.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
      }
    } catch (error) {
      alert('Mistake')
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://644ec7154e86e9a4d80127b7.mockapi.io/favorites/${obj.id}`)
      } else {
        const { data } = await axios.post('https://644ec7154e86e9a4d80127b7.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
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
      <Routes>
        <Route path='/' element={
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeInputValue={onChangeInputValue}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            isLoading={isLoading}
          />
        }>
        </Route>
        <Route path='/favorites' element={<Favorite
          items={favorites}
          onAddToFavorite={onAddToFavorite}
        />}>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
