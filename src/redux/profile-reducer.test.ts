import {
  ActionProfileType,
  addPost, deletePost,
  ProfilePageType,
  profileReducer,
  setProfilePreloader,
  setProfileStatus,
  setUserProfile
} from "./profile-reducer";

let initialState: ProfilePageType

beforeEach(() => {
  initialState = {
    posts: [
      {id: 1, message: 'Hey, how are you today?', likes: 0},
      {id: 2, message: 'The weather is sunny. Who want to go walking?', likes: 4},
      {id: 3, message: 'Let\'s meet the people)', likes: 13},
      {id: 4, message: 'That\'s my first post here!', likes: 6}
    ],
    userProfile: null,
    preloader: true,
    status: ''
  }
})

it('should return the initial state when wrong action is passed', () => {
  const state = initialState
  const wrongAction = {} as ActionProfileType
  const result = profileReducer(state, wrongAction)

  expect(result).toEqual(initialState)
})

it('should add a new post to the state', () => {
  const state = initialState
  const message = "New post message"
  const action = addPost(message)
  const result = profileReducer(state, action)

  expect(result.posts.length).toBe(state.posts.length + 1)
  expect(result.posts[result.posts.length - 1].message).toBe(message)
  expect(result.posts[result.posts.length - 1].likes).toBe(0)
})

it('should set the user profile in the state', () => {
  const state = initialState
  const profile = {
    userId: 1,
    lookingForAJob: true,
    lookingForAJobDescription: 'take me',
    fullName: 'Artem',
    aboutMe: 'nothing special',
    contacts: {
      github: 'github',
      vk: 'vk',
      facebook: 'facebook',
      instagram: 'instagram',
      twitter: 'twitter',
      website: 'website',
      youtube: 'youtube',
      mainLink: 'my link'
    },
    photos: {
      small: 'photo',
      large: 'photo'
    }
  }

  const action = setUserProfile(profile)
  const result = profileReducer(state, action)

  expect(result.userProfile).toEqual(profile)
  expect(result.userProfile?.userId).toBe(1)
  expect(result.userProfile?.fullName).toBe('Artem')
})

it('should set the preloader value in the state', () => {
  const value = true
  const action = setProfilePreloader(value)
  const result = profileReducer(initialState, action)

  expect(result.preloader).toBe(value)
})

it('should set the status value in the state', () => {
  const status = 'Online';
  const action = setProfileStatus(status)
  const result = profileReducer(initialState, action)

  expect(result.status).toBe(status)
})

it('should delete a post from the state', () => {
  const postId = 2
  const action = deletePost(postId)
  const result = profileReducer(initialState, action)

  expect(result.posts.length).toBe(initialState.posts.length - 1);
  expect(result.posts.some(post => post.id === postId)).toBe(false)
})

it('should do nothing if wrong post ID is passed', () => {
  const postId = -3
  const action = deletePost(postId)
  const result = profileReducer(initialState, action)

  expect(result.posts.length).toBe(initialState.posts.length)
  expect(result).toEqual(initialState)
})
