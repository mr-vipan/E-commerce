import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/header/Navbar'
import NavbarMenu from '../components/header/NavbarMenu'
import Carousel from '../components/pricing/Carousel'

const Layout = () => {
  return (
    <div>
      {/* <Header/> */}
      <Navbar />
      <NavbarMenu />
      <Carousel />
      {/* <Main /> */}
      
      {/* <InputForm /> */}
      <Outlet/>
      <Footer />
    
    </div>
  )
}

export default Layout
