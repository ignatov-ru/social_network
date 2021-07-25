import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ChatMessageAPIType } from '../../api/chat-api';
import { ChatMessageType, sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/reducers/chat-reducer';
import { getChatMembers, getMessages, getStatus } from '../../redux/selectors/chat-selectors';
import { getAuthorizedUserID } from '../../redux/selectors/auth-selectors';

import Avatar from '../common/Avatar/Avatar';

import s from './Chat.module.css';
import cn from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Icon from "@mdi/react";
import { Button, TextField } from '@material-ui/core';
import { mdiChevronDown } from '@mdi/js';

const Chat: React.FC = () => {

  const status = useSelector(getStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startMessagesListening())
    return (() => {
      dispatch(stopMessagesListening())
    })
  }, [dispatch])

  return <div className={s.chat}>
    {/* error появляется, когда пропадает интернет, на несколько миллисекунд и сменяется другим статусом? */}
    {status === 'error' &&
      <div>Some error occured. Please, refresh the page...</div>
    }
    <div className={s.membersAndMessages} >
      <Messages />
      <Members />
    </div>
    <AddMessageForm />
  </div>
}

const Members: React.FC = () => {

  const chatMembers = useSelector(getChatMembers)
  let [isShowAll, setIsShowAll] = useState(false)
  let [isReverseSort, setIsReverseSort] = useState(false)
  const itemsCount = isShowAll ? chatMembers.length : 5
  let [isShowMembers, setIsShowMembers] = useState(false)

  return <div className={s.membersContainer}>
    <div className={cn(s.titleMembersWrap, { [s.titleMembersWrapDeployed]: isShowMembers }, { [s.buttonSortWrapHiddenNotShowAll]: !isShowAll })}
      onClick={() => isShowMembers ? setIsShowMembers(false) : setIsShowMembers(true)}>
      <div className={s.titleMembers}>Members</div>
      <Icon className={s.titleMembersArrow} path={mdiChevronDown} title="ArrowShowMembers" size='18px' />
    </div>

    <div className={cn(s.buttonSortWrap, { [s.buttonSortWrapHidden]: isShowMembers }, { [s.buttonSortWrapHidden2]: !isShowMembers }, { [s.buttonSortWrapHiddenNotShowAll]: !isShowAll })}>
      <Button
        onClick={() => isReverseSort
          ? setIsReverseSort(false)
          : setIsReverseSort(true)}
        startIcon={isReverseSort
          ? <ArrowDropUpIcon />
          : <ArrowDropDownIcon />}
        style={{ fontSize: 10, marginBottom: 5, padding: 3 }}
      >sort by name</Button>
    </div>

    <div className={cn({ [s.chatMembersWrapHidden]: isShowMembers }, { [s.chatMembersWrapHidden2]: !isShowMembers }, { [s.buttonSortWrapHiddenNotShowAll]: !isShowAll })}>
      {
        chatMembers && chatMembers
          .slice(0, itemsCount)
          .sort((a: any, b: any): any => isReverseSort
            ? b.userName.localeCompare(a.userName)
            : a.userName.localeCompare(b.userName)
          )
          .map((u: any) => (
            <div className={s.member} key={u.userId}>
              <NavLink to={'/profile/' + u.userId}>
                <Avatar photo={u.photo} size='small' />
              </NavLink>
              <NavLink className={cn(s.name, s.nameMember)} to={'/profile/' + u.userId}>
                {u.userName}
              </NavLink>
            </div>
          ))
      }

      {
        chatMembers.length > 5 && !isShowAll
          ? <div className={s.showAllWrap}>
            <span className={s.showAll} onClick={() => setIsShowAll(true)}>
              show all...
            </span>
          </div>
          : ''
      }
    </div>
  </div >
}

const Messages: React.FC = () => {

  const messages = useSelector(getMessages)
  const messagesAnchorRef = useRef<HTMLDivElement>(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 1) {
      !isAutoScroll && setIsAutoScroll(true)
    } else {
      isAutoScroll && setIsAutoScroll(false)
    }
  }

  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isAutoScroll])

  return (
    <div className={s.allMessages} onScroll={scrollHandler}>
      {
        messages
          .filter(m => m.message.trim().length > 0)
          .map((m: ChatMessageType) =>
            <Message key={m.id} message={m} />
          )
      }
      <div ref={messagesAnchorRef}></div>
    </div>
  )
}

const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(
  ({ message }) => {

    const myID = useSelector(getAuthorizedUserID)

    return (
      <div className={cn(
        s.messageContainer,
        { [s.myMessageContainer]: myID === message.userId }
      )}>
        <NavLink to={'/profile/' + message.userId}>
          <div className={s.avatarMedium}>
            <Avatar photo={message.photo} size='medium' />
          </div>
          <div className={s.avatarSmall}>
            <Avatar photo={message.photo} size='small' />
          </div>
        </NavLink>
        <div className={s.nameAndMessage}>
          <NavLink className={s.name} to={'/profile/' + message.userId}>
            {message.userName}
          </NavLink>
          <div className={s.message}>{message.message}</div>
        </div>
      </div>
    )
  }
)

const AddMessageForm: React.FC = () => {

  const [message, setMessage] = React.useState('')
  const status = useSelector(getStatus)
  const dispatch = useDispatch()

  const handleSendMessage = () => {
    if (!message.trim()) {
      return
    }
    dispatch(sendMessage(message))
    setMessage('')
  }

  return (
    <div className={s.wrapForm}>
      <div className={s.form}>
        <TextField
          name='newMessageText'
          placeholder='Enter your message...'
          multiline={true}
          fullWidth={true}
          rowsMax='3'
          variant="outlined"
          inputProps={{ maxLength: 100 }}
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        />
        <IconButton
          aria-label="sendMessage"
          color='primary'
          style={{ margin: '5px' }}
          onClick={handleSendMessage}
          disabled={status === 'pending'}
        >
          <SendIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Chat;