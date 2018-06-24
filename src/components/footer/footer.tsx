import './footer.scss';
import React from 'react';

interface FooterProps {
	pageNumber: number;
}
interface FooterState {}

export class Footer extends React.Component<FooterProps, FooterState> {
	public render(): React.ReactNode {
		return (
			<footer>
				<h1>
					Stephan Dittmann <small>, B.Sc.&nbsp;©&nbsp;2018</small>
				</h1>
				<div id="page-number">
					<p>{this.props.pageNumber}</p>
				</div>
			</footer>
		);
	}
}
