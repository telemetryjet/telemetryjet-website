import React from "react";
import Head from "next/head";

function BasePage(props) {
    const {
        children
    } = props;

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>TelemetryJet</title>
                <meta name="description" content="TelemetryJet" />
                <meta name="author" content="Chris Dalke" />
                <link href="https://unpkg.com/normalize.css@^7.0.0" rel="stylesheet"/>
                <link href="https://unpkg.com/@blueprintjs/icons@^3.4.0/lib/css/blueprint-icons.css" rel="stylesheet" />
                <link href="https://unpkg.com/@blueprintjs/core@^3.10.0/lib/css/blueprint.css" rel="stylesheet" />
                <link rel="stylesheet" href="/styles/index.css" />
            </Head>
            {children}
        </div>
    );
}

export default BasePage;
