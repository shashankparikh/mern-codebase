// export default (state = {}, action) => {
//     switch (action.type) {
//      case 'SIMPLE_ACTION':
//       return {
//        result: action.payload
//       }
//      default:
//       return state
//     }
//    }

const initialState = {
  FirstData: [],
  IsLoading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        FirstData: action.value,
        IsLoading: false
      }

    // case"GET_LOADING_STATUS":
    // return {
    //   ...state,
    //   IsLoading: true
    // };

    default:
      return state
  }
}
