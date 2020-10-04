import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Chapter from './Chapter';
import Excercise from './Excercise';
import Errpage from './Errpage';
import Quiz from './Quiz';
import Starttest from './Starttest';
import Finished from './Finished';

class App extends Component
{
	render()
	{
		return (
				<>
				<Router>
						<Header />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/chapter/:name" component={Chapter} />
							<Route exact path="/excercise/:name" component={Excercise} />
							<Route exact path="/quiz/:name" component={Quiz} />
							<Route exact path="/starttest/:name" component={Starttest} />
							<Route exact path="/finished" component={Finished} />
							<Route  component={Errpage} />
						</Switch>
						<Footer />
				</Router>	
			</>
			)
	}

}

export default App;