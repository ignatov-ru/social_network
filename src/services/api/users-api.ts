import { UserType } from '../../types/types'
import { DefaultResponseType, instance } from './api'

type GetUsersType = {
  items: UserType[]
  totalCount: number
  error: string
}

const usersAPI = {
  async getUsers(
    currentPage = 1,
    pageSize: number,
    term?: string,
    friend?: boolean
  ) {
    const response = await instance.get<GetUsersType>(
      `users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`
    )
    return response.data
  },

  async isFollowed(id: number) {
    const response = await instance.get<boolean>(`follow/${id}`)
    return response.data
  },

  async followUser(id: number) {
    const response = await instance.post<DefaultResponseType>(
      `follow/${id}`,
      {}
    )
    return response.data
  },

  async unfollowUser(id: number) {
    const response = await instance.delete<DefaultResponseType>(`follow/${id}`)
    return response.data
  },
}

export default usersAPI
