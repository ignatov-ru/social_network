/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'

import cn from 'classnames'
import s from './Navbar.module.scss'
import { getAuthorizedUserID } from '../../redux/selectors/auth-selectors'

type PageType = {
  id: number
  name: string
  to: string
  exact: boolean
}

const Navbar: React.FC<RouteComponentProps<{ pathname: string }>> = ({
  location: { pathname },
}) => {
  const authorizedUserID = useSelector(getAuthorizedUserID)
  const profileUrl = `/profile/${authorizedUserID}`

  const pages = [
    { id: 1, name: 'Profile', to: profileUrl, exact: true },
    { id: 2, name: 'Chat', to: '/chat', exact: false },
    { id: 3, name: 'Find Users', to: '/users', exact: false },
    { id: 4, name: 'Friends', to: '/friends', exact: false },
  ]

  return (
    <nav className={s.nav}>
      {pages.map((p: PageType) => (
        <NavLink
          key={p.id}
          exact={p.exact}
          to={p.to}
          activeClassName={s.active}
          className={s.navLink}
          replace
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn(s.navLinkImg, {
              [s.activeIcon]: pathname === p.to,
            })}
          >
            {/\/profile*/.test(p.to)
              ? profilePath
              : p.to === '/chat'
              ? chatPath
              : p.to === '/users'
              ? usersPath
              : friendsPath}
          </svg>
          {p.name}
        </NavLink>
      ))}
    </nav>
  )
}

const profilePath = (
  <path d='M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z' />
)

const chatPath = (
  <path d='M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z' />
)

const usersPath = (
  <path d='M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M10,4A4,4 0 0,1 14,8C14,8.91 13.69,9.75 13.18,10.43C12.32,10.75 11.55,11.26 10.91,11.9L10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M2,20V18C2,15.88 5.31,14.14 9.5,14C9.18,14.78 9,15.62 9,16.5C9,17.79 9.38,19 10,20H2Z' />
)

const friendsPath = (
  <path d='M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z' />
)

export default withRouter(Navbar)
