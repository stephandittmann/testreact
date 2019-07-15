import './cv.scss';
import React from 'react';
import { Photo } from './photo/photo';
import { CVChapter } from './chapter/chapter';
import { Adress } from './adress/adress';
import { Row, Col } from 'reactstrap';
// import importData from './_workdata.json';

interface CVProps {}
interface CVState {
	chapter: iCVChapter[];
}

export interface iCVChapterRange {
	from: string;
	to: string;
}

export interface iCVWorkLocation {
	name: string;
}

export interface iCVWorkLink {
	link: string;
}

export interface iCVChapterActivities {
	text: string;
}

export interface iCVChapter {
	range: iCVChapterRange;
	worklocation: iCVWorkLocation;
	homepage: iCVWorkLink;
	activities: iCVChapterActivities[];
}

export class CV extends React.Component<CVProps, CVState> {
	constructor(props: CVProps) {

		super(props);

		this.state = {
			chapter: []
		};
	}

	public componentWillMount(): void {

		// console.log(importData);

		this.setState({
			chapter: [

				

			]
		});
	}

	private renderChapter(): React.ReactNode {
		let chComps = [];
		let counter = 0;
		for (const chapter of this.state.chapter) {
			chComps.push(<CVChapter {...chapter} key={counter++} />);
		}
		return chComps;
	}

	public render(): React.ReactNode {
		return (
			<div className="cv-container">
				<Row>
					<Col xs="12" sm={{ size: 3, offset: 1 }} md={{ size: 3, offset: 1 }}>
						<Row>
							<Col xs="6" sm="12"><Photo /></Col>
							<Col><Adress /></Col>
						</Row>
					</Col>
					<Col xs="12" sm={{ size: 7, offset: 1 }} md={{ size: 7, offset: 1 }}>
						<div className="cv-table">{this.renderChapter()}</div>
					</Col>
				</Row>
			</div>
		);
	}
}