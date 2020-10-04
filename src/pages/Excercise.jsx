import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';

class Excercise extends Component
{


	nav(quiz)
	{
		this.props.setQuiz(quiz)
		this.props.history.push("/quiz/"+quiz)
	}
	render()
	{


		let x=this.props.match.params.name
		return <div className="chapter-content">
					<h1>welcome to Excercise {x}</h1>
					<ul className="excercise-list">
						<li onClick={this.nav.bind(this,x)}>{x} chapter</li>
						<li>{x} chapter</li>
						<li>{x} chapter</li>
						<li>{x} chapter</li>
						<li>{x} chapter</li>
						<li>{x} chapter</li>
						<li>{x} chapter</li>
						<li>{x} chapter</li>
						<li>{x} chapter</li>
					</ul>
		</div>
	}
}

export default connect(state=>state,f2)(Excercise);