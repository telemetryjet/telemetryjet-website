import React from "react";
import styles from './NavBar.module.scss';
import {Button, Navbar, Alignment, Icon} from "@blueprintjs/core";

function NavBar() {
    return (
        <Navbar className={styles.navBar}>
            <div className="bp3-dark">
            <div className={styles.navBarContent}>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>
                        <a className="bp3-button bp3-minimal bp3-icon-airplane bp3-large">TJET</a>
                    </Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT} className={styles.desktopMenu}>
                    <a className="bp3-button bp3-minimal">About</a>
                    <a className="bp3-button bp3-minimal" href="https://docs.telemetryjet.com/">Docs</a>
                    <a className="bp3-button bp3-minimal" href="https://files.telemetryjet.com/">Releases</a>
                    <a className="bp3-button bp3-minimal">Blog</a>
                    <Navbar.Divider />
                    <a className="bp3-button bp3-intent-primary">Sign In</a>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT} className={styles.mobileMenu}>
                    <a className="bp3-button bp3-icon-menu bp3-minimal" />
                </Navbar.Group>
            </div>
            </div>
        </Navbar>
    );
}

export default NavBar;
