import './App.css';

import StyledButton from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      {/* <StyledButton>Styled Button</StyledButton> */}
      <Header/>
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
