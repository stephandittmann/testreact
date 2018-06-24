import './app.scss';
import React from 'react';

//important MainContainers
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Content } from '../content/content';

//import Menus
import { LeftMenu } from '../leftmenu/leftmenu';
import { MobileMenu } from '../mobilemenu/mobilemenu';

// import ReactStrap-Components
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';

interface AppProps {}
interface AppState {}

export class App extends React.Component<AppProps, AppState> {
	public render(): React.ReactNode {
		return (
			<BrowserRouter>
				<div className="app">
					<Container fluid={true}>
						<Row>
							<Col xs="12" lg={{ size: 10, offset: 1 }}>
								<Header />
							</Col>
						</Row>
						<Row className="contentRow">
							<Col xs="12" lg={{ size: 2, offset: 1 }}>
								
								<MobileMenu />
								<LeftMenu />
								
							</Col>

							<Col xs="12" lg={{ size: 8, offset: 0 }}>
								<Content />
							</Col>
						</Row>
						<Row>
							<Col xs="12" lg={{ size: 10, offset: 1 }}>
								<Footer pageNumber={1} />
							</Col>
						</Row>
					</Container>
				</div>
			</BrowserRouter>
		);
	}
}
