import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

const posts: PostType[] = [
  {id: 1, message: 'Hey, how are you today?', likes: 0},
  {id: 1, message: 'The weather is sunny. Who want to go walking?', likes: 4},
  {id: 1, message: 'Let\'s meet the people)', likes: 13},
  {id: 1, message: 'That\'s my first post here!', likes: 6}
]
const dialogs: DialogType[] = [
  {id: 1, name: 'Victor'},
  {id: 2, name: 'Jon'},
  {id: 3, name: 'Alex'},
  {id: 4, name: 'Jasmine'},
  {id: 5, name: 'Vladimir'},
  {id: 6, name: 'Nicola'},
]
const messages: MessageType[] = [
  {id: 1, message: 'Hello!'},
  {id: 2, message: 'How are you doing?'},
  {id: 3, message: 'I\'m fine, thanks!'},
  {id: 4, message: 'What did you do at the weekend?'},
  {id: 5, message: 'Did you see that movie?'},
  {id: 6, message: 'I\'m hungry. Let\'s have lunch'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);