import React, {Component} from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Container} from 'reactstrap';
//import Header from '../../components/Header/';
import Sidebar from '../components/Sidebar/Sidebar';
//import Breadcrumb from '../../components/Breadcrumb/';
//import Aside from '../../components/Aside/';
import Footer from '../components/Footer/Footer';



class Layout extends Component {
  render() {
    return (
      <div className="app">
        <ToastContainer className="text-right"/>

        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">

            <Container fluid>
              <Switch>

              </Switch>
            </Container>
          </main>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
