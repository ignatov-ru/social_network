/* eslint-disable max-len */
import React, { useCallback, useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button'
import PostAddIcon from '@material-ui/icons/PostAdd'
import { IconButton, TextField } from '@material-ui/core'
import s from './ProfileWall.module.scss'
import stylesAdaptiveButtons from './ProfileButtonsPostsDelete/ProfileButtonsPostsDelete.module.scss'

import ProfileButtonsPostsDelete from './ProfileButtonsPostsDelete/ProfileButtonsPostsDelete'
import ProfilePost from './ProfilePost/ProfilePost'
import NoElement from '../../common/NoElement/NoElement'
import useLocalStorage from '../../../hooks/useLocalStorage'

import {
  getPosts,
  getPostsForDelete,
  getProfile,
} from '../../../redux/selectors/profile-selectors'
import { actions } from '../../../redux/reducers/profile-reducer'
import { getTheme } from '../../../redux/selectors/app-selectors'

import { PostType } from '../../../types/types'

const ProfileWall: React.FC = () => {
  const profile = useSelector(getProfile)
  const posts = useSelector(getPosts)
  const postsForDelete = useSelector(getPostsForDelete)
  const dispatch = useDispatch()

  const [isShowAnimation, setIsShowAnimation] = useState(false)
  const [isCancelDeletion, setIsCancelDeletion] = useState(false)
  const [isSelectedAllPosts, setIsSelectedAllPosts] = useState(false)
  const [isHiddenAllLikeAndX, setIsHiddenAllLikeAndX] = useState(false)

  useLocalStorage('posts', posts, actions.initializePosts)

  const handleDeleteOnePost = useCallback(
    (idPost: number) => {
      dispatch(actions.deletePost(idPost))
    },
    [dispatch]
  )

  useEffect(() => {
    if (postsForDelete.size === posts.length) {
      setIsSelectedAllPosts(true)
    } else {
      setIsSelectedAllPosts(false)
    }
  }, [postsForDelete.size, posts.length])

  const postsElements = posts.map((p: PostType) => (
    <ProfilePost
      key={p.idPost}
      post={{
        idPost: p.idPost,
        message: p.message,
        likesCount: p.likesCount,
        isLikeClick: p.isLikeClick,
      }}
      profile={profile}
      isSelectedAllPosts={isSelectedAllPosts}
      isHiddenAllLikeAndX={isHiddenAllLikeAndX}
      setIsHiddenAllLikeAndX={setIsHiddenAllLikeAndX}
      isShowAnimation={isShowAnimation}
      isCancelDeletion={isCancelDeletion}
      setIsCancelDeletion={setIsCancelDeletion}
      handleDeleteOnePost={handleDeleteOnePost}
    />
  ))

  return (
    <section className={s.container}>
      <h1 className={s.visuallyHidden}>Profile wall</h1>

      <ProfileButtonsPostsDelete
        posts={posts}
        postsForDelete={postsForDelete}
        isSelectedAllPosts={isSelectedAllPosts}
        setIsSelectedAllPosts={setIsSelectedAllPosts}
        setIsHiddenAllLikeAndX={setIsHiddenAllLikeAndX}
        setIsCancelDeletion={setIsCancelDeletion}
        setIsShowAnimation={setIsShowAnimation}
      />

      {postsForDelete.size === 0 && <AddPostForm />}

      <div className={s.posts}>
        {postsElements}

        {!posts.length && <NoElement elements='posts' writeSomething />}
      </div>
    </section>
  )
}

const AddPostForm: React.FC = memo(() => {
  const stylesAddPostButton: React.CSSProperties = {
    color: 'white',
    textShadow: '2px 2px 7px var(--color-darkBlueTransparent)',
    margin: '10px 0 10px 10px',
    width: '140px',
  }

  const theme = useSelector(getTheme)
  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const handleAddPost = () => {
    if (!value.trim()) {
      return
    }
    dispatch(actions.addPost(value))
    setValue('')
  }

  return (
    <div>
      <div className={s.form}>
        <TextField
          name='newPostText'
          placeholder='Enter the post text...'
          multiline
          fullWidth
          variant='outlined'
          color={theme === 'theme1' ? 'primary' : 'secondary'}
          inputProps={{ maxLength: 1000, value }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <div className={stylesAdaptiveButtons.buttonDesktop}>
          <Button
            onClick={handleAddPost}
            variant='contained'
            color={theme === 'theme1' ? 'primary' : 'secondary'}
            style={stylesAddPostButton}
            endIcon={<PostAddIcon />}
          >
            Add post
          </Button>
        </div>
        <div hidden className={stylesAdaptiveButtons.buttonMobile}>
          <IconButton
            aria-label='addPost'
            onClick={handleAddPost}
            style={{ marginLeft: 5 }}
            title='Add post'
          >
            <PostAddIcon color={theme === 'theme1' ? 'primary' : 'secondary'} />
          </IconButton>
        </div>
      </div>
    </div>
  )
})

export default memo(ProfileWall)
