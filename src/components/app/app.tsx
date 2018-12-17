import './app.scss';
import React from 'react';

// import ReactStrap-Components
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';

//important MainContainers
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Content } from '../content/content';

//import Menus
import { LeftMenu } from '../leftmenu/leftmenu';
/* import { MobileMenu } from '../mobilemenu/mobilemenu'; */
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps {}
interface AppState {}

export class App extends React.Component<AppProps, AppState> {
	public render(): React.ReactNode {
		return (
			<BrowserRouter>
				<div className="app">
					<Container fluid={true}>
						<Row>
							<Col lg={{ size: 10, offset: 1 }}>
								<Header />
							</Col>
							<Col>
								{/*  <MobileMenu /> */}
							</Col>
						</Row>
						<Row className="main">
							<Col sm="3" lg={{ size: 2, offset: 1 }}>
								<LeftMenu />
							</Col>
							<Col sm="9" lg={{ size: 8, offset: 0 }}>
								<Content />
							</Col>
						</Row>
						<Row>
							<Col lg={{ size: 10, offset: 1 }}>
								<Footer pageNumber={1} />
							</Col>
						</Row>
					</Container>
				</div>
			</BrowserRouter>
		);
	}
}
