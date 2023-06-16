import React from 'react'
import Home from './Pages/Home/Home';
import Search from './Pages/Search/search';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Header />
       <Router>
                  <Routes>
                     <Route path='/Search' element={ <Search />}>
                
                     </Route>
                     <Route path='/' element={  <Home />}>
                    
                     </Route>
                  </Routes>
        </Router>
     <Footer />
    </div>
  )
}

export default App
