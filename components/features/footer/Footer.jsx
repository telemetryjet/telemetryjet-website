import React from "react";
import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h1>MEDIA</h1>
                    <ul>
                        <li>Twitter</li>
                        <li>GitHub</li>
                        <li>Slack</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h1>LEARN</h1>
                    <ul>
                        <li>About</li>
                        <li>Documentation</li>
                        <li>API Reference</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h1>CONTRIBUTE</h1>
                    <ul>
                        <li>Contributor Guide</li>
                        <li>GitHub</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h1>RESOURCES</h1>
                    <ul>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h1>ABOUT</h1>
                    <ul>
                        <li>Team</li>
                        <li>Project History</li>
                    </ul>
                    <div className={styles.copyright}>
                        <ul>
                            <li>TelemetryJet</li>
                            <li>&copy; 2020, Chris Dalke</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
