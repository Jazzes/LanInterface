import React, {useContext} from 'react';
import styles from './MainPage.module.scss';
import menu1 from "../../static/photos/device.svg"
import menu2 from "../../static/photos/selectGame.svg"
import menu3 from "../../static/photos/problem.svg"
import menu4 from "../../static/photos/session.svg"
import menu5 from "../../static/photos/logOut.svg"
import {UserContext} from "../../context/Context"
import avatar from "../../static/photos/avatar.png"
import refresh from "../../static/photos/reflesh.svg"
import banner1 from "../../static/photos/banner1.jpg"
import banner2 from "../../static/photos/banner2.jpg"
import arrowRight from "../../static/photos/arrowRight.svg"
import arrowLeft from "../../static/photos/arrowLeft.svg"
import Logo from "../../static/photos/LogoFooter.svg";


const MainPage = () => {
    const {changeAuth} = useContext(UserContext)

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.block}>

                    <div className={styles.profile}>
                        <img className={styles.avatar} src={avatar} alt=""/>
                        Алексей Костылев Николаевич
                    </div>

                    <div className={styles.itemBlock}>
                        <div className={styles.itemBlockRow}>
                            <div className={styles.itemBlockText}>Текущий статус:</div>
                            <div className={styles.itemBlockValue}>STANDART</div>
                        </div>
                        <div className={styles.itemBlockRow} style={{marginTop: 20}}>
                            <div className={styles.itemBlockText}>До смены статуса осталось:</div>
                            <div className={styles.itemBlockValue}>10 часов 23 минуты</div>
                        </div>
                    </div>

                    <div className={styles.itemBlock}>
                        <div className={styles.itemBlockHeader}>Информация о текущей сесии</div>
                        <div>
                            <div className={styles.itemBlockRow}>
                                <div className={styles.itemBlockText}>Осталось минут:</div>
                                <div className={styles.itemBlockValue}>120 мин.</div>
                            </div>
                            <div className={styles.itemBlockRow} style={{marginTop: 20}}>
                                <div className={styles.itemBlockText}>Сессия истекает:</div>
                                <div className={styles.itemBlockValue}>14.12.2020, 20:24</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.itemBlock}>
                        <div className={styles.itemBlockRow}>
                            <div className={styles.itemBlockHeader}>Основной счет</div>
                            <img className={styles.refresh} src={refresh} alt=""/>
                        </div>

                        <div className={styles.balanceRow}>
                            <div className={styles.balance}>15 000 <span style={{fontWeight: 300}}>₽</span></div>
                            <div className={styles.bonusBalance}>
                                <div>1 200 <span style={{fontWeight: 300}}>₽</span></div>
                                <div style={{fontWeight: 300, fontSize: "1.1rem"}}>Бонусный счет</div>
                            </div>
                        </div>


                        <div className={styles.topUp}>пополнить</div>
                    </div>

                    <div className={styles.bannerBlock}>
                        <img src={banner1} className={styles.bannerImg} alt=""/>
                        <div className={styles.swiperContainer}>
                            <img src={arrowLeft} className={styles.swiperArrow} alt=""/>
                            <img style={{marginLeft: 15}} src={arrowRight} className={styles.swiperArrow} alt=""/>
                        </div>
                    </div>
                    <div className={styles.bannerBlock}>
                        <img src={banner2} className={styles.bannerImg} alt=""/>
                        <div className={styles.swiperContainer}>
                            <img src={arrowLeft} className={styles.swiperArrow} alt=""/>
                            <img style={{marginLeft: 15}} src={arrowRight} className={styles.swiperArrow} alt=""/>
                        </div>
                    </div>
                </div>


                <div className={styles.tariffes}>
                    <div className={styles.tariffHeader}>Тарифы, доступные на данном ПК</div>
                    <div className={styles.tariffItemContainer}>
                        <div className={styles.tarrifItemName}>Часовой тариф</div>
                        <div className={styles.tarrifItemPrice}>100 <span style={{fontWeight: 300}}>₽</span></div>
                    </div>
                    <div className={styles.tariffItemContainer}>
                        <div className={styles.tarrifItemName}>Пакет на 3 часа</div>
                        <div className={styles.tarrifItemPrice}>270 <span style={{fontWeight: 300}}>₽</span></div>
                    </div>
                    <div className={styles.tariffItemContainer}>
                        <div className={styles.tarrifItemName}>Пакет на 5 часов</div>
                        <div className={styles.tarrifItemPrice}>400 <span style={{fontWeight: 300}}>₽</span></div>
                    </div>
                    <div className={styles.tariffItemContainer}>
                        <div className={styles.tarrifItemName}>Пакет “День” (9:00 - 16:00)</div>
                        <div className={styles.tarrifItemPrice}>450 <span style={{fontWeight: 300}}>₽</span></div>
                    </div>
                    <div className={styles.tariffItemContainer}>
                        <div className={styles.tarrifItemName}>Пакет ”Вечер” (16:00 - 22:00)</div>
                        <div className={styles.tarrifItemPrice}>450 <span style={{fontWeight: 300}}>₽</span></div>
                    </div>
                    <div className={styles.tariffItemContainer}>
                        <div className={styles.tarrifItemName}>Пакет “Сутки” 24 часа</div>
                        <div className={styles.tarrifItemPrice}>1 450 <span style={{fontWeight: 300}}>₽</span></div>
                    </div>

                </div>
            </div>

            <div className={styles.menu}>
                <div className={styles.menuItemContainer} style={{backgroundColor: "#F6FBFF"}}>
                    <img src={menu1} alt=""/>
                    <div className={styles.menuItemText}>вернутся на рабочий стол</div>
                </div>

                <div className={styles.menuItemContainer} style={{backgroundColor: "#F8F0FF"}}>
                    <img src={menu2} alt=""/>
                    <div className={styles.menuItemText}>выбрать игру</div>
                </div>

                <div className={styles.menuItemContainer} style={{backgroundColor: "#FFFEEE"}}>
                    <img src={menu3} alt=""/>
                    <div className={styles.menuItemText}>Сообщить о проблеме</div>
                </div>

                <div className={styles.menuItemContainer} style={{backgroundColor: "#F0FFF9"}}>
                    <img src={menu4} alt=""/>
                    <div className={styles.menuItemText}>Продлить сессию</div>
                </div>

                <div className={styles.menuItemContainer} onClick={() => {
                    changeAuth()
                }} style={{backgroundColor: "#FFEDED"}}>
                    <img src={menu5} alt=""/>
                    <div className={styles.menuItemText}>завершить сессию</div>
                </div>
            </div>

            <div className={styles.footerPowered}>
                Powered by <img src={Logo} alt=""/> <span style={{fontWeight: 700}}>SOFTWARE</span>
            </div>
        </div>
    );
};

export default MainPage;