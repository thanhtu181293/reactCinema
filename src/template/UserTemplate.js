import React from 'react';
import Header from '../containers/UserTemplate/HomePage/Header/Header';
import Footer from '../containers/UserTemplate/HomePage/Footer/Footer';
import Menu from '../containers/UserTemplate/HomePage/Menu/Menu';
const { Route } = require("react-router-dom")

function UserLayouts(props) {
    return (
        <div>
            <Header />
            <Menu />
            {props.children}
            <Footer />
        </div>
    )
}

function UserTemplate({Component, ...props}) {
    return (
        <Route
            {...props}
            render = {(propsComponent)=>(
                <UserLayouts>
                    <Component {...propsComponent}/> 
                </UserLayouts>
            )}
        />
    )
}

export default UserTemplate
