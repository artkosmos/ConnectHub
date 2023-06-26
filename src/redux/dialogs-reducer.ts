import {ActionType, DialogPageType, MessageType} from "./store";

export type ActionDialogType = ChangeMessageTextACType | SendMessageACType

const initialState = {
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

export const dialogReducer = (state: DialogPageType = initialState, action: ActionType): DialogPageType => {
  switch (action.type) {
    case "SEND-MESSAGE":
      const newMessage: MessageType = {id: 2, message: state.newMessage}
      state.messages.push(newMessage)
      state.newMessage = ''
      return state
    case "CHANGE-MESSAGE-TEXT":
      state.newMessage = action.value
      return state
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