const initialState = {
	name: 'Sergey',
	surname: 'Volodin',
	age: 27
};

export default function userState(state = initialState) {
	return state;
}

module.hot.accept();
