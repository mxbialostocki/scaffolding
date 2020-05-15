import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  homePage: {
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3em',
      justifyContent: 'flex-start'
    }
  },
  hidden: {
    display: 'none',
    lineHeight: '0'
  }
}))

export default useStyles
