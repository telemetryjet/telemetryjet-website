import React from "react";
import styles from './PageBlock.module.scss';
import classNames from 'classnames';

function PageBlock(props) {
    const {
        children,
        bgChildren,
    } = props;

    return (
        <div className={styles.pageBlock}>
            <div className={styles.pageBackgroundContent}>
                {bgChildren}
            </div>
            <div className={styles.pageBlockContent}>
                {children}
            </div>
        </div>
    );
}

export default PageBlock;
