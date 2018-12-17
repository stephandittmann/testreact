import './header.scss';
import React from 'react';
import { Row } from 'reactstrap';
import { MobileMenu } from '../mobilemenu/mobilemenu';
import { Col } from 'reactstrap';

interface HeaderProps {}
interface HeaderState {}

export class Header extends React.Component<HeaderProps, HeaderState> {
	public render(): React.ReactNode {
		return (
			<header>
				<Row className="header-title-row">
					<Col>
						<h1 className="header-titel">Bewerbung</h1>
					</Col>
					<Col>
						<MobileMenu/>
					</Col>
				</Row>
				<Row>
					<Col md={{ size: 12, offset: 0 }}>
					
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
