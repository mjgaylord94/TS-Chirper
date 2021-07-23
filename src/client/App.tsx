import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AddForm from './pages/AddForm';
import EditForm from './pages/EditForm';

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
					<Route exact path="/edit/:id">
						<EditForm></EditForm>
					</Route>
				</Switch>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;
