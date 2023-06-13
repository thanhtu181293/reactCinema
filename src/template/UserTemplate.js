import React from 'react';
const { Route } = require("react-router-dom")

function UserLayouts(props) {
    return (
        <div>
            {props.children}
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
