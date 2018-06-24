import './cv.scss';
import React from 'react';
import { Photo } from './photo/photo';
import { CVChapter } from './chapter/chapter';
import { InfoBox } from './infobox/infobox';

import { Row, Col } from 'reactstrap';

interface CVProps {}
interface CVState {
	chapter: iCVChapter[];
}

export interface iCVChapterRange {
	from: string;
	to: string;
}

export interface iCVChapterActivities {
	text: string;
}

export interface iCVChapter {
	range: iCVChapterRange;
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
		this.setState({
			chapter: [
				{
					range: {
						from: '06/2016',
						to: '12/2017'
					},
					activities: [
						{
							text: 'Werkstudent Spiegel'
						},
						{
							text: 'technische Betreung der Computer'
						},
						{
							text: 'LIVE-Sendung'
						},
						{
							text: 'Schnitt & VFX'
						}
					]
				},
				{
					range: {
						from: '09/2011',
						to: '12/2017'
					},
					activities: [
						{
							text: 'Werkstudent Spiegel'
						},
						{
							text: 'technische Betreung der Computer'
						},
						{
							text: 'LIVE-Sendung'
						},
						{
							text: 'Schnitt & VFX'
						}
					]
				}
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
			<div className="cv">
				<Row>
					<Col xs="12" sm="3">
						<Photo />
						<InfoBox title="Daten" progress={23}>
							<p>28.03.1983</p>
							<p>
								Steegerstr. 67<br />13359 Berlin
							</p>
							<p>+(49)(0)177 648 71 57</p>
							<p>
								<a href="mailto:st_dittmann@gmx.net">st_dittmann@gmx.net</a>
							</p>
						</InfoBox>
						<InfoBox title="Sprachkenntnisse" progress={23} />
					</Col>
					<Col xs="12" sm="9">
						<div className="cv-chapter">{this.renderChapter()}</div>
					</Col>
				</Row>
			</div>
		);
	}
}
