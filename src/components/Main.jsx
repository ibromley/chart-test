import React, { Component } from 'react';
import Biking from './views/Biking';
import Another from './views/Another';
import { Route, Switch} from "react-router-dom";

class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Biking} />
                    <Route path="/primary" component={Biking}/>
                    <Route path="/secondary" component={Another}/>
                </Switch>
            </main>
        );
    }
}

export default Main;