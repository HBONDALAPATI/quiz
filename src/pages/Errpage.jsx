import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';

class Errpage extends Component
{
	render()
	{
		return <div className="Errpage">Errpage</div>
	}
}

export default connect(state=>state,f2)(Errpage);