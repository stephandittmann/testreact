import './workprogressbar.scss';
import React from 'react';
import { Row, Col } from 'reactstrap';

interface WPBProps {

    title: string;
	progress : number;

}
interface WPBState {}

export class WorkProgressBar extends React.Component<WPBProps, WPBState> {
	
	public render(): React.ReactNode {
		return (
			<div className="work-progress-bar">
				<Row>
					<Col>						
                        <div className="progressbar">
				        <span>
							<div className="orange-box" />
								<h3>{this.props.title}-{this.props.progress}</h3>
						</span>
						<div>{this.props.children}</div>
						<div className="languageContainer" /></div>
					</Col>
				</Row>
			</div>
		);
	}
}
