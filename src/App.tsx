import './App.css'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import  Companies from './component/Companies' 
import CompanyDetails from './component/CompanyDetails'
import Error from './component/Error'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Companies/>}></Route>
        <Route path='/:id' element={<CompanyDetails/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
     
 
    </div>
  )
}

export default App