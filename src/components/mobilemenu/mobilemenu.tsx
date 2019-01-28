import './mobilemenu.scss';
import React, { Component, ReactNode }  from 'react';
import { Collapse, Button, CardBody, Card} from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { Nav } from 'reactstrap';

interface MobileMenuState {
	collapse: boolean;
	status: string,
 	} 
interface MobileMenuProps { }

export class MobileMenu extends React.Component<MobileMenuProps,MobileMenuState> {

	constructor(props: MobileMenu ) {
		
		super(props);
		
		this.state = { collapse: false, status: 'Closed' }
		this.toggle = this.toggle.bind(this)
		this.onExiting = this.onExiting.bind(this)
		console.log(this.state);

	}

	private toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	private onExiting() {
		this.setState({ collapse: true })
	  }

	public render(): React.ReactNode {

		return (

			<div className="mobile-menu">
				<Button data-toggle="collapse" color="primary" onClick={this.toggle}>Menü</Button>
				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>
							<Nav className="mobile-menulist-wrapper">
								<NavItem>
									<NavLink tag={RouterLink} to="/home">
										Anschreiben
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={RouterLink} to="/cv">
										CV
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={RouterLink} to="/stats">
										Stats
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={RouterLink} to="/work">
										Work
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={RouterLink} to="/zeugnisse">
										Zeugnisse
									</NavLink>
								</NavItem>
							</Nav>
						</CardBody>
					</Card>
				</Collapse>
			</div>

		);
	}
}

export default MobileMenu;