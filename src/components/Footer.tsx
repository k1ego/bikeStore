import React from 'react'

import logo from "../assets/svg/logo.svg";

export const Footer: React.FC = () => {
	return (
		<div className="footer">
			<img
						src={logo}
						width="154"
						alt="ВелоSHOP"
						className="logo footer__logo"
					/>
		</div>
	)
}
