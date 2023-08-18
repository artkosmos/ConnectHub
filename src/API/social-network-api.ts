import axios from "axios";
import {LoginFormSubmitType} from "../components/Login/LoginForm";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true
})

export const socialNetworkApi = {
  async getUsers(count: number, currentPage: number) {
    try {
      const response = await instance.get<ResponseUsersType>(
        `users?count=${count}&page=${currentPage}`)
      return response.data.items;
    } catch (error) {
      throw new Error('Something went wrong\n' + error)
    }
  },
  async follow(userId: number) {
    try {
      const response = await instance.post<ResponseType>(`follow/${userId}`)
      return response.data
    } catch (error) {
      throw new Error('Something went wrong\n' + error)
    }
  },
  async unfollow(userId: number) {
    try {
      const response = await instance.delete<ResponseType>(`follow/${userId}`)
      return response.data
    } catch (error) {
      throw new Error('Something went wrong\n' + error)
    }
  },
  async getProfile(userId: string) {
    try {
      const response = await instance.get<ResponseProfileType>(`profile/${userId}`)
      return response.data
    } catch (error) {
      throw new Error('Something went wrong\n' + error)
    }
  },
  async checkAuth() {
    try {
      const response = await instance.get<ResponseType<AuthData>>(`auth/me`)
      return response.data
    } catch (error) {
      throw new Error('Something went wrong\n' + error)
    }
  },
  async logIn(data: LoginFormSubmitType) {
    try {
      const response = await instance.post<ResponseType<{userId: number}>>(`auth/login`, data)
      return response.data
    } catch (error) {
      throw new Error('Something went wrong\n' + error)
    }
  },
  async logOut() {
    try {
      const response = await instance.delete<ResponseType>(`auth/login`)
      return response.data
    } catch (error) {
      throw new Error('Something went wrong\n' + error)
    }
  },
  async getProfileStatus(userId: string) {
    try {
      const response = await instance.get<string>(`profile/status/${userId}`)
      return response.data
    } catch (error) {
      throw new Error('Something went wrong\n' + error)
    }
  },
  async updateProfileStatus(status: string) {
    try {
      const response = await instance.put<ResponseType>(`profile/status`, {status})
      return response.data
    } catch (error) {
      throw new Error('Something went wrong\n' + error)
    }
  }
}

export type ResponseProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string | null
    large: string | null
  }
}

export type UserType = {
  id: number
  name: string
  status: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

export type ResponseUsersType = {
  items: UserType[]
  totalCount: number
  error: string
}

export type ResponseType<T = {}> = {
  resultCode: number
  messages: string[]
  data: T
}

type AuthData = {
  id: number
  email: string
  login: string
}