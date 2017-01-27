import * as React from "react";
import {Route} from "react-router";
import Index from "./containers/Index";
import AdTag from "./components/AdTag";

export default (
    <Route path="/" component={Index}>
        <Route path="/ad-tags/:adTagId" component={AdTag} />
    </Route>
);