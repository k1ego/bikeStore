import React from 'react'
import logo from "../assets/svg/logo.svg";

export const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="container header__container">
				<a href="#" className="header__logo">
					<img
						src={logo}
						width="154"
						alt="ВелоSHOP"
						className="logo"
					/>
				</a>
				<nav className="menu header__menu">
					<ul className="menu__list header__menu-list">
						<li className="menu__item">
							<a href="#" className="menu__link">Каталог</a>
						</li>
						<li className="menu__item">
							<a href="#" className="menu__link">Новинки</a>
						</li>
						<li className="menu__item">
							<a href="#" className="menu__link">Заказать</a>
						</li>
						<li className="menu__item">
							<a href="#" className="menu__link">Контакты</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
