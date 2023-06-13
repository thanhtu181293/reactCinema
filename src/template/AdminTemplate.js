import React from 'react';
import {Route} from 'react-router-dom';

function AdminLayout(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default function AdminTemplate({Component, ...props}) {
    return (
        <Route
            {...props}
            render = {(propsComponent) => (
                <AdminLayout>
                    <Component {...propsComponent} />
                </AdminLayout>
            )}
        />
    )
}
