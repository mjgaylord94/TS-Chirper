import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

	return (
		<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/add">
						<AddForm></AddForm>
					</Route>
					<Route exact path="/admin">
						<EditForm></EditForm>
					</Route>
				</Switch>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;
