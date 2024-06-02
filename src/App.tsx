import React from 'react';
import './scss/App.scss';
import logo from "./assets/svg/logo.svg";
import bike1 from "./assets/images/bike1.jpg";
import bike3 from "./assets/images/bike3.jpg";
import bike2 from "./assets/images/bike2.jpg";
import bike5Big from "./assets/images/bike5Big.jpg";
import helmet from "./assets/images/helmet.jpg";
import bike4 from "./assets/images/bike4.jpg";


function App() {
  return (
		<div className="App">
			<header className="header">
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
		</header>
		<main>
			<section className="hero">
				<div className="container hero__container">
					<div className="hero__content">
						<h1 className="hero__title">
							Магазин велосипедов с&nbsp;самой быстрой доставкой
						</h1>
						<p className="hero__desc">
							Закажите велосипед прямо сейчас и мы подарим вам отличную&nbsp; 
							<a className="default-link" href="#">каску</a>.
						</p>
						<button className="default-btn">Выбрать велосипед</button>
					</div>
				</div>
			</section>
			<section className="callback">
				<div className="callback__right">
					<h2 className="callback__title">Обратная связь</h2>
					<p className="callback__desc">
						Укажите номер телефона и мы с вам свяжемся для обсуждения заказа.
					</p>
					<form action="" className="callback-form">
						<input
							type="tel"
							name="tel"
							className="input-field callback-form__inp"
							placeholder="Телефон"
						/>
						<button type="submit" className="default-btn callback-form__btn">
							Отправить
						</button>
					</form>
				</div>
			</section>
			<section className="catalog">
				<div className="container catalog__container">
					<h2 className="subtitle catalog__subtitle">Каталог</h2>
					<ul className="catalog__list">
						<li className="catalog__item">
							<article className="product-card catalog__card">
								<img
									src={bike1}
									alt="Велосипед"
									className="product-card__img"
								/>
								<div className="product-card__body">
									<div className="product-card__body-top">
										<h3 className="product-card__title">
											Велосипед BMX Tech Team Goof 20
										</h3>
										<strong className="product-card__price">12 830 руб</strong>
									</div>
									<button className="default-btn product-card__btn">Купить</button>
								</div>
							</article>
						</li>
						<li className="catalog__item">
							<article className="product-card catalog__card">
								<img
									src={bike3}
									alt="Велосипед"
									className="product-card__img"
								/>
								<div className="product-card__body">
									<div className="product-card__body-top">
										<h3 className="product-card__title">
											Горный велосипед 29" TRINX
										</h3>
										<strong className="product-card__price">13 884 руб</strong>
									</div>
									<button className="default-btn product-card__btn">Купить</button>
								</div>
							</article>
						</li>
						<li className="catalog__item catalog__item_big">
							<article className="product-card catalog__card product-card_big">
								<img
									src={bike2}
									alt="Велосипед"
									className="product-card__img product-card__img_big"
								/>
								<div className="product-card__body product-card__body_big">
									<div className="product-card__body-top">
										<h3 className="product-card__title">
											Велосипед BMX Tech Team Goof 20
										</h3>
										<strong className="product-card__price product-card__price_big"
											>12 830 руб</strong
										>
									</div>
									<button
										className="default-btn product-card__btn product-card__btn_big"
									>
										Купить
									</button>
								</div>
							</article>
						</li>
						<li className="catalog__item catalog__item_big">
							<article className="product-card catalog__card product-card_big">
								<img
									src={bike5Big}
									alt="Велосипед"
									className="product-card__img product-card__img_big"
								/>
								<div className="product-card__body product-card__body_big">
									<div className="product-card__body-top">
										<h3 className="product-card__title">
											Велосипед BMX Tech Team Goof 30
										</h3>
										<strong className="product-card__price product-card__price_big"
											>14 700 руб</strong
										>
									</div>
									<button
										className="default-btn product-card__btn product-card__btn_big"
									>
										Купить
									</button>
								</div>
							</article>
						</li>
						<li className="catalog__item">
							<article className="product-card catalog__card">
								<img
									src={helmet}
									alt="Велосипед"
									className="product-card__img"
								/>
								<div className="product-card__body">
									<div className="product-card__body-top">
										<h3 className="product-card__title">
											Шлем велосипедный VSH 25 full lime
										</h3>
										<strong className="product-card__price">1244 руб</strong>
									</div>
									<button className="default-btn product-card__btn">Купить</button>
								</div>
							</article>
						</li>
						<li className="catalog__item">
							<article className="product-card catalog__card">
								<img
									src={bike4}
									alt="Велосипед"
									className="product-card__img"
								/>
								<div className="product-card__body">
									<div className="product-card__body-top">
										<h3 className="product-card__title">
											Велосипед RUSH HOUR XS 925
										</h3>
										<strong className="product-card__price">12 830 руб</strong>
									</div>
									<button className="default-btn product-card__btn">Купить</button>
								</div>
							</article>
						</li>
					</ul>
				</div>
			</section>
		</main>
		<footer className="footer">
			<img
						src={logo}
						width="154"
						alt="ВелоSHOP"
						className="logo footer__logo"
					/>
		</footer>
		</div>
	);
}

export default App;
