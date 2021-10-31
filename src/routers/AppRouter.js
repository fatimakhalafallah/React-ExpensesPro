import React from 'react';
import { BrowserRouter, Route , Switch  , Link , NavLink} from 'react-router-dom';
import CreatePage from '../components/CreatePage';
import ExpenseDashboardPAge from '../components/ExpenseDashboard';
import EditExpensePage from '../components/Edit';
import HelpPage from '../components/Help';
import PgeNotFound from '../components/NotFound';
import Header from '../components/Header';


const AppRouter = ()=> (
    <BrowserRouter>
    <div> 
        <Header/>
           <Switch>
            <Route path="/" component={ExpenseDashboardPAge} exact={true} />
            <Route path="/create" component={CreatePage} />
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={PgeNotFound}/>
          </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;