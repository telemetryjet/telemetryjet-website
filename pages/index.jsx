import React from "react";
import BasePage from "../components/screens/BasePage";
import './index.scss';

function Index() {
    return (
        <BasePage>
            <div className="bp3-dark copy-container">
                <div className="titleCard bp3-card bp3-elevation-2">
                    <h1><span className="logo-text">TelemetryJet</span> is in early development.</h1>
                    <h5 className="bp3-heading"><a className="bp3-skeleton" href="#" tabIndex="-1">Card heading</a></h5>
                    <p className="bp3-skeleton">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget tortor felis.
                        Fusce dapibus metus in dapibus mollis. Quisque eget ex diam.
                    </p>
                    <button type="button" className="bp3-button bp3-icon-add bp3-skeleton" tabIndex="-1">Submit</button>
                </div>
                <div className="bp3-card bp3-elevation-2">
                    <span className="inlineIcon animate-flicker bp3-icon-standard bp3-icon-cell-tower" />
                    <b>TelemetryJet</b> is a real-time data and control platform for makers.
                    <ul className="bp3-list">
                        <li>Stream live data sensor data from your project, with an easy-to-use set of libraries and
                            integrations.
                        </li>
                        <li>
                            View, record, and analyze live data from any internet-connected device.
                        </li>
                        <li>
                            Build beautiful, functional dashboards and share with teammates.
                        </li>
                        <li>
                            Trigger actions based on data, and feed control signals back to devices.
                        </li>
                    </ul>
                </div>
                <div className="copyright">TelemetryJet &copy; 2020 Chris Dalke</div>
            </div>
        </BasePage>
    );
}

export default Index;
