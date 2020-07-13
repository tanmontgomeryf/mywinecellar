const initialState = {
    isLoading: true,
    userWineList: null,
    userWineItem: null,
    error: null,
};

const userReducer = (state = initialState, actions) => {
    const { type } = actions;
    switch (type) {
        default:
            return state;
    }
};

export default userReducer;
