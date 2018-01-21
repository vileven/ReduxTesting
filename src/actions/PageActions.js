import {SET_YEAR} from '../constans/Page';


export function setYear(year) {
	return {
		type: SET_YEAR,
		payload: year,
	}
}
