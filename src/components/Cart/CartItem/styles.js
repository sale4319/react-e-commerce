import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
    backgroundSize: 'contain',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardText: {
    fontFamily: 'Libre Baskerville, serif',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  removeButton: {
    background: '#ff4a4a',
    color: '#f2f2f2',
  },
}));