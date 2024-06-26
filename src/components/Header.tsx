import React from 'react';
import logo from '../assets/svg/logo.svg';
import { Link } from 'react-router-dom';




export const Header: React.FC = () => {



	const onScrolling = () => {
		window.scrollTo({
			top: 915,
			behavior: 'smooth',
		});
	}

	return (
		<div className='header'>
			<div className='container header__container'>
				<Link to='/' className='header__logo'>
					<img src={logo} width='154' alt='ВелоSHOP' className='logo' />
				</Link>
				<nav className='menu header__menu'>
					<ul className='menu__list header__menu-list'>
						<li onClick={onScrolling} className='menu__item'>
							<a href='#' className='menu__link'>
								Каталог
							</a>
						</li>
						<li className='menu__item'>
							<a href='#' className='menu__link'>
								Новинки
							</a>
						</li>
						<li className='menu__item'>
							<a href='#' className='menu__link'>
								Заказать
							</a>
						</li>
						<li className='menu__item'>
							<a href='#' className='menu__link'>
								Контакты
							</a>
						</li>
						<li className='menu__item'>
							<Link to='/SignIn' className='menu__link'>
								Войти
							</Link>
						</li>
						<li className='menu__item'>
							<Link to='/SignUp' className='menu__link'>
								Зарегистрироваться
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
