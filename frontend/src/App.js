import './App.css';
import CheckAPI from './Components/CheckAPI';
import Header from './Components/Header';
import NotLogged from './Pages/NotLogged';


function App() {

  return (
    <div className="App">
      <Header/>
      <main className="main">
        <NotLogged/>
        <CheckAPI/>
        </main>
    </div>
  );
}

export default App;
