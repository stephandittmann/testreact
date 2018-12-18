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
import { MainMenu } from '../mainmenu/mainmenu';
import { MobileMenu } from '../mobilemenu/mobilemenu';

//import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps { }
interface AppState { }

export class App extends React.Component<AppProps, AppState> {
	public render(): React.ReactNode {
		return (
			<BrowserRouter>
				<div className="app">
					<Container fluid={true}>
						<nav className="mobile-nav-container">
						<Row>
							<Col>
								<MobileMenu />
							</Col>
						</Row>
						</nav>
						<div className="main-container">
						
							<Row>
								<Col lg={{ size: 10, offset: 1 }}>
									<Header />
								</Col>
							</Row>
						
							<Row className="nav-area">
								<Col lg={{ size: 10, offset: 1 }}>
									<MainMenu />
								</Col>
							</Row>
							<Row className="content-area">
								<Col xs="12" lg={{ size: 10, offset: 1 }}>
									<Content />
								</Col>
							</Row>
							<Row>
								<Col lg={{ size: 10, offset: 1 }}>
									<Footer pageNumber={1} />
								</Col>
							</Row>
						</div>
					</Container>
				</div>
			</BrowserRouter>
		);
	}
}
