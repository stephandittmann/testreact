import './chapter.scss';
import React from 'react';

import { Row, Col } from 'reactstrap';

import { iCVChapter } from '../cv';

interface CVChapterProps extends iCVChapter {}
interface CVChapterState {}

export class CVChapter extends React.Component<CVChapterProps, CVChapterState> {
	
	private renderActivities(): React.ReactNode {
		let actElements = [];
		let counter = 0;
		for (const activity of this.props.activities) {
			actElements.push(<li key={counter++}>{activity.text}</li>);
		}
		return actElements;
	}

	public render(): React.ReactNode {
		return (
			<Row className="cv-chapter">
				<Col xs="12" md="3">
					<h4><a href={this.props.homepage.link} target="blank">{this.props.worklocation.name}</a></h4> 
					<span>{this.props.range.from}</span> - {' '}
					<span>{this.props.range.to}</span>
				</Col>

				<Col xs="12" md="9">
					<ul>{this.renderActivities()}</ul>
				</Col>
			</Row>
		);
	}
}