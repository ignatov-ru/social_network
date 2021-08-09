import { useSelector } from 'react-redux'
import { TextField } from '@material-ui/core'
import { getTheme } from '../../../redux/selectors/app-selectors'

const RenderTextField = (props) => {
  const {
    label,
    input,
    placeholder,
    multiline,
    variant,
    inputProps,
    onInput,
    onFocus,
    meta: { touched, error, warning },
    fullWidth,
    ...custom
  } = props
  const theme = useSelector(getTheme)
  return (
    <>
      <TextField
        color={theme === 'theme1' ? 'primary' : 'secondary'}
        label={label}
        placeholder={placeholder}
        inputProps={inputProps}
        onInput={onInput}
        onFocus={onFocus}
        variant={variant}
        multiline={multiline}
        fullWidth={fullWidth}
        {...input}
        {...custom}
      />
      {touched &&
        ((error && <span style={{ color: '#f44336' }}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </>
  )
}

export default RenderTextField
