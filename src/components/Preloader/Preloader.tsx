import React from 'react'

import cn from 'classnames'
import preloaderTheme1 from '../../assets/img/preloader/preloaderTheme1.svg'
import preloaderTheme2 from '../../assets/img/preloader/preloaderTheme2.svg'
import s from './Preloader.module.scss'

import { useAppSelector } from '../../services/hooks/useApp'

import { getTheme } from '../../store/selectors/app-selectors'

type PropsType = {
  display?: 'default' | 'block'
}

const Preloader: React.FC<PropsType> = ({ display = 'default' }) => {
  const theme = useAppSelector(getTheme)

  return (
    <div
      className={cn(
        { [s.container_default]: display === 'default' },
        { [s.container_block]: display === 'block' }
      )}
    >
      <div className={s.wrap}>
        <img
          src={theme === 'theme1' ? preloaderTheme1 : preloaderTheme2}
          alt='preloader'
        />
      </div>
    </div>
  )
}

export default Preloader
