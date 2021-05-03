import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import useStyles from './styles';
import Review from './Review';

const stripePromise = loadStripe('...');

const PaymentForm = ({ checkoutToken }) => {

    const classes = useStyles();
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant="h6" gutterBottom className={classes.paymentMethod}>Payment method</Typography>
            <Elements stripe={stripePromise}></Elements>
        </>
    );
}

export default PaymentForm
