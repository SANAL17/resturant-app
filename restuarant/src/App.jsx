
import Allrest from './Components.jsx/Allrest';
import Footer from './Components.jsx/Footer';
import Header from './Components.jsx/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ViewRest from './Components.jsx/ViewRest';

function App() {
  return (
    <div className="App">
      
      <Header/>
     <section>
      <Routes>
        {/* localhost : 3000- all restuarant details */}
        <Route path='/' element={<Allrest/>}/>
        {/* localhost : 3000- all restuarant details */}
        <Route path='/view/:id' element={<ViewRest/>}/>
      </Routes>
     </section>
      <Footer/>
    </div>
  );
}

export default App;
