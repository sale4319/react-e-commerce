import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    color: '#666',
    fontSize: '25px',
    fontWeight: '700',
    fontFamily: 'Libre Baskerville, serif',
  },
  image: {
    marginRight: '10px',
    maxWidth: '4%',
    height: '4%',

  },
  grow: {
    flexGrow: 1,
  },
}));
