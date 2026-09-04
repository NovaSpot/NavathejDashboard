
import NavigationBar from './components/NavigationBar'
import Customers from './pages/Customers'
import Employee from './pages/employees'
import Request from './pages/Request'
import Upcoming from './pages/Upcoming'
import Update from './pages/Update'
import './styles/App.css'
import { useState } from 'react'

function App() {
  const [activePage, setActivePage] = useState('Update')

  function renderPage() {
    const pages = {
      Employees: <Employee />,
      Upcoming: <Upcoming />,
      Customers: <Customers />,
      Request: <Request />,
      Update: <Update />,
    }

    return pages[activePage]
  }

  return (
   
   <div className='Main'>
    <div className='NavigationMain'>
    <NavigationBar activePage={activePage} onPageChange={setActivePage} />
    <div className='body'>
      {renderPage()}
    </div>
   </div> </div>
  )
}

export default App
