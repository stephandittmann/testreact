import './content.scss';
import React from 'react';

import { CV } from './cv/cv';
import { Stats } from './stats/stats';
import { Home } from './home/home';
import { Work } from './work/work';
import { Zeugnisse } from './zeugnisse/zeugnisse';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

interface ContentProps {}
interface ContentState {}

export class Content extends React.Component<ContentProps, ContentState> {
	public render(): React.ReactNode {
		return (
			<main>
				<BrowserRouter>
				<Switch>
					<Route path="/home" component={Home} />
					<Route exact path="/" component={CV} />
					<Route path="/stats" component={Stats} />
					<Route path="/work" component={Work} />
					<Route path="/zeugnisse" component={Zeugnisse} />
				</Switch>
				</BrowserRouter>
			</main>
		);
	}
}
