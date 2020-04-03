import React  from 'react';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';

const Layout = (props) => {
  return(
    <div>
      <Header/>
        { props.children }
      <Footer/>
    </div>
  )
};

export default Layout;
