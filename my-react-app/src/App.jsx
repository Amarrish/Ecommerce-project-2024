
import { Route, Routes } from 'react-router-dom'
import './App.css'

import CustomerRoutes from './Routes/CustomerRoutes'

function App() {


  return (
    <>

    
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}/>
      </Routes>
    </div>

    </>
  )
}

export default App
