// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import { Link } from 'react-router'
import * as Actions from "../../actions";
import "./AdTags.scss";

class AdTags extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric">Name</th>
                        <th className="mdl-data-table__cell--non-numeric">Type</th>
                        <th className="mdl-data-table__cell--non-numeric">Source</th>
                        <th className="mdl-data-table__cell--non-numeric">Active targets</th>
                        <th className="mdl-data-table__cell--non-numeric">State</th>
                        <th className="mdl-data-table__cell--non-numeric"></th>
                    </tr>
                </thead>
                <tbody>
                {this.props.adTags.map((item) =>
                    <tr key={item.id}>
                        <td className="mdl-data-table__cell--non-numeric">{item.name}</td>
                        <td className="mdl-data-table__cell--non-numeric">{item.type}</td>
                        <td className="mdl-data-table__cell--non-numeric">{item.source}</td>
                        <td className="mdl-data-table__cell--non-numeric"></td>
                        <td className="mdl-data-table__cell--non-numeric">{item.state}</td>
                        <td className="mdl-data-table__cell--non-numeric">
                            <Link to={`/user/${item.id}`}>info</Link>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

export default connect(
    (state) => ({
        adTags: state.tags.elements || [],
    }),
    (dispatch) => ({
        info(adTagId) {
            dispatch({type: Actions.ADTAG_INFO, adTagId})
        }
    })
)(AdTags);
