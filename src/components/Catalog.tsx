import React from 'react';

import bike1 from '../assets/images/bike1.jpg';
import bike2 from '../assets/images/bike2.jpg';
import bike3 from '../assets/images/bike3.jpg';
import bike4 from '../assets/images/bike4.jpg';
import bike5Big from '../assets/images/bike5Big.jpg';
import helmet from '../assets/images/helmet.jpg';

export const Catalog: React.FC = () => {
	return (
		<div className='catalog'>
			<div className='container catalog__container'>
				<h2 className='subtitle catalog__subtitle'>Каталог</h2>
				<ul className='catalog__list'>
					<li className='catalog__item'>
						<article className='product-card catalog__card'>
							<img src={bike1} alt='Велосипед' className='product-card__img' />
							<div className='product-card__body'>
								<div className='product-card__body-top'>
									<h3 className='product-card__title'>
										Велосипед BMX Tech Team Goof 20
									</h3>
									<strong className='product-card__price'>12 830 руб</strong>
								</div>
								<button className='default-btn product-card__btn'>
									Купить
								</button>
							</div>
						</article>
					</li>
					<li className='catalog__item'>
						<article className='product-card catalog__card'>
							<img src={bike3} alt='Велосипед' className='product-card__img' />
							<div className='product-card__body'>
								<div className='product-card__body-top'>
									<h3 className='product-card__title'>
										Горный велосипед 29" TRINX
									</h3>
									<strong className='product-card__price'>13 884 руб</strong>
								</div>
								<button className='default-btn product-card__btn'>
									Купить
								</button>
							</div>
						</article>
					</li>
					<li className='catalog__item catalog__item_big'>
						<article className='product-card catalog__card product-card_big'>
							<img
								src={bike2}
								alt='Велосипед'
								className='product-card__img product-card__img_big'
							/>
							<div className='product-card__body product-card__body_big'>
								<div className='product-card__body-top'>
									<h3 className='product-card__title'>
										Велосипед BMX Tech Team Goof 20
									</h3>
									<strong className='product-card__price product-card__price_big'>
										12 830 руб
									</strong>
								</div>
								<button className='default-btn product-card__btn product-card__btn_big'>
									Купить
								</button>
							</div>
						</article>
					</li>
					<li className='catalog__item catalog__item_big'>
						<article className='product-card catalog__card product-card_big'>
							<img
								src={bike5Big}
								alt='Велосипед'
								className='product-card__img product-card__img_big'
							/>
							<div className='product-card__body product-card__body_big'>
								<div className='product-card__body-top'>
									<h3 className='product-card__title'>
										Велосипед BMX Tech Team Goof 30
									</h3>
									<strong className='product-card__price product-card__price_big'>
										14 700 руб
									</strong>
								</div>
								<button className='default-btn product-card__btn product-card__btn_big'>
									Купить
								</button>
							</div>
						</article>
					</li>
					<li className='catalog__item'>
						<article className='product-card catalog__card'>
							<img src={helmet} alt='Велосипед' className='product-card__img' />
							<div className='product-card__body'>
								<div className='product-card__body-top'>
									<h3 className='product-card__title'>
										Шлем велосипедный VSH 25 full lime
									</h3>
									<strong className='product-card__price'>1244 руб</strong>
								</div>
								<button className='default-btn product-card__btn'>
									Купить
								</button>
							</div>
						</article>
					</li>
					<li className='catalog__item'>
						<article className='product-card catalog__card'>
							<img src={bike4} alt='Велосипед' className='product-card__img' />
							<div className='product-card__body'>
								<div className='product-card__body-top'>
									<h3 className='product-card__title'>
										Велосипед RUSH HOUR XS 925
									</h3>
									<strong className='product-card__price'>12 830 руб</strong>
								</div>
								<button className='default-btn product-card__btn'>
									Купить
								</button>
							</div>
						</article>
					</li>
				</ul>
				<article>
					<button className='default-btn continue_btn'>Показать еще...</button>
				</article>
			</div>
		</div>
	);
};
