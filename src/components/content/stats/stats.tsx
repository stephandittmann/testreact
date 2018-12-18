import './stats.scss';
import React from 'react';
import { InfoBox } from './infobox/infobox';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

interface StatsProps {}
interface StatsState {}

export class Stats extends React.Component<StatsProps, StatsState> {
	public render(): React.ReactNode {
		return (

			<div>
				<Row>
					<Col>
					<InfoBox title="Daten" progress={0}>
					</InfoBox>
					<InfoBox title="Sprachkenntnisse" progress={23} />
					</Col>
				</Row>
			</div>
			
			);

	}
}
