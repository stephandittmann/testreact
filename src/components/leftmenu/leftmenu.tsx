import './leftmenu.scss';
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavItem, NavLink, Nav } from 'reactstrap';

interface LeftMenuState {}
interface LeftMenuProps {}

export class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState> {
	public render(): React.ReactNode {
		return (
				<Nav className="main-menu" vertical>
					<NavItem className="menu-link">
						<NavLink to="/home">Anschreiben</NavLink>
					</NavItem>
					<NavItem className="menu-link">
						<NavLink to="/cv">CV</NavLink>
					</NavItem>
					<NavItem className="menu-link">
						<NavLink to="/stats">Stats</NavLink>
					</NavItem>
					<NavItem className="menu-link">
					<NavLink to="/work">Work</NavLink>
					</NavItem>
					<NavItem className="menu-link">
					<NavLink to="/zeugnisse">Zeugnisse</NavLink>
					</NavItem>
				</Nav>
		);
	}
}