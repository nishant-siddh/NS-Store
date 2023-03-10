import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import SingleProduct from './Components/SingleProduct';
import { GlobalStyle } from './Components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Footer from './Components/Footer';

const App = () => {

  const theme = {
    colors: {
      baseColor: "#b89f48",
      onHoverBtnBgColor: '#c1a74c',
      blackColor: '#070707',
      greyBackground: '#1b1b1b',
      lightWhite: '#b3b1b1db',
      lightText: '#dcd9d9db',
    },
    media: {
      mobile: '768px',
      tablet: '998px'
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <GlobalStyle />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/products' element={<Products />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/singleProduct/:id' element={<SingleProduct />} />
          </Routes>

          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
