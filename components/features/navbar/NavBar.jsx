import React from "react";
import styles from './NavBar.module.scss';
import {Button, Navbar, Alignment, Icon} from "@blueprintjs/core";

function NavBar() {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>TJET <Icon icon="airplane" /></Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <a className="bp3-button bp3-minimal">About</a>
                <a className="bp3-button bp3-minimal">Updates</a>
                <a className="bp3-button bp3-minimal">Source Code</a>
                <a className="bp3-button bp3-minimal">Documentation</a>
                <Navbar.Divider />
                <a className="bp3-button bp3-icon-cloud">Sign In</a>
            </Navbar.Group>
        </Navbar>
    );
}

export default NavBar;
