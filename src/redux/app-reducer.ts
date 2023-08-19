
type ActionType = setAppStatusACType

export type InitializationAppStatusType = 'succeed' | 'process' | 'failed'

export type AppStateType = {
  initialization: InitializationAppStatusType
}

const initialState = {
  initialization: 'process' as InitializationAppStatusType
}

export const appReducer = (state: AppStateType = initialState, action: ActionType): AppStateType => {
  switch (action.type) {
    case "SET-APP-STATUS":
      return {...state, initialization: action.payload.status}
    default:
      return state
  }
}

type setAppStatusACType = ReturnType<typeof setAppStatus>
export const setAppStatus = (status: InitializationAppStatusType) => {
  return {
    type: "SET-APP-STATUS",
    payload: {
      status
    }
  } as const
}

// export const initializeTC = (): AppThunk => async (dispatch: AppDispatch) => {
//   dispatch(setAppStatus('process'))
//   const response = dispatch(checkAuthTC())
//     .then()
// }