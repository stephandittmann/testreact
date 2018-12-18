import './cv.scss';
import React from 'react';
import { Photo } from './photo/photo';
import { CVChapter } from './chapter/chapter';

import { Adress } from './adress/adress';

import { Row, Col } from 'reactstrap';

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
		this.setState({
			chapter: [
				{
					range: {
						from: '06/2018',
						to: '12/2018'
					},

					worklocation: {
						name: 'movingimage EVP'
					},

					homepage: {
						
						link: 'https://www.movingimage.com'

					},

					activities: [
						{
							text: 'Projektleitung Livestream Produktion (agile)'
						},
						{
							text: 'technische Beratung'
						},
						{
							text: 'Produktionsassistenz (Kamera)'
						},
						{
							text: 'Neustrukturierung der Webpräsenz'
						}
					]
				},
				{
					range: {
						from: '09/2015',
						to: '12/2017'
					},
					worklocation: {
						name: 'der SPIEGEL Hauptstadtbüro',
					},

					homepage: {
						
						link: 'https://www.spiegel.de'

					},
					activities: [
						{
							text: 'Werkstudent IT- u. Medien-Administration'
						},
						{
							text: 'technische Betreung der Computer'
						},
						{
							text: 'technische Unterstützung LIVE-Produktion'
						},
						{
							text: 'Schnittassistenz & VFX'
						}
					]
				},
				{
					range: {
						from: '05/2016',
						to: '08/2016'
					},
					worklocation: {
						name: 'Propeller GmbH Berlin',
					},

					homepage: {
						
						link: 'https://www.propeller-film.de'

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
				},{
					range: {
						from: '09/2011',
						to: '04/2016'
					},
					worklocation: {
						name: 'Studium der Medieninformatik',
					},

					homepage: {
						
						link: 'https://www.medieninformatik.de'

					},

					activities: [
						{
							text: 'Filmproduktion'
						},
						{
							text: '3D-Animation'
						},
						{
							text: '(Web-)Programmierung'
						},
						{
							text: ''
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