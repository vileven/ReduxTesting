import  React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';
import * as userActions from '../actions/UserActions';

export class App extends Component {
	render() {
		const { user, page } = this.props;
		const { getPhotos } = this.props.pageActions;
		const { handleLogin } = this.props.userActions;

		return (
			<div className='row'>
				<User name={user.name} handleLogin={handleLogin} error={user.error}/>
				<Page year={page.year} photos={page.photos}  getPhotos={getPhotos} fetching={page.fetching} error={page.error}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		page: state.page,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch),
		userActions: bindActionCreators(userActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
