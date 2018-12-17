import './mobilemenu.scss';
import React from 'react';

interface MobileMenuState {}
interface MobileMenuProps {}

export class MobileMenu extends React.Component<
	MobileMenuProps,
	MobileMenuState
> {
	public render(): React.ReactNode {
		return (
			<nav className="mobile-menu">
				<ul>
					<li className="mobile-menu-link">
						<a href="#">Bewerbung</a>
					</li>
					<li className="mobile-menu-link">
						<a href="#">Bewerbung</a>
					</li>
					<li className="mobile-menu-link">
						<a href="#">Bewerbung</a>
					</li>
				</ul>
			</nav>
		);
	}
}
