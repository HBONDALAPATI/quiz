import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
import $ from 'jquery';


class Home extends Component
{

	componentDidMount()
	{
		$(".panel-body").slideUp()
	}
	setMenuOption(e)
	{
		$(".panel-body").stop().slideUp()
		$(e.target).next().stop().slideDown()
	}

	nav(x)
	{
		// alert(x)
		this.props.setChapter(x)
		this.props.history.push("/chapter/"+x)
	}

	render()
	{
		let {menu,menuOption}=this.props
		return <div className="home">

			<div className="left">
				{menu.map(x=>
					<div key={x.id} className="panel">
						<div className="panel-title title" onClick={this.setMenuOption.bind(this)}>{x.name}</div>
						<div className="panel-body">
							{x.sub.map(y=>
								<div 
								onClick={this.nav.bind(this,y.name)} 
								className="options">
									{y.name}
								</div>
							)}
						</div>	

					</div>
					
				)}
			</div>
			<div className="right">
				<div className="flex">
					<div className="login">
						<h3>Already a user</h3>
						<p>username</p>
						<input placeholder="email"/>
						<p>password</p>
						<input placeholder="password"/>
						<br/>
						<br/>
						<button>login</button>
					</div>
					<div className="signup">
						<h3>Dont have account</h3>
						<p>name</p>
						<input placeholder="name"/>
						<p>email</p>
						<input placeholder="email"/>
						<p>phone</p>
						<input placeholder="phone"/>
						<p>password</p>
						<input placeholder="password"/>
						<br/>
						<br/>
						<button>signup</button>
					</div>
				</div>
			</div>
		</div>
	}
}

export default connect(state=>state,f2)(Home);