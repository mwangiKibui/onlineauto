import React from 'react';

//third-party
import {Switch,Route} from 'react-router-dom';
//components
import Navbar from './header/header';
import Banner from './header/Banner';
import Footer from './footer/footer';

//page components
import Homepage from './pages';
import PageNotFound from './pages/404/PageNotFound';
import Showroom from './pages/showroom';
import AboutUs from './pages/aboutus';
import Vehicle from './pages/vehicle';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Logout from './pages/auth/logout';
import Dashboard from './pages/auth/dashboard';

const Layout = () => {
    return (
        <section className="layout">
            <div className="app_header">
                <Banner />
                <Navbar />
            </div>
            <div className="app_body">
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/showroom" component={Showroom} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route exact path="/showroom/:slug" component={Vehicle} />
                    <Route exact path="/auth/login" component={Login} />
                    <Route exact path="/auth/signup" component={Signup} />
                    <Route exact path="/auth/logout" component={Logout} />
                    <Route path="/auth/dashboard" component={Dashboard} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
            <div className="app_footer">
                <Footer/>
            </div>
        </section>
    )
};

export default Layout;