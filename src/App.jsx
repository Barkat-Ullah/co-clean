
// import { Outlet } from 'react-router-dom'
import './App.css'
import Banner from './components/layout/Banner'
import Footer from './components/layout/Footer'
// import MainLayout from './components/layout/MainLayout'
import Navbar from './components/layout/Navbar'

function App() {

  return (
    <div>
      <Navbar></Navbar>
       <div className='max-w-6xl mx-auto'>
       <Banner></Banner>
       </div>
      <Footer></Footer>
    </div>
    //  <MainLayout>
    //    <Outlet></Outlet>
    //  </MainLayout>
  )
}

export default App
