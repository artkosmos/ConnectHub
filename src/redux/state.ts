import {ActionDialogType, dialogsReducer} from "./dialogs-reducer";
import {ActionProfileType, profileReducer} from "./profile-reducer";

export type PostType = {
  id: number
  message: string
  likes: number
}
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

export type ProfilePageType = {
  posts: PostType[]
  newPost: string
}

export type StateType = {
  dialogPage: DialogPageType
  profilePage: ProfilePageType
  sidebar: {}
}

export type StoreType = {
  _state: StateType
  _callSubscriber: (state: StateType) => void
  getState: () => StateType
  subscriber: (observer: (state: StateType) => void) => void
  dispatch: (action: ActionType) => void
}

export type ActionType = ActionProfileType | ActionDialogType

export const store: StoreType = {
  _state: {
    dialogPage: {
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
    },
    profilePage: {
      posts: [
        {id: 1, message: 'Hey, how are you today?', likes: 0},
        {id: 1, message: 'The weather is sunny. Who want to go walking?', likes: 4},
        {id: 1, message: 'Let\'s meet the people)', likes: 13},
        {id: 1, message: 'That\'s my first post here!', likes: 6}
      ],
      newPost: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('Don\'t have any observers')
  },
  subscriber(observer: any) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action: ActionType) {
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._callSubscriber(this._state)
  }
}



