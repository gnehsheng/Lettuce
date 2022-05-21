export const userReducer = (state, action) => {
	const {
		id, from, text, timestamp
	} = action.data;
	switch (action.type) {
		case 'UPDATE_USERNAME':
			return {
				...state,
				username: action.username,
			};
		case 'UPDATE_VIDEO_ID':
			return {
				...state,
				videoId: action.videoId,
			};
		case 'UPDATE_USER_LIST':
			return {
				...state,
				userList: action.users,
			};
		case 'UPDATE_MESSAGES':

			return {
				...state,
				messages: [
					...state.messages,
					{
						id,
						from,
						text,
						timestamp,
					},
				],
			};
		default:
			return state;
	}
}
