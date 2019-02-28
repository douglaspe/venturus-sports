import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import RegistrationForm from '../components/registration/RegistrationForm'
import UserList from "../components/user/UserList";

export default props =>
    <Switch>
        <Route exact path='/' component={RegistrationForm} />
        <Route path='/users' component={UserList} />
        <Redirect from='*' to='/' />
    </Switch>