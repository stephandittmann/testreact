import './content.scss';
import React from 'react';

import { CV } from './cv/cv';
import { Stats } from './stats/stats';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

interface ContentProps {}
interface ContentState {}

export class Content extends React.Component<ContentProps, ContentState> {
	public render(): React.ReactNode {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={CV} />
					<Route path="/stats" component={Stats} />
				</Switch>
			</main>
		);
	}
}
