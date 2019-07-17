import './header.scss';
import React from 'react';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import MobileMenu from './mobilemenu/mobilemenu';
import { MainMenu } from './mainmenu/mainmenu';

interface HeaderProps {
	job_name: string;
	opt?: string;	
}
interface HeaderState {}

export class Header extends React.Component<HeaderProps, HeaderState> {
	public render(): React.ReactNode {
		return (
			<header>
				<nav className="mobile-nav-container">
					<Row>
						<Col>
							<MobileMenu />
						</Col>
					</Row>
				</nav>
				<nav className="main-nav-container nav-area">
					<Row>
						<Col lg={{ size: 12 }}>
							<MainMenu />
						</Col>
					</Row>
				</nav>			
				<Row className="header-title-row">
					<Col xs="9" className="header-title">
						<h1>Bewerbung</h1>
						<h2>als {this.props.job_name}</h2>
					</Col>
				</Row>
				<Row>
					<Col>
					
					<div className="header-line"></div>
					</Col>				
				</Row>
				<Row>
					<Col>
						<div className="orange-box" />
					</Col>
				</Row>
			</header>

		);
	}
}
