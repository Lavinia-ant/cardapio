import { Route, Routes } from 'react-router-dom'
import CenteredLayout from './layouts/CenteredLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route element={<CenteredLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Menu />} />
        </Route>  
      </Routes>

      <Footer />
    </div>
  )
}