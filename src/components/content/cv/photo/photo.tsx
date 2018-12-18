import './photo.scss';
import React from 'react';
import {Media} from 'reactstrap';

interface PhotoProps {}
interface PhotoState {}

export class Photo extends React.Component<PhotoProps, PhotoState> {
	public render(): React.ReactNode {
		return (
			<div className="cv-photo">
				<Media object src="https://www.xing.com/image/a_c_e_59b13f1d5_15187739_3/stephan-dittmann-foto.1024x1024.jpg" responsive="true" />
				<p>* 28.03.1983</p>
			</div>
		);
	}
}
