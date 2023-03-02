import './App.css';
// import { Container } from '@chakra-ui/react'
// import NavBars from './components/subComponents/NavBars';
import Home from './components/Home';
import Footer from './components/Footer';
import Skill from './components/Skill';
import { Routes, Route } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  // BreadcrumbSeparator,
} from '@chakra-ui/react'

function App() {
  return (
    <div className='container' minW='768' maxW='-moz-max-content' bg='green.400' color='#262626'>
      <nav className='nav-bar'>
        <Breadcrumb separator='|'>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>My Profile</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </nav>
      <Home />
      <Skill />
      {/* <Routes>
        <Route exact path='/repositoriWIthFramework#' element={<Skill />}></Route>
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
