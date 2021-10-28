const reducer = (state, action) => {
  switch (action.type) {
    case 'isLogin':
      return {
        ...state,
        isLogin: true,
        userName: action.payload.userName,
        roomName: action.payload.roomName,
      }

      
    default :
      return state;
  }
}
export default reducer;