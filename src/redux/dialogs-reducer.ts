import {v1} from "uuid";

export type ActionDialogType = SendMessageACType

export type DialogType = {
  id: string
  name: string
}

export type MessageType = {
  id: string
  message: string
}

export type DialogPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
}

const initialState: DialogPageType = {
  dialogs: [
    {id: v1(), name: 'Victor'},
    {id: v1(), name: 'Jon'},
    {id: v1(), name: 'Alex'},
    {id: v1(), name: 'Jasmine'},
    {id: v1(), name: 'Vladimir'},
    {id: v1(), name: 'Nicola'},
  ],
  messages: [
    {id: v1(), message: 'Hello!'},
    {id: v1(), message: 'How are you doing?'},
    {id: v1(), message: 'I\'m fine, thanks!'},
    {id: v1(), message: 'What did you do at the weekend?'},
    {id: v1(), message: 'I went to the cinema on Guardians of Galaxy. Did you see that movie?'},
    {id: v1(), message: 'Yes, I have already seen it) Good movie!'},
    {id: v1(), message: 'I\'m hungry. Let\'s have lunch.'},
    {id: v1(), message: 'Me either. Let\'s go.'},
  ],
}

export const dialogReducer = (state: DialogPageType = initialState, action: ActionDialogType): DialogPageType => {
  switch (action.type) {
    case "SEND-MESSAGE":
      const newMessage: MessageType = {id: v1(), message: action.message}
      return {...state, messages: [...state.messages, newMessage]}
    default:
      return state
  }
}

export type SendMessageACType = ReturnType<typeof sendMessage>
export const sendMessage = (message: string) => {
  return {
    type: "SEND-MESSAGE",
    message
  } as const
}