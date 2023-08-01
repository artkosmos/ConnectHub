import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true
})

export const socialNetworkApi = {
  async getUsers(count: number, currentPage: number) {
    try {
      const response = await instance.get(
        `users?count=${count}&page=${currentPage}`);
      return response.data.items;
    } catch (error) {
      return alert('Something went wrong\n' + error);
    }
  },
  async follow(userId: number) {
    try {
      const response = await instance.post(`follow/${userId}`)
      return response.data
    } catch (error) {
      return alert('Something went wrong\n' + error)
    }
  },
  async unfollow(userId: number) {
    try {
      const response = await instance.delete(`follow/${userId}`)
      return response.data
    } catch (error) {
      return alert('Something went wrong\n' + error)
    }
  },
  async getProfile(userId: string) {
    try {
      const response = await instance.get(`profile/${userId}`)
      return response.data
    } catch (error) {
      return alert('Something went wrong\n' + error)
    }
  },
  async checkAuth() {
    try {
      const response = await instance.get(`auth/me`)
      return response.data
    } catch (error) {
      return alert('Something went wrong\n' + error)
    }
  }
}