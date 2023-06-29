export type ActionDialogType = ChangeMessageTextACType | SendMessageACType

export type DialogType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  message: string
}

export type DialogPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessage: string
}

const initialState: DialogPageType = {
  dialogs: [
    {id: 1, name: 'Victor'},
    {id: 2, name: 'Jon'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Jasmine'},
    {id: 5, name: 'Vladimir'},
    {id: 6, name: 'Nicola'},
  ],
  messages: [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you doing?'},
    {id: 3, message: 'I\'m fine, thanks!'},
    {id: 4, message: 'What did you do at the weekend?'},
    {id: 5, message: 'I went to the cinema on Guardians of Galaxy. Did you see that movie?'},
    {id: 6, message: 'Yes, I have already seen it) Good movie!'},
    {id: 6, message: 'I\'m hungry. Let\'s have lunch.'},
    {id: 6, message: 'Me either. Let\'s go.'},
  ],
  newMessage: ''
}

export const dialogReducer = (state: DialogPageType = initialState, action: ActionDialogType): DialogPageType => {
  switch (action.type) {
    case "SEND-MESSAGE":
      const newMessage: MessageType = {id: 2, message: state.newMessage}
      return {...state, messages: [...state.messages, newMessage], newMessage: ''}
    case "CHANGE-MESSAGE-TEXT":
      return {...state, newMessage: action.value}
    default:
      return state
  }
}

export type ChangeMessageTextACType = ReturnType<typeof changeMessageTextAC>
export const changeMessageTextAC = (value: string) => {
  return {
    type: "CHANGE-MESSAGE-TEXT",
    value
  } as const
}

export type SendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
  return {
    type: "SEND-MESSAGE"
  } as const
}