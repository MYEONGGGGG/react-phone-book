let initState = {
    contactList: [],
    keyword: null
};

function reducer(state = initState, action) {

    const {type, payload} = action;

    switch (type) {

        case "ADD_CONTACT":

            // 중복 자료 체크
            const isDuplicate = state.contactList.some(contact =>
                contact.name === payload.name && contact.phoneNumber === payload.phoneNumber
            );

            if (isDuplicate) {
                // 기등록 자료일 경우, 그대로 반환
                alert("입력하신 정보는 기등록 연락처입니다.");
                return state;
            }

            else {
                // 미등록 자료일 경우, 추가
                return {
                    ...state,
                    contactList: [
                        ...state.contactList,
                        { name: payload.name, phoneNumber: payload.phoneNumber }
                    ]
                };
            }

        case "REMOVE_CONTACT":
            return {
                ...state,
                contactList: state.contactList.filter(contact =>
                    contact.name !== payload.name || contact.phoneNumber !== payload.phoneNumber
                )
            };

        case "SEARCH_CONTACT":
            return {
                ...state,
                keyword: payload.keyword
            };

        default:
            return { ...state }
    }
}

export default reducer;