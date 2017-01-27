import React from "react";
import {connect} from "react-redux";
import AdTags from "../components/AdTags/AdTags";
const {Component, PropTypes} = React;

class Index extends Component {
    render() {
        return (
            <AdTags />
        );
    }
}

export default connect(
    (state) => {
        return {};
    },
    (dispatch) => {
        return {};
    }
)(Index);
