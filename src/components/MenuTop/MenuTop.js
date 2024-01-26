import styled from "styled-components";
import {NavLink} from "react-router-dom";
// import LogoTB from "./Sandwich Frontrun Bot (1).png"
import './style.css'
import {useState} from "react";
// import { SiTether } from "react-icons/si";

// import {Language} from "../Language";
const BalanceText = styled.div`
  margin-left: auto; // Это поместит элемент вправо
  color: #fff;
  font-size: 18px;
  margin-right: 30px; // Регулирует расстояние между логотипом и текстом
  font-family: 'Roboto', sans-serif;
`;
export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 0;
  background-color: #08a652;
  color: #fff;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 20;
`

export const MenuTop = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    // const [isOpen, setIsOpen] = useState(false);

    // const options = [
    //     { label: '0,00000', icon: <FaBitcoin size="30" color="orange" /> },
    //     { label: '0,00000', icon: <SiEthereum size="30" color="blueviolet" /> },
    //     { label: '0,00000', icon: <SiLitecoin size="30" color="lightgrey"/> },
    // ];

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    // const handleOptionClick = (option) => {
    //     setSelectedOption(option);
    //     setIsOpen(false);
    // };

    // const tg = window.Telegram.WebApp;

    return (
        <StyledNav>
            <NavLink to="/" className={`logo-text ${selectedOption === null ? 'active' : ''}`}>
                SWFRBOT
            </NavLink>
            <BalanceText>Balance: 5 453.26$</BalanceText>

            {/*        <div className={`dropdown ${isOpen ? 'isOpen' : ''}`}>*/}

            {/*            <button className="dropdown-toggle" onClick={toggleDropdown}>*/}
            {/*                {selectedOption ? (*/}
            {/*                    <>*/}
            {/*                        <span className="option-icon">{selectedOption.icon}</span>*/}
            {/*                        {selectedOption.label}*/}
            {/*                    </>*/}
            {/*                ) : (*/}
            {/*                    <>*/}
            {/*                        <span className="option-icon"><SiTether size="30" color="lightseagreen" /></span>*/}
            {/*                        0,00000*/}
            {/*                    </>*/}
            {/*                )}*/}
            {/*            </button>*/}

            {/*            {isOpen && (*/}
            {/*                <ul className="dropdown-menu">*/}
            {/*                    {options.map((option, index) => (*/}
            {/*                        <li key={index} onClick={() => handleOptionClick(option)} className="dropdown-option">*/}
            {/*                            <span className="option-icon">{option.icon}</span>*/}
            {/*                            <span className="option-label">{option.label}</span>*/}
            {/*                        </li>*/}
            {/*                    ))}*/}
            {/*                </ul>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*<Language/>*/}
        </StyledNav>
    )
}

