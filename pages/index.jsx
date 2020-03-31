import React from "react";
import BasePage from "../components/screens/BasePage";
import PageBlock from "../components/features/page/PageBlock";

/*
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
 */

function Index() {
    return (
        <BasePage>
            <PageBlock bgChildren={(
                <>
                    <div className="landingPageBg1" />
                </>
            )}>
                <h1>The ultimate telemetry data and control platform for makers.</h1>
                <p>TelemetryJet makes it easier than ever to build intelligent systems that collect data.</p>
                <p>TJet provides powerful tools, for beginners and pros.</p>
                <p></p>
                <div className="landingPageBgScreens">
                    <div className="landingPageBgScreen1" />
                    <div className="landingPageBgScreen2" />
                    <div className="landingPageBgScreen3" />
                </div>
            </PageBlock>
            <PageBlock>
                <h2>Stream sensor data from your hardware.</h2>
                <p>Stream live data sensor data from your project, with an easy-to-use set of libraries and integrations.
                    TelemetryJet integrates with a wide range of common protocols, such as NMEA 0183, VE.Direct, CAN-bus,
                    VESC, and more.
                </p>
            </PageBlock>
            <PageBlock bgChildren={(
                <>
                    <div className="landingPageBgDark" />
                </>
            )}>
                <h2>View, record, and analyze data</h2>
                <p>
                    View, record, and analyze live data from any internet-connected device.
                    The TelemetryJet UI
                </p>
            </PageBlock>
            <PageBlock>
                <h2>Build beautiful, functional dashboards.</h2>
                <p>
                    Build beautiful, functional dashboards with no code required.
                </p>
                <p>
                    Out of the box, TelemetryJet has a rich library of dashboard components designed with data in mind.
            </p>
            </PageBlock>
            <PageBlock>
                <h2>Share with teammates, and stream live from anywhere.</h2>
                <p>
                    Trigger actions based on data, and feed control signals back to devices.
                </p>
            </PageBlock>
            <PageBlock bgChildren={(
                <>
                    <div className="landingPageBgDark" />
                </>
            )}>
                <h2>Open Source.</h2>
                <p>
                    TelemetryJet is, and always will be, completely Open Source.
                    You can run the system yourself, locally.
                </p>
                <p>
                    TelemetryJet Cloud is a hosted instance of TelemetryJet that will allow you to collect and share data
                    without requiring you to manage your own infrastructure.
                </p>
            </PageBlock>
        </BasePage>
    );
}

export default Index;
