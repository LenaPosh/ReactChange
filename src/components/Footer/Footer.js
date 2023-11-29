import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation
import './style.css';
import { FaWallet } from 'react-icons/fa';
import { TiChartBarOutline } from 'react-icons/ti';
import { ImHome } from 'react-icons/im';
// import { AiOutlineLineChart } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
// import { FcComboChart } from "react-icons/fc";
// import { FaChartBar } from "react-icons/fa";

export const Screen = styled.div`
  min-height: 100vh;
`;

const FooterStyle = styled.footer`
  padding: 0;
  color: #fff;
  background-color: #2c2c2c;
  text-align: center;
  position: fixed;
  bottom: 5px;
  left: 0;
  right: 0;
  width: 100vw;
  height: 60px;
`;

export const AppFooter = () => {
    const { t } = useTranslation();

    return (
        <>
            <FooterStyle className="footer">
                <div className="menu-navigation">
                    <div className="menu-items">

                        <NavLink to="/home" className="menu-item active">
                            <div className="menu-icon">
                                <ImHome />
                            </div>
                            <div className="menu-text" style={{ whiteSpace: 'nowrap' }}>{t('home')}</div>
                        </NavLink>

                        <NavLink to="/menu" className="menu-item">
                            <div className="menu-icon">
                                <IoBarChartSharp />
                            </div>
                            <div className="menu-text">PNL</div>
                        </NavLink>





                        <NavLink to="/trade" className="menu-item">
                            <div className="menu-icon">
                                <TiChartBarOutline />
                            </div>
                            <div className="menu-text">{t('trade')}</div>
                        </NavLink>
                        {/*<NavLink to="/trade" className="menu-item">*/}
                        {/*    <div className="menu-icon">*/}
                        {/*        <TiChartBarOutline />*/}
                        {/*    </div>*/}
                        {/*    <div className="menu-text">{t('qr_code_title.part_1')}</div>*/}
                        {/*</NavLink>*/}

                        <NavLink to="/wallet" className="menu-item">
                            <div className="menu-icon">
                                <FaWallet />
                            </div>
                            <div className="menu-text">BALANCE</div>
                        </NavLink>
                    </div>
                </div>
            </FooterStyle>
        </>
    );
};
