import React from "react";
import BasePage from "../components/screens/BasePage";
import PageBlock from "../components/features/page/PageBlock";

function Index() {
    return (
        <BasePage>
            <PageBlock>
                <h1><span className="logo-text">TelemetryJet</span> is in early development.</h1>
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
            </PageBlock>
        </BasePage>
    );
}

export default Index;
