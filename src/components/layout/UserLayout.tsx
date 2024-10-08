import React, {memo} from 'react';
import styles from './UserLayout.module.scss';
import {Outlet} from "react-router-dom";
import logo from "../../static/photos/LogoLogin.svg"
import nav1 from "../../static/photos/transaction.svg"
import nav2 from "../../static/photos/book.png"
import nav3 from "../../static/photos/seings.svg"
import nav4 from "../../static/photos/support.svg"


const UserLayout = memo(() => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.navItemContainer}>
                    <img className={styles.mainLogo} src={logo} alt=""/>
                </div>
                <div className={styles.navItemContainer}>
                    <img className={styles.navItemIcon} src={nav1} alt=""/>
                    <div className={styles.navItemText}>История транзакций</div>
                </div>
                <div className={styles.navItemContainer}>
                    <img className={styles.navItemIcon} src={nav2} alt=""/>
                    <div className={styles.navItemText}>Забронировать</div>
                </div>
                <div className={styles.navItemContainer}>
                    <img className={styles.navItemIcon} src={nav3} alt=""/>
                    <div className={styles.navItemText}>Настройки</div>
                </div>
                <div className={styles.navItemContainer}>
                    <img className={styles.navItemIcon} src={nav4} alt=""/>
                    <div className={styles.navItemText}>Поддержка</div>
                </div>

            </div>
            <Outlet/>
        </div>
    );
})

export default UserLayout;