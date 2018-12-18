import './header.scss';
import React from 'react';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

interface HeaderProps {}
interface HeaderState {}

export class Header extends React.Component<HeaderProps, HeaderState> {
	public render(): React.ReactNode {
		return (
			<header>
				<Row className="header-title-row">
					<Col xs="9" className="header-title">
						<h1>Bewerbung</h1>
						<h2>als Mediengestalter Bild/Ton</h2>
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
