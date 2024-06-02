import React from 'react'

export const Callback: React.FC = () => {
	return (
		<div className="callback">
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
			</div>
	)
}
