// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Content />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p> Hello {handleNameChange()}</p>
         
      </header> */}
    </div>
  );
}

export default App;
