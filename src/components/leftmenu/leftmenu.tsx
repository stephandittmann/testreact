import './leftmenu.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface LeftMenuState {}
interface LeftMenuProps {}

export class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState> {
	public render(): React.ReactNode {
		return (
			<nav id="leftNav">
				<ul>
					<li className="menu-link">
						<a href="#">Anschreiben</a>
					</li>
					<li className="menu-link">
						<NavLink to="/">CV</NavLink>
					</li>
					<li className="menu-link">
						{/* <a href="#">Details</a> */}
						<NavLink to="/stats">Stats</NavLink>
					</li>
					<li className="menu-link">
						<a href="#">Work</a>
					</li>
					<li className="menu-link">
						<a href="#">Zeugnisse</a>
					</li>					
				</ul>				
			</nav>
		);
	}
}