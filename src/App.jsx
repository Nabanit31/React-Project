import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Service';
import Account from './components/Pages/Account';
// function App(){
//   const [User, setUser] = useState("Nabanit")

//   const ChangeUser = () => {
//     setUser("Invincible Kumar")
//   }

//   return (<div>
//     <h1>Hello</h1>
//     <h2>Current User: {User}</h2>
//     <button onClick={ChangeUser}>Click Me</button>
//   </div>
//   )
// }

// export default App; 

const App = () => {
  // const User = "Nabanit Roy"
  
  
  return (
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = '/service' element={<Services/>}/>
        <Route path = '/account' element={<Account/>}/>
      </Routes>
    </div>
    <Footer/>
  </>
  
  )
}

export default App
