let initState = {
    contactList: []
};

function reducer(state = initState, action) {

    const {type, payload} = action;

    switch (type) {

        case "ADD_CONTACT":
            return {
                ...state,
                contactList: [
                    ...state.contactList,
                    { name: payload.name, phoneNumber: payload.phoneNumber }
                ]
            };

        case "REMOVE_CONTACT":
            return {

            };


        default:
            return { ...state }
    }
}

export default reducer;