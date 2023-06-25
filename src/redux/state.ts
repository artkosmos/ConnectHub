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
}

export type ProfilePageType = {
  posts: PostType[]
  newPost: string
}

export type StateType = {
  dialogPage: DialogPageType
  profilePage: ProfilePageType
}

export type AddPostActionType = {
  type: "ADD-POST"
}

export type ChangePostActionType = {
  type: "CHANGE-POST-TEXT"
  value: string
}

export type ActionType = AddPostActionType | ChangePostActionType

export type StoreType = {
  _state: StateType
  _callSubscriber: (state: StateType) => void
  getState: () => StateType
  subscriber: (observer: (state: StateType) => void) => void
  dispatch: (action: ActionType) => void
}

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
      ]
    },
    profilePage: {
      posts: [
        {id: 1, message: 'Hey, how are you today?', likes: 0},
        {id: 1, message: 'The weather is sunny. Who want to go walking?', likes: 4},
        {id: 1, message: 'Let\'s meet the people)', likes: 13},
        {id: 1, message: 'That\'s my first post here!', likes: 6}
      ],
      newPost: ''
    }
  },
  _callSubscriber (state: StateType) {
    console.log('Don\'t have any observers')
  },
  subscriber (observer: any) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    switch (action.type) {
      case "ADD-POST":
        const newPost = {id: new Date().getDate(), message: this._state.profilePage.newPost, likes: 0}
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPost = ''
        this._callSubscriber(this._state)
        return
      case "CHANGE-POST-TEXT":
        this._state.profilePage.newPost = action.value
        this._callSubscriber(this._state)
        return
    }
  }
}


