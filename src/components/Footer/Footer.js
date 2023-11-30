import React, {useEffect, useState} from 'react';
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
const MenuLink = styled(NavLink)`
  color: ${props => props.isHomePage ? '#08a652' : '#495057'};
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  padding: 10px;
  position: relative;
  border-radius: 10px;
  margin-bottom: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;

  &:hover {
    outline: none;
  }

  .menu-icon {
    margin-bottom: 3px;
    font-size: 18px;
    transition: color 0.3s;
    font-family: 'Roboto', sans-serif;
  }

  &:hover .menu-icon {
    color: #007bff;
  }

  &.active {
    color: #08a652;

    .menu-icon {
      color: #08a652;
    }

    &:after {
      height: 2px;
    }

    &:hover:after {
      height: 2px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -10px;
    left: 0;
    transition: height 0.3s, background 0.3s;
  }
`;
export const AppFooter = () => {
    const { t } = useTranslation();
    const [isHomePage, setIsHomePage] = useState(false);
    useEffect(() => {
        const currentPath = window.location.pathname.startsWith('/home');
        setIsHomePage(currentPath);
    }, []);



    return (
        <>
            <FooterStyle className="footer">
                <div className="menu-navigation">
                    <div className="menu-items">

                        <MenuLink to="/home" className={`menu-item ${isHomePage ? 'active' : ''}`} activeClassName="active">
                            <div className="menu-icon">
                                <ImHome />
                            </div>
                            <div className="menu-text" style={{ whiteSpace: 'nowrap' }}>{t('home')}</div>
                        </MenuLink>


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
