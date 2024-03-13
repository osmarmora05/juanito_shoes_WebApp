import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CatalogoIcon,
  ClientesIcon,
  FacturarIcon,
  PedidosIcon,
  RegistrarCatalogoIcon,
  ReportesIcon,
} from "./ui/Icons";
import "../css/navbar.css";

function NavBar() {
  const roles = {
    grocer: false, // Bodegero
    cashier: false, // Cajero
    admin: false, // administrador
  };

  const [selectedOption, setSelectedOption] = useState(
    roles.grocer || roles.admin ? "catalogo-nav" : "facturacion-nav"
  );

  const noRolesOrAllFals =
    (roles.grocer === null && roles.admin === null && roles.cashier === null) ||
    (roles.grocer == false && roles.admin == false && roles.cashier == false);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <nav className="nav">
      <img
        src="../../public/logo.png"
        alt="Company logo"
        className="nav__logo"
      />

      <ul className="nav__list">
        {(roles.grocer || roles.admin || noRolesOrAllFals) && (
          <NavItem
            to={"catalogo"}
            option={"catalogo-nav"}
            selectedOption={selectedOption}
            onClick={() => handleRadioChange("catalogo-nav")}
            icon={<CatalogoIcon />}
            tooltip={"Catalogo"}
          />
        )}
        {(roles.grocer || roles.admin || noRolesOrAllFals) && (
          <NavItem
            to={"/"}
            option={"entradas-nav"}
            selectedOption={selectedOption}
            onClick={() => handleRadioChange("entradas-nav")}
            icon={<RegistrarCatalogoIcon />}
            tooltip={"Registrar productos"}
          />
        )}

        {(roles.cashier || roles.admin || noRolesOrAllFals) && (
          <NavItem
            to={"*"}
            option={"facturacion-nav"}
            selectedOption={selectedOption}
            onClick={() => handleRadioChange("facturacion-nav")}
            icon={<FacturarIcon />}
            tooltip={"Facturar"}
          />
        )}

        {(roles.cashier || roles.admin || noRolesOrAllFals) && (
          <NavItem
            to={"*"}
            option={"pedidos-nav"}
            selectedOption={selectedOption}
            onClick={() => handleRadioChange("pedidos-nav")}
            icon={<PedidosIcon />}
            tooltip={"Pedidos"}
          />
        )}

        {(roles.admin || noRolesOrAllFals) && (
          <NavItem
            to={"*"}
            option={"usuarios-nav"}
            selectedOption={selectedOption}
            onClick={() => handleRadioChange("usuarios-nav")}
            icon={<ClientesIcon />}
            tooltip={"Clientes"}
          />
        )}

        {(roles.admin || noRolesOrAllFals) && (
          <NavItem
            to={"*"}
            option={"reportes-nav"}
            selectedOption={selectedOption}
            onClick={() => handleRadioChange("reportes-nav")}
            icon={<ReportesIcon />}
            tooltip={"Reportes"}
          />
        )}
      </ul>
    </nav>
  );
}

function NavItem({ to, option, selectedOption, onClick, icon, tooltip="" }) {
  return (
    <li className="nav__item">
      <Link
        to={to}
        className={`nav__link ${
          selectedOption === option ? "nav__link--selected" : ""
        }`}
        onClick={() => onClick(option)}
        title={tooltip}
      >
        {icon}
      </Link>
    </li>
  );
}

export default NavBar;