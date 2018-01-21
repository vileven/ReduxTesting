import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class User extends Component {
	render() {
		const { name, error } = this.props;

		return (
			<div className='ib user'>
				{
					name ?
					<p>Привет, {name}</p> :
					<button className='btn' onClick={this.props.handleLogin}>Войти</button>
				}
				{
					error ? <p className='error'>{error}. <br/> Попробуйте ещё раз.</p> : ''
				}
			</div>
		)
	}
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	handleLogin: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired,
};

