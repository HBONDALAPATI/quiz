import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';

class Sidebar extends Component
{
	render()
	{
		return <div className="Sidebar">Sidebar</div>
	}
}

export default connect(state=>state,f2)(Sidebar);