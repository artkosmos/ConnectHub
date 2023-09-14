import {StateType} from "../redux/redux-store";
import {ProfileInfoType} from "../API/social-network-api";
import {AppUserType} from "../redux/users-reducer";
import {PostType} from "../redux/profile-reducer";
import {DialogType, MessageType} from "../redux/dialogs-reducer";

export const getUserProfile = (state: StateType): ProfileInfoType | null => state.profilePage.userProfile
export const getProfilePreloader = (state: StateType): boolean => state.profilePage.preloader
export const getProfileStatus = (state: StateType): string => state.profilePage.status
export const getProfilePosts = (state: StateType): PostType[] => state.profilePage.posts
export const getProfileError = (state: StateType): null | string => state.profilePage.error

export const getAuthUserId = (state: StateType): number | undefined => state.auth.userId
export const getAuthError = (state: StateType): null | string => state.auth.authError
export const isAuthorized = (state: StateType): boolean => state.auth.isLogIn
export const getAuthUserLogin = (state: StateType): string | undefined => state.auth.login

export const getUsersCountToDisplay = (state: StateType): number => state.usersPage.countUsers
export const getCurrentUsersPage = (state: StateType): number => state.usersPage.currentUsersPage
export const getUsersPagePreloader = (state: StateType): boolean => state.usersPage.preloader
export const getTotalUsersCount = (state: StateType): number => state.usersPage.totalUsersCount
export const getUsers = (state: StateType): AppUserType[] => state.usersPage.users
export const getFollowingInProgress = (state: StateType): number[] => state.usersPage.followingInProgress

export const getDialogs = (state: StateType): DialogType[] => state.dialogPage.dialogs
export const getMessages = (state: StateType): MessageType[] => state.dialogPage.messages
