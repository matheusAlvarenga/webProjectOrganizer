import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login'
import Signup from './pages/signup'
import Projects from './pages/projects'
import NewProject from './pages/new_projects'
import SharedFolder from './pages/shared_folder'
import ConfirmAcc from './pages/confirm_acc'
import ConfirmedAcc from './pages/confirmed_acc'
import IndividualProj from './pages/individual_project/ip_body'

export default function Routes(){

    return(

        <BrowserRouter>
        
            <Switch>

                <Route path="/" exact component={Login}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/new_project" component={NewProject}></Route>
                <Route path="/shared_folder" component={SharedFolder}></Route>
                <Route path="/confirm_account" component={ConfirmAcc}></Route>
                <Route path="/confirmed_account" component={ConfirmedAcc}></Route>
                <Route path="/project_view" component={IndividualProj}></Route>

            </Switch>

        </BrowserRouter>

    );

}