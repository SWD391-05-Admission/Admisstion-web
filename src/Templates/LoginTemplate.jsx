import React from 'react'
import { Route, Redirect } from 'react-router'
import { USER_LOGIN } from '../Utils/setting'

export default function LoginTemplate(props) {
    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return(
                localStorage.getItem(USER_LOGIN) ? <Redirect to='/admin' /> :
                 <div>
                    <props.component {...propsRoute} />
                </div> 
            )
        }} />
    )
}
