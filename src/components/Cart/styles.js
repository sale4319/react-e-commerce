import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    color: '#666',
    fontSize: '65px',
    fontWeight: '700',
    fontFamily: 'Libre Baskerville, serif',
    marginTop: '5%',
  },
  emptyButton: {
    background: '#ff4a4a',
    color: '#f2f2f2',
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    background: '#77DD77',
    color: '#f2f2f2',
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  cardText: {
    fontFamily: 'Libre Baskerville, serif',
  },
}));