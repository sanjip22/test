import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Offer from './components/home/Offer';


function routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/offer" component={Offer}/>
                    
                </Switch>
            </Router>
        </div>
    )
}

export default routes
