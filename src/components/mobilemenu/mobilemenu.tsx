import './mobilemenu.scss';
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card} from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { Nav } from 'reactstrap';

interface MobileMenuState { }
interface MobileMenuProps { }

export class MobileMenu extends React.Component<
	MobileMenuProps,
	MobileMenuState
	> {

	constructor(props: Readonly<MobileMenu>) {
		super(props);
		this.state = { collapse: false };
		this.toggle = this.toggle.bind(this);

	}

	private toggle() {
		this.setState({ collapse: !this.state.collapse });
	}


	public render(): React.ReactNode {

		return (

			<nav className="mobile-menu">
				<Button color="primary" onClick={this.toggle}>Menü</Button>
				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>
							<Nav className="mobile-menu-wrapper">
								<NavItem>
									<NavLink tag={RouterLink} to="/home" className="mobile-menu-link">
										Anschreiben
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={RouterLink} to="/cv" className="mobile-menu-link">
										CV
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={RouterLink} to="/stats" className="mobile-menu-link">
										Stats
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={RouterLink} to="/work" className="mobile-menu-link">
										Work
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={RouterLink} to="/zeugnisse" className="mobile-menu-link">
										Zeugnisse
									</NavLink>
								</NavItem>
							</Nav>
						</CardBody>
					</Card>
				</Collapse>
			</nav>

		);
	}
}
