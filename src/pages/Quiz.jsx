import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';

class Quiz extends Component
{


	nav(level)
	{
		this.props.setLevel(level)
		this.props.history.push("/starttest/"+level)
	}
	render()
	{


		let x=this.props.match.params.name
		return <div className="chapter-content">
					<h1>welcome to Quiz {x}</h1>
					<ul className="excercise-list">
						<li onClick={this.nav.bind(this,x)}>{x} levels availbel</li>
						<li>{x} level</li>
						<li>{x} level</li>
						<li>{x} level</li>
						<li>{x} level</li>
						<li>{x} level</li>
						<li>{x} level</li>
						<li>{x} level</li>
						<li>{x} level</li>
					</ul>
		</div>
	}
}

export default connect(state=>state,f2)(Quiz);