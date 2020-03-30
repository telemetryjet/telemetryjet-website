import React from "react";
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../public/styles/main.scss';

function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default App
