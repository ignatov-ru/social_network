import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  search: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',

    '&:focus': {
      borderRadius: '5px',
      backgroundColor: '#5e5e5e4d',
    },
  },
}))

export default useStyles