import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from "./App";
import Game from "./Game";

function Routes() {
    return (
        <div>
            <Router>
                <div>

                    <Switch>
                        <Route path="/app">
                            <App />
                        </Route>
                        <Route path="/game">
                            <Game />
                        </Route>
                        <Route path="/">
                            <App />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Routes;
