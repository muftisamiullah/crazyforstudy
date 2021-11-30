const SelectedContentReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_CONTENT":
        return action.content;
      case "ADD_COURSE":
        return [...state, action.course];
      case "RESET_CONTENT":
        return [];
      default:
        return state;
    }
  };
  
  export default SelectedContentReducer;