import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProfileWall from './ProfileWall/ProfileWall'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer'
import withAuthRedirect from '../../services/hoc/withAuthRedirect'
import { useAppDispatch } from '../../services/hooks/useApp'

import { getEditModeProfile } from '../../store/selectors/profile-selectors'
import {
  getStatus,
  getUserProfile,
  setEditModeProfile,
} from '../../store/reducers/profile-info-reducer'
import { getAuthorizedUserID } from '../../store/selectors/auth-selectors'

const ProfileContainer: React.FC = () => {
  const authorizedUserID = useSelector(getAuthorizedUserID)
  const isEditModeProfile = useSelector(getEditModeProfile)
  const dispatch = useAppDispatch()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const match: any = useParams()
  const userId = Number(match.userId)
  const isOwner = userId === authorizedUserID

  useEffect(() => {
    dispatch(getUserProfile(userId as number))
    dispatch(getStatus(userId as number))

    return () => {
      if (isEditModeProfile) {
        dispatch(setEditModeProfile({ bool: false }))
      }
    }
  }, [authorizedUserID, dispatch, isEditModeProfile, userId])

  return (
    <main>
      <ProfileInfoContainer isOwner={isOwner} />
      {!isEditModeProfile && isOwner && <ProfileWall />}
    </main>
  )
}

export default withAuthRedirect(ProfileContainer)