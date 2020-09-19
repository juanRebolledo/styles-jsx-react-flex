
const stylesSheetReducer = {
    "CARD_STYLES": (state, action) => ({
        ...state,
        cardStyles: action.payload,
    }),
    "CONTAINER_STYLES": (state, action) => ({
        ...state,
        containerStyles: action.payload
    })
}

export default (state, action) => {
    if(stylesSheetReducer[action.type])
        return stylesSheetReducer[action.type](state, action)
    return state
}