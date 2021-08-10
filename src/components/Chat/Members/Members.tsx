import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import cn from 'classnames'
import Icon from '@mdi/react'
import { mdiChevronDown } from '@mdi/js'
import s from './Members.module.scss'

import Avatar from '../../common/Avatar/Avatar'

import { getChatMembers } from '../../../redux/selectors/chat-selectors'
import { ChatMessageType } from '../../../redux/reducers/chat-reducer'
import { ChatMessageAPIType } from '../../../api/chat-api'
import ButtonSort from './ButtonSort/BurronSort'

const Members: React.FC<{ theme: string }> = ({ theme }) => {
  const chatMembers = useSelector(getChatMembers)

  const [isShowAll, setIsShowAll] = useState(false)
  const [isReverseSort, setIsReverseSort] = useState(false)
  const [isShowMembers, setIsShowMembers] = useState(false)

  const itemsCount = isShowAll ? chatMembers.length : 2

  const handleClickTitle = () =>
    isShowMembers ? setIsShowMembers(false) : setIsShowMembers(true)

  const sortMembers = (a: ChatMessageType, b: ChatMessageType): number =>
    isReverseSort
      ? b.userName.localeCompare(a.userName)
      : a.userName.localeCompare(b.userName)

  return (
    <div hidden={!chatMembers.length} className={s.container}>
      <div
        aria-hidden='true'
        className={cn(s.titleWrap, { [s.titleWrapDeployed]: isShowMembers })}
        onClick={handleClickTitle}
      >
        <div className={s.title}>Members</div>
        <Icon
          className={s.titleArrow}
          path={mdiChevronDown}
          title='ArrowShowMembers'
          size='18px'
        />
      </div>

      <ButtonSort
        theme={theme}
        isShowAll={isShowAll}
        isShowMembers={isShowMembers}
        isReverseSort={isReverseSort}
        setIsReverseSort={setIsReverseSort}
      />

      <div
        className={cn(
          { [s.members]: isShowMembers },
          { [s.notShowMembers]: !isShowMembers }
        )}
      >
        {chatMembers &&
          chatMembers
            .slice(0, itemsCount)
            .sort(sortMembers)
            .map((u: ChatMessageAPIType) => (
              <div className={s.member} key={u.userId}>
                <NavLink to={`/profile/${u.userId}`}>
                  <Avatar photo={u.photo} size='small' />
                </NavLink>
                <NavLink className={s.name} to={`/profile/${u.userId}`}>
                  {u.userName}
                </NavLink>
              </div>
            ))}

        {chatMembers.length > 2 && !isShowAll ? (
          <div className={s.showAllWrap}>
            <span
              aria-hidden='true'
              className={s.showAll}
              onClick={() => setIsShowAll(true)}
            >
              show all...
            </span>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Members
