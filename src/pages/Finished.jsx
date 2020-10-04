import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';

class Finished extends Component
{
	render()
	{
		let {a}=this.props
		let total=a.filter(x=>x.ca===x.temp)
		let incorrect=a.filter(x=>x.ca!==x.temp && x.temp!==0)
		let correct=a.filter(x=>x.ca===x.temp )
		let na=a.filter(x=>x.temp===0)

		return <div className="result">
				<button>all questions {a.length}</button>
				<button>total score {total.length}</button>
				<button>incorrect {incorrect.length} answers</button>
				<button>correct {correct.length} answers</button>
				<button>not attempted {na.length} answers</button>
				<table cellspacing="0" cellpadding="10">
					<thead>
						<tr>
							<th>q</th>
							<th>a</th>
							<th>b</th>
							<th>c</th>
							<th>d</th>
							<th>your answer</th>
							<th>ca</th>
							<th>score</th>
						</tr>
					</thead>
					<tbody>
						{a.map(x=>
							<tr key={x.q}>
								<td>{x.q}</td>
								<td>{x.a}</td>
								<td>{x.b}</td>
								<td>{x.c}</td>
								<td>{x.d}</td>
								<td>{x.temp}</td>
								<td>{x.ca}</td>
								<td>{x.ca===x.temp?"1":"0"}</td>
							</tr>
						)}
					</tbody>
				</table>
				
		</div>
	}
}

export default connect(state=>state,f2)(Finished);