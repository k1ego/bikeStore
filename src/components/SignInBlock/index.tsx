import React from 'react';
import './SignInBlock.scss';
import { Link } from 'react-router-dom';
import email from '../../assets/svg/email.svg';
import password from '../../assets/svg/password.svg';
import logo from '../../assets/images/гуап.png';
import facebook from '../../assets/svg/facebookIcon.svg';
import apple from '../../assets/svg/appleIcon.svg';
import google from '../../assets/svg/googleIcon.svg';
import startBike from '../../assets/images/startBike.jpg';


export const SignInBlock: React.FC = () => {
	return (
		<div className='SignIn'>
			<div className='container-auto'>
				<section className='form'>
					<Link to='/' className='form__logo logo'>
						<img src={logo} alt='ВелоSHOP' />
					</Link>
					<div className='form__content'>
						<h1 className='form__title'>Sign in</h1>
						<p className='form__subtitle'>
							If you don’t have an account register
						</p>
						<p className='form__subtitle'>
							You can{' '}
							<a className='form__link default-link' href='#'>
								Register here !
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
								<input className='input-field'
									type='email'
									name='email'
									id='email'
									placeholder='Enter your email address'
								/>
							</div>
							<div className='form-box__input-box input-box'>
								<label className='input-box__info' htmlFor='password'>
									Password
								</label>
								<label className='input-box__icon' htmlFor='password'>
									<img src={password} alt='password'/>
								</label>
								<input className='input-field'
									type='password'
									name='password'
									id='password'
									placeholder='Enter your Password'
								/>
							</div>
							<div className="form-box__btn-box btn-box">
								<button className="default-btn" type='submit'>Login</button>
							</div>
							<div className="form-box__social">
								<span className='form-box__social-info' >or continue with</span>
								<div className="form-box__social-items">
									<a href="#"><img src={facebook} alt="facebookIcon"/></a>
									<a href="#"><img src={apple} alt="appleIcon"/></a>
									<a href="#"><img src={google} alt="googleIcon"/></a>
								</div>
							</div>
						</form>
					</div>
				</section>
				<section className='promo'>
					<div className="promo__box">
						<div className="promo__content">
							<img src={startBike} alt="Saly" className="promo__image" />
							<h1 className="promo__title">Sign in to name</h1>
							<p className="promo__subtitle">The best storeBike</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
