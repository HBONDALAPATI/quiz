import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';

class Header extends Component
{
	state={val:""}
	input(e)
	{
		this.setState({val:e.target.value})
	}
	render()
	{
		let {chapter,excercise,quiz,level,menu}=this.props
		return <div className="header">
					<div className="item">
						<Link to="/">Logoname</Link>
					</div>
					<div className="item">
						<Link to="/">{chapter}</Link>
						<Link to="/">{excercise}</Link>
						<Link to="/">{quiz}</Link>
						<Link to="/">{level}</Link>
						<Link to="/">Register</Link>
						<Link to="/">Login</Link>
					</div>
					<div className="item">
						<input 
						onChange={this.input.bind(this)}
						value={this.state.val} placeholder="search" />
						<button>
							<i className="fa fa-search"></i>
						</button>
					</div>
					
			</div>
	}
}

export default connect(state=>state,f2)(Header);