import './infobox.scss';
import React from 'react';

interface InfoBoxProps {
	title: string;
	progress: number;
	opt?: string;
}
interface InfoBoxState {}

export class InfoBox extends React.Component<InfoBoxProps, InfoBoxState> {
	public render(): React.ReactNode {
		return (
			<div className="infoBox">
				<span>
					<div className="orange-box" />
					<h3>
						{this.props.title}-{this.props.progress}
					</h3>
				</span>
				<div>{this.props.children}</div>
				<div className="languageContainer" />
			</div>
		);
	}
}
