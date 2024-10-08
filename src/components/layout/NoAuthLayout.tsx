import React, {memo} from 'react';
import styles from './NoAuthLayout.module.scss';
import {Outlet} from "react-router-dom";
import Logo from '../../static/photos/LogoFooter.svg'
import BigLogo from "../../static/photos/BigLogo.svg"
import CurrentTime from "../time/CurrentTime";

const NoAuthLayout = memo(() => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Outlet/>
            </div>

            <img src={BigLogo} className={styles.bigLogoUp} alt=""/>
            <img src={BigLogo} className={styles.bigLogoDown} alt=""/>

            <div className={styles.tariffContainer}>
                <div className={styles.compNumber}>23</div>
                <div className={styles.tariff}>Стандарт</div>
            </div>

            <div className={styles.timeAndL}>
                <div className={styles.language}>EN</div>
                <div className={styles.curTime}><CurrentTime/></div>
            </div>


            <footer className={styles.footer}>
                <div className={styles.footerLinks}>
                    <div className={styles.footerLink}>
                        Информация
                    </div>
                    <div className={styles.footerLink}>
                        Вакансии
                    </div>
                    <div className={styles.footerLink}>
                        Помощь
                    </div>
                    <div className={styles.footerLink}>
                        Конфиденциальность
                    </div>
                    <div className={styles.footerLink}>
                        Правила
                    </div>
                    <div className={styles.footerLink}>
                        FAQ
                    </div>
                    <div className={styles.footerLink}>
                        Прайс-лист
                    </div>
                </div>
                <div className={styles.footerPowered}>
                    Powered by <img src={Logo} alt=""/> <span style={{fontWeight: 700}}>SOFTWARE</span>
                </div>
            </footer>
        </div>
    );
})

export default NoAuthLayout;