const initialState = {
    users: [],
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            const newUser = action.payload;
            return {
                ...state,
                users: [...state.users, newUser],
                currentUser: newUser,
            };
        case 'LOGIN_USER':
            const { email, password } = action.payload;
            const user = state.users.find(
                (u) => u.email === email && u.password === password
            );
            return {
                ...state,
                currentUser: user,
            };
        default:
            return state;
    }
};

export default userReducer;
