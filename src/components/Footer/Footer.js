import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';
import { FaWallet } from 'react-icons/fa';
import { TiChartBarOutline } from 'react-icons/ti';
import { ImHome } from 'react-icons/im';
import { IoBarChartSharp } from 'react-icons/io5';

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

const MenuItem = styled.div`
  color: ${(props) => (props.isCurrentPage ? '#08a652' : '#495057')};
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
    color: #007bff;
  }

  .menu-icon {
    margin-bottom: 3px;
    font-size: 18px;
    transition: color 0.3s;
    font-family: 'Roboto', sans-serif;
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
    const location = useLocation();

    useEffect(() => {
        setIsHomePage(location.pathname.startsWith('/home'));
    }, [location.pathname]);

    return (
        <>
            <FooterStyle className="footer">
                <div className="menu-navigation">
                    <div className="menu-items">
                        <MenuItem isCurrentPage={isHomePage}>
                            <Link to="/home" className="menu-item" activeClassName="active">
                                <div className="menu-icon">
                                    <ImHome />
                                </div>
                                <div className="menu-text" style={{ whiteSpace: 'nowrap' }}>
                                    {t('home')}
                                </div>
                            </Link>
                        </MenuItem>

                        <MenuItem isCurrentPage={location.pathname === '/menu'}>
                            <Link to="/menu" className="menu-item">
                                <div className="menu-icon">
                                    <IoBarChartSharp />
                                </div>
                                <div className="menu-text">PNL</div>
                            </Link>
                        </MenuItem>

                        <MenuItem isCurrentPage={location.pathname === '/trade'}>
                            <Link to="/trade" className="menu-item">
                                <div className="menu-icon">
                                    <TiChartBarOutline />
                                </div>
                                <div className="menu-text">{t('trade')}</div>
                            </Link>
                        </MenuItem>

                        <MenuItem isCurrentPage={location.pathname === '/wallet'}>
                            <Link to="/wallet" className="menu-item">
                                <div className="menu-icon">
                                    <FaWallet />
                                </div>
                                <div className="menu-text">BALANCE</div>
                            </Link>
                        </MenuItem>
                    </div>
                </div>
            </FooterStyle>
        </>
    );
};
