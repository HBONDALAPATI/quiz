import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';

class Chapter extends Component
{


	nav(excercise)
	{
		this.props.setExcercise(excercise)
		this.props.history.push("/excercise/"+excercise)
	}
	render()
	{


		let x=this.props.match.params.name
		return <div className="chapter-content">
					<h1>welcome to chapter {x}</h1>
					<ul className="excercise-list">
						<li onClick={this.nav.bind(this,x)}>{x} excercise</li>
						<li>{x} excercise</li>
						<li>{x} excercise</li>
						<li>{x} excercise</li>
						<li>{x} excercise</li>
						<li>{x} excercise</li>
						<li>{x} excercise</li>
						<li>{x} excercise</li>
						<li>{x} excercise</li>
					</ul>
		</div>
	}
}

export default connect(state=>state,f2)(Chapter);