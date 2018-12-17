import './footer.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
interface FooterProps {
	pageNumber: number;
}
interface FooterState {}

export class Footer extends React.Component<FooterProps, FooterState> {
	public render(): React.ReactNode {
		return (
			<footer>
				<BrowserRouter>
					<Row>
						<Col /* xs="12" sm={{ size: 10, offset: 0 }} */>
						<h1>
							Stephan Dittmann<small>,&nbsp;B.Sc.&nbsp;©&nbsp;2018</small>
						</h1>
						</Col>
						<Col xs="12" sm={{ size: 2, offset: 0 }} className="text-right">
						<div id="page-number">
							<p>{this.props.pageNumber}</p>
						</div>
						</Col>
					</Row>
				</BrowserRouter>
			</footer>
		);
	}
}
