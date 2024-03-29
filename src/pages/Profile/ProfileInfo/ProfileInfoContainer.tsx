import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { submit } from 'redux-form'

import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import CloseIcon from '@mui/icons-material/Close'
import s from './ProfileInfoContainer.module.scss'

import ProfilePlug from './ProfilePlug/ProfilePlug'
import ProfileData from './ProfileData/ProfileData'
import Avatar from '../../../components/Avatar/Avatar'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import ProfileDataForm from './ProfileDataForm/ProfileDataForm'
import Preloader from '../../../components/Preloader/Preloader'
import ButtonFollow from '../../../components/ButtonFollow/ButtonFollow'
import ProfileInputChangeAvatar from './ProfileInputChangeAvatar/ProfileInputChangeAvatar'
import { useAppDispatch, useAppSelector } from '../../../services/hooks/useApp'

import { getTheme } from '../../../store/selectors/app-selectors'
import {
  getEditModeProfile,
  getErrorProfileContacts,
  getProfile,
  getShowSuccessSave,
} from '../../../store/selectors/profile-selectors'
import {
  setEditModeProfile,
  savePhotoThunk,
  saveProfileThunk,
} from '../../../store/reducers/profile-info-reducer'
import { getIsFollowedSelector } from '../../../store/selectors/users-selectors'
import { getIsFollowed } from '../../../store/reducers/users-reducer'

import { ProfileType } from '../../../types/types'

// when going to the profile page, scroll up to the name
function ScrollToTopOnMount() {
  useEffect(() => {
    const fullName = document.getElementById('scrollToTopOnMount')
    fullName?.scrollIntoView(false)
  }, [])
  return null
}

type PropsType = {
  isOwner: boolean
}

const ProfileInfoContainer: React.FC<PropsType> = ({ isOwner }) => {
  const stylesSaveAndCancelButton: React.CSSProperties = {
    fontSize: 12,
    color: 'white',
    textShadow: '2px 2px 7px var(--color-darkBlueTransparent)',
    margin: 10,
  }

  const stylesEditButton: React.CSSProperties = {
    fontSize: 11,
    marginTop: 20,
  }

  // for ProfileInfoDataForm
  const errorProfileContacts = useAppSelector(getErrorProfileContacts)

  const theme = useAppSelector(getTheme)
  const profile = useAppSelector(getProfile)
  const isFollowed = useAppSelector(getIsFollowedSelector)
  const showSuccessSave = useAppSelector(getShowSuccessSave)
  const isEditModeProfile = useAppSelector(getEditModeProfile)
  const dispatch = useAppDispatch()

  const [isEditInputProfileForm, setIsEditInputProfileForm] = useState(false)

  useEffect(() => {
    if (profile) {
      dispatch(getIsFollowed(profile.userId))
    }
  }, [dispatch, profile])

  const onSubmitProfile = (values: ProfileType) => {
    dispatch(saveProfileThunk(values))
  }

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(savePhotoThunk(e.target.files[0]))
    }
  }

  const handleEditProfile = () => {
    dispatch(setEditModeProfile({ bool: true }))
  }

  const handleSaveProfile = () => {
    setIsEditInputProfileForm(false)
    dispatch(submit('editProfile'))
  }

  const handleCancelProfile = () => {
    setIsEditInputProfileForm(false)
    dispatch(setEditModeProfile({ bool: false }))
  }

  if (!profile) {
    return (
      <>
        <Preloader />
        <ProfilePlug isOwner={isOwner} />
      </>
    )
  }

  return (
    <section className={s.container}>
      <h1 className={s.visuallyHidden}>Profile information</h1>

      <div className={s.columnLeft}>
        <div className={s.avatarWrap}>
          <Avatar photo={profile.photos.large} size='extra-large' id={null} />
          <ProfileInputChangeAvatar
            isOwner={isOwner}
            isEditModeProfile={isEditModeProfile}
            handleChangeAvatar={handleChangeAvatar}
          />
        </div>

        {isOwner && !isEditModeProfile ? (
          <Button
            onClick={handleEditProfile}
            variant='outlined'
            style={stylesEditButton}
            startIcon={<EditIcon style={{ fontSize: 16 }} />}
          >
            Edit profile
          </Button>
        ) : (
          <div className={s.buttonFollow}>
            <ButtonFollow id={profile.userId} followed={isFollowed} />
          </div>
        )}

        {isEditModeProfile && (
          <div className={s.buttonsSaveAndCancelProfile}>
            <Button
              onClick={handleSaveProfile}
              disabled={!isEditInputProfileForm}
              variant='contained'
              color={theme === 'theme1' ? 'primary' : 'secondary'}
              fullWidth
              style={stylesSaveAndCancelButton}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
            <Button
              onClick={handleCancelProfile}
              variant='outlined'
              fullWidth
              style={stylesSaveAndCancelButton}
              startIcon={<CloseIcon />}
            >
              Cancel
            </Button>
          </div>
        )}

        {isEditModeProfile && showSuccessSave && (
          <ShowSuccessSavePortal>
            <div className={s.successSave}>{showSuccessSave}</div>
          </ShowSuccessSavePortal>
        )}
      </div>

      <div className={s.columnRight}>
        {!isEditModeProfile && (
          <>
            <div id='scrollToTopOnMount' className={s.fullName}>
              {profile.fullName}
            </div>
            <ProfileStatus isOwner={isOwner} />
            <ProfileData profile={profile} />
          </>
        )}

        {isEditModeProfile && (
          <ProfileDataForm
            initialValues={profile}
            onSubmit={onSubmitProfile}
            errorProfileContacts={errorProfileContacts}
            setIsEditInputProfileForm={setIsEditInputProfileForm}
          />
        )}
      </div>

      {/* when you go to the profile page, the scroll will be reset */}
      <ScrollToTopOnMount />
    </section>
  )
}

const ShowSuccessSavePortal = ({ children }: { children: React.ReactNode }) => {
  const el: HTMLDivElement = document.createElement('div')
  document.body.append(el)

  return createPortal(children, el)
}

export default ProfileInfoContainer
