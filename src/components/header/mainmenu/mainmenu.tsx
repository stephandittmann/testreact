import './mainmenu.scss';
import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { Nav } from 'reactstrap';

/* import {  NavItem , Nav,  } from 'reactstrap'; */

interface MainMenuState {}
interface MainMenuProps {}

export class MainMenu extends React.Component<MainMenuProps, MainMenuState> {
	public render(): React.ReactNode {
		return (
			<Nav id="main-menu" className="main-menu">
				<NavItem className="menu-link">
					<NavLink tag={RouterLink} to="/home">
						Anschreiben
					</NavLink>
				</NavItem>
				<NavItem className="menu-link">
					<NavLink tag={RouterLink} to="/cv">
						CV
					</NavLink>
				</NavItem>
				<NavItem className="menu-link">
					<NavLink tag={RouterLink} to="/stats">
						Stats
					</NavLink>
				</NavItem>
				<NavItem className="menu-link">
					<NavLink tag={RouterLink} to="/work">
						Work
					</NavLink>
				</NavItem>
				<NavItem className="menu-link">
					<NavLink tag={RouterLink} to="/zeugnisse">
						Zeugnisse
					</NavLink>
				</NavItem>
			</Nav>
		);
	}
}