import { AppStateType } from '../redux-store'

export const getProfile = (state: AppStateType) => state.profilePage.profile

export const getStatusSelector = (state: AppStateType) =>
  state.profilePage.status

export const getShowSuccessSave = (state: AppStateType) =>
  state.profilePage.showSuccessSave

export const getErrorProfileContacts = (state: AppStateType) =>
  state.profilePage.errorProfileContacts

export const getPosts = (state: AppStateType) => state.profilePage.posts

export const getPostsForDelete = (state: AppStateType) =>
  state.profilePage.postsForDelete

export const getToggleClickDeleteSelectedPosts = (state: AppStateType) =>
  state.profilePage.isClickDeleteSelectedPosts

export const getIsSelectedPost = (state: AppStateType) =>
  state.profilePage.isSelectedPost

export const getEditModeProfile = (state: AppStateType) =>
  state.profilePage.isEditModeProfile

export const getEditInputProfileForm = (state: AppStateType) =>
  state.profilePage.isEditInputProfileForm