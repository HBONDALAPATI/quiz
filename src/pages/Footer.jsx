import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';

class Footer extends Component
{
	render()
	{
		return <div className="footer">created by <span> hari</span>
		</div>
	}
}

export default connect(state=>state,f2)(Footer);