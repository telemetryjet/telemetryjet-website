import React from "react";
import styles from './NavBar.module.scss';
import {Button, Navbar, Alignment, Icon} from "@blueprintjs/core";

function NavBar() {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>
                    <a className="bp3-button bp3-minimal bp3-icon-airplane bp3-large">TJET</a>
                </Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT} className={styles.desktopMenu}>
                <a className="bp3-button bp3-minimal">About</a>
                <a className="bp3-button bp3-minimal">Updates</a>
                <a className="bp3-button bp3-minimal">Source Code</a>
                <a className="bp3-button bp3-minimal">Documentation</a>
                <Navbar.Divider />
                <a className="bp3-button bp3-minimal bp3-intent-primary">Sign In</a>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT} className={styles.mobileMenu}>
                <a className="bp3-button bp3-icon-menu bp3-minimal" />
            </Navbar.Group>
        </Navbar>
    );
}

export default NavBar;
