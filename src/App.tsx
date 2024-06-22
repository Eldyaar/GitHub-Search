import { Routes, Route } from 'react-router-dom'


import FavoritesPages from './pages/FavoritesPages'
import MainPage from './pages/HomePage'
import Navigation from './components/Navigation'



const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/favourites' element={<FavoritesPages />} />
      </Routes>
    </>
  )
}

export default App
