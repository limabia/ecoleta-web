import React from "react";
import "./styles.css";
import background from "../../assets/home-background.svg";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>
        <main>
          <div className="content-center">
            <h1>Seu marketplace de coleta de resíduos</h1>
            <p>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </p>
            <div className="content-center">
              <Link to="/create-point">
                <span>
                  <FiLogIn />
                </span>
                <strong>Cadastre um ponto de coleta</strong>
              </Link>
            </div>
          </div>
          <div>
            <img className="img-bg" src={background} alt="background" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
