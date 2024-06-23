import '../styles/App.css';
import Header from "./Header"
import Footer from "./Footer"
import Accueil from "./Accueil"
import BankAccount from "./BankAccount"
import SignIn from "./SignIn"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { store } from './app/store'
// import { Provider } from 'react-redux'
// import ReactDOM from 'react-dom'


function App() {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/user" element={<BankAccount />} />
            <Route path="/sign-in" element={<SignIn />} />
            {/* <Route path='/transactions' element={<Transactions account={account}/>} /> */}
            
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
