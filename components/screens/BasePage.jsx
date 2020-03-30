import React from "react";
import Head from "next/head";
import NavBar from "../features/navbar/NavBar";
import Footer from "../features/footer/Footer";

function BasePage(props) {
    const {
        children,
        title
    } = props;

    return (
        <div id="root" className="dark-scrollbar">
            <Head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={title} />
                <meta name="author" content="Chris Dalke" />
            </Head>
            <NavBar />
            <div className="pageContent">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default BasePage;
