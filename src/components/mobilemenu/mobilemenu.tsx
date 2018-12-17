import './mobilemenu.scss';
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

interface MobileMenuState { }
interface MobileMenuProps { }

export class MobileMenu extends React.Component<
	MobileMenuProps,
	MobileMenuState
	> {
	constructor(props: Readonly<MobileMenu>) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };

	}

	private toggle() {
		this.setState({ collapse: !this.state.collapse });
	}


	public render(): React.ReactNode {

		return (

			<nav className="mobile-menu">
				<Button color="primary" onClick={this.toggle}>Toggle</Button>
				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>
							<ul>
								<li className="mobile-menu-link">
									<a href="#">Anschreiben</a>
								</li>
								<li className="mobile-menu-link">
									<a href="#">CV</a>
								</li>
								<li className="mobile-menu-link">
									<a href="#">Stats</a>
								</li>
								<li className="mobile-menu-link">
									<a href="#">Work</a>
								</li>
								<li className="mobile-menu-link">
									<a href="#">Zeugnisse</a>
								</li>
							</ul>
						</CardBody>
					</Card>
				</Collapse>
			</nav>

		);
	}
}
