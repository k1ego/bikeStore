import React from 'react';
import { Link } from 'react-router-dom';
import startBike from '../../assets/images/startBike.jpg';
import logo from '../../assets/images/гуап.png';
import email from '../../assets/svg/email.svg';
import password from '../../assets/svg/password.svg';
import username from '../../assets/svg/username.svg';

export const SignUpBlock: React.FC = () => {
	return (
		<div className='SignUp'>
			<div className='container-auto'>
				<section className='form'>
					<Link to='/' className='form__logo logo'>
						<img src={logo} alt='ВелоSHOP' />
					</Link>
					<div className='form__content'>
						<h1 className='form__title'>Sign up</h1>
						<p className='form__subtitle'>
						If you already have an account register
						</p>
						<p className='form__subtitle'>
							You can{' '}
							<a className='form__link default-link' href='/SignIn'>
								Login here !
							</a>
						</p>
						<form action='#' className='form__form-box form-box'>
							<div className='form-box__input-box input-box'>
								<label className='input-box__info' htmlFor='email'>
									Email
								</label>
								<label className='input-box__icon' htmlFor='email'>
									<img src={email} alt='email' />
								</label>
								<input
									className='input-field'
									type='email'
									name='email'
									id='email'
									placeholder='Enter your email address'
								/>
							</div>
							<div className='form-box__input-box input-box'>
								<label className='input-box__info' htmlFor='username'>
									Username
								</label>
								<label className='input-box__icon' htmlFor='username'>
									<img src={username} alt='username' />
								</label>
								<input
									className='input-field'
									type='username'
									name='username'
									id='username'
									placeholder='Enter your User name'
								/>
							</div>
							<div className='form-box__input-box input-box'>
								<label className='input-box__info' htmlFor='password'>
									Password
								</label>
								<label className='input-box__icon' htmlFor='password'>
									<img src={password} alt='password' />
								</label>
								<input
									className='input-field'
									type='password'
									name='password'
									id='password'
									placeholder='Enter your Password'
								/>
							</div>
							<div className='form-box__input-box input-box'>
								<label className='input-box__info' htmlFor='confirmPassword'>
									Confirm password
								</label>
								<label className='input-box__icon' htmlFor='confirmPassword'>
									<img src={password} alt='confirmPassword' />
								</label>
								<input
									className='input-field'
									type='confirmPassword'
									name='confirmPassword'
									id='confirmPassword'
									placeholder='Confirm your Password'
								/>
							</div>
							<div className='form-box__btn-box btn-box'>
								<button className='default-btn' type='submit'>
									Register
								</button>
							</div>
						</form>
					</div>
				</section>
				<section className='promo'>
					<div className='promo__box'>
						<div className='promo__content'>
							<img src={startBike} alt='Saly' className='promo__image' />
							<h1 className='promo__title'>Sign Up to name</h1>
							<p className='promo__subtitle'>The best storeBike</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
