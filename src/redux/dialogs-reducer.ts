import {ActionType, DialogPageType, MessageType} from "./store";

export type ActionDialogType = ChangeMessageTextACType | SendMessageACType

export const dialogsReducer = (state: DialogPageType, action: ActionType): DialogPageType => {
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