import './header.scss';
import React from 'react';

interface HeaderProps {}
interface HeaderState {}

export class Header extends React.Component<HeaderProps, HeaderState> {
	public render(): React.ReactNode {
		return (
			<header>
				<h2 id="page-titel">Bewerbung</h2>
				<div className="orange-box" />
			</header>
		);
	}
}
