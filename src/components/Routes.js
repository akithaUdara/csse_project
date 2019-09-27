import React from 'react';
import {Route, Switch} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SupplierPage from './pages/SupplierPage';
import SupplierAddPage from './pages/SupplierAddPage';
import SupplierAddItemPage from './pages/SupplierAddItemPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import NotFoundPage from './pages/NotFoundPage';
import FormPage from './pages/LoginPage';
import SignUpPage from './pages/UserCreation';


class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={DashboardPage}/>
                <Route path='/dashboard' component={DashboardPage}/>
                <Route path='/supplier' component={SupplierPage}/>
                <Route path='/supplieradd' component={SupplierAddPage}/>
                <Route path='/supplieradditem' component={SupplierAddItemPage}/>
                <Route path='/profile' component={ProfilePage}/>
                <Route path='/tables' component={TablesPage}/>
                <Route path='/404' component={NotFoundPage}/>
                <Route path='/login' component={FormPage}/>
                <Route path='/signup' component={SignUpPage}/>

            </Switch>
        );
    }
}

export default Routes;
