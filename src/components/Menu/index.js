import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";
import Button from "../../components/Button";

// import { Container } from './styles';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo Aluraflix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
