import { Events } from './modules/events/events.component';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route  path={["/", "/events"]} component={Events} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;