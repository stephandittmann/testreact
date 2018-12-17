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
				<Row className="header-full-row">
					<Col xs="12" md={{ size: 9, offset: 0 }} >
						<h2 id="page-titel">Bewerbung</h2>
					</Col>
					<Col md={{ size: 2, offset: 1 }}>
						<MobileMenu />
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
