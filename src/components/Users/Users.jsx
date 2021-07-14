import React, { useState } from 'react';

import User from './User/User';
import Search from './Search/Search';

import s from './Users.module.css';

import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Users = (props) => {
  let [page, setPage] = useState(1);

  const searchUsers = (pageNumber, term) => {
    props.getFoundUsers(pageNumber, props.pageSize, term);
  }

  const check = () => {
    if (props.users.length > 0) {
      return props.users
    } else {
      return props.foundUsers
    }
  }

  return <div className={s.wrapper}>
    <Search
      onPageChanged={searchUsers}
      totalUsersCount={props.totalUsersCount}
    />

    {
      props.totalUsersCount === 0 && !props.isFetching &&
      <div className={s.nothingFound}>Nothing found</div>
    }

    <div className={s.container}>
      {check().map(u =>
        <div key={u.id} className={s.user}>
          <User
            id={u.id}
            photo={u.photos.small}
            name={u.name}
            status={u.status}
            followed={u.followed}
            unfollow={props.unfollow}
            follow={props.follow}
            followingInProgress={props.followingInProgress}
            authorizedUserID={props.authorizedUserID}
          />
        </div>
      )}

      {<div className={s.buttonLoadMore}>
        <IconButton
          aria-label="load more users"
          onClick={() => {
            setPage(++page);
            props.onPageChanged(page, '');
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
      }

    </div>
  </div>
}

export default Users;