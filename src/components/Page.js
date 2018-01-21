import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Page extends Component {
	onYearBtnClick(e) {
		this.props.getPhotos(Number(e.target.textContent));
	}

	render() {
		const { year, photos, fetching } = this.props;
		return (
			<div className='ib page'>
				<p>
					<button className='btn' onClick={::this.onYearBtnClick}>2018</button>
					<button className='btn' onClick={::this.onYearBtnClick}>2017</button>
					<button className='btn' onClick={::this.onYearBtnClick}>2016</button>
				</p>
				<h3>{year} год</h3>

				{
					fetching ?
						<p>Загрузка...</p>
						:
						<p>У тебя {photos.length} фото</p>
				}
			</div>
		)
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired,
};

