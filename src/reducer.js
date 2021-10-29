const reducer = (state, action) => {
  switch (action.type) {
    case 'connected':
      return {
        ...state,
        isLogin: true,
        userName: action.payload.userName,
        roomName: action.payload.roomName,
      };
    
    case 'setUsers':
      return {
        ...state,
        users: action.payload,
      }

    case 'newMessage':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }

      
    default :
      return state;
  }
}
export default reducer;