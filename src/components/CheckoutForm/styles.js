import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    button: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    listItem: {
        padding: '10px 0',
    },

    text: {
        fontWeight: '700',
    },

    paymentMethod: {
        margin: '20px 0',
    },
}));