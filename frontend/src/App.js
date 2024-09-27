
import './App.css';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import Home from './pages/home';


function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
