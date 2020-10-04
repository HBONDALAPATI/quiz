import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';

class Starttest extends Component
{
	state={c:0}
	setSubmit()
	{
		this.props.testSubmit()
		this.props.saveAll()
		this.props.history.push("/finished")
	}
	setTemp(id,option)
	{
		this.props.setTemp(id,option)
	}
	setC(c)
	{
		this.setState({c:c})
	}
	setCur(c)
	{
		this.setState({c:c})
	}
	render()
	{
		let {a}=this.props
		let {c}=this.state
		const p1=(ob,ans)=>ob.temp===0?"radio":ob.temp==ans?"radio active":"radio"
		return <div className="quiz-area">
				
				{a.slice(c,c+1).map((x,i)=>
					<div key={i}>
						<p className="q">{x.q}</p>
						<li onClick={this.setTemp.bind(this,x.id,1)} className={p1(x,1)}>{x.a}</li>
						<li onClick={this.setTemp.bind(this,x.id,2)} className={p1(x,2)}>{x.b}</li>
						<li onClick={this.setTemp.bind(this,x.id,3)} className={p1(x,3)}>{x.c}</li>
						<li onClick={this.setTemp.bind(this,x.id,4)} className={p1(x,4)}>{x.d}</li>
					</div>
					
				)}
				<li className="nav-btns">
					<button onClick={this.setC.bind(this,c-1)} className="prev">prev</button>
					<button onClick={this.setC.bind(this,c+1)} className="next">next</button>
					<button 
					onClick={this.setSubmit.bind(this)}
					className="finish">submit</button>
				</li>
				<li className="small">
					{a.map((x,i)=>
						<button
						onClick={this.setCur.bind(this,i)}
						 className={x.temp>0?'active':''}>{x.id}</button>
					)}
				</li>

		</div>

	}
}

export default connect(state=>state,f2)(Starttest);