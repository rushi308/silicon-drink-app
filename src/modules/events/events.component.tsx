import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { EventDetailComponent } from './detail/event-detail.component';
import { EventListComponent } from './list/event-list.component';

type EventsState = {
}

export class Events extends Component<{}, EventsState> {

    render() {
        return (
            <div className="container-fluid">
                <Switch>
                    <Route exact path={["/", "/events"]} component={EventListComponent} />
                    <Route exact path="/events/:id" component={EventDetailComponent} />
                </Switch>
            </div>
        )
    }
}