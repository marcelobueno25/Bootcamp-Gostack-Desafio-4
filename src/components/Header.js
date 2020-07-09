import React from "react";

import Logo from '../assets/shape.png';
import Icon from '../assets/icon.svg';

import './Header.css'

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={Logo} alt="" />
      <div className="header_perfil">
        <h4 className="header_myperfil">Meu Perfil</h4>
        <img className="header_perfilImg" src={Icon} alt="" />
      </div>
    </div>
  );
}

export default Header;