import React from 'react'
import { Route, Redirect } from 'react-router'
import { ACCESS_TOKEN } from '../Utils/setting'

export default function LoginTemplate(props) {
    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return(
                localStorage.getItem(ACCESS_TOKEN) ? <Redirect to='/admin' /> :
                 <div>
                    <props.component {...propsRoute} />
                </div> 
            )
        }} />
    )
}
