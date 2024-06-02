import React from 'react'

export const Hero: React.FC = () => {
	return (
		<div className="hero">
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
			</div>
	)
}
