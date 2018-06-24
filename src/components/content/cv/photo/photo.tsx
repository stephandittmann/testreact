import './photo.scss';
import React from 'react';

interface PhotoProps {}
interface PhotoState {}

export class Photo extends React.Component<PhotoProps, PhotoState> {
	public render(): React.ReactNode {
		return (
			<div className="cv-photo">
				{/* <img src={require('./bild.jpg')} /> */}
			</div>
		);
	}
}
