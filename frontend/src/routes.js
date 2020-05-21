import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login'
import Signup from './pages/signup'
import Projects from './pages/projects'
import NewProject from './pages/new_projects'

export default function Routes(){

    return(

        <BrowserRouter>
        
            <Switch>

                <Route path="/" exact component={Login}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/new_project" component={NewProject}></Route>

            </Switch>

        </BrowserRouter>

    );

}