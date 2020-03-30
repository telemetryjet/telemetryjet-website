import React from "react";
import styles from './PageBlock.module.scss';

function PageBlock(props) {
    const {
        children,
        bgChildren
    } = props;

    return (
        <div className={styles.pageBlock}>
            <div className={styles.pageBlockContent}>
                {children}
            </div>
            {bgChildren}
        </div>
    );
}

export default PageBlock;
