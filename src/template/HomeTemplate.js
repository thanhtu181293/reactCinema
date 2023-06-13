import React from 'react';
const { Route } = require("react-router-dom")

function HomeLayouts(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

function HomeTemplate({Component, ...props}) {
    return (
        <Route
            {...props}
            render = {(propsComponent)=>(
                <HomeLayouts>
                    <Component {...propsComponent}/> 
                </HomeLayouts>
            )}
        />
    )
}

export default HomeTemplate
