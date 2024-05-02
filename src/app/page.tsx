import React from 'react';
import styles from './page.module.scss';

export default function Page() {
    return (
        <div className={styles.bg}>
            <a className={styles.link} href="\public\resume\imoiwmresumefall2023.pdf" target="_blank"> Resume </a>
            <a className={styles.link} href="\public\resume\imoiwmresumefall2023.pdf" target="_blank"> Projects </a>
            <a className={styles.link} href="\public\resume\imoiwmresumefall2023.pdf" target="_blank"> Misc </a>

            <div className="socials">
                <a href="https://www.linkedin.com/in/ivan-mo/" target="_blank">
                </a>
                <a href="https://github.com/imoiwm" target="_blank">
                </a>
            </div>
        </div> 
    )
}
