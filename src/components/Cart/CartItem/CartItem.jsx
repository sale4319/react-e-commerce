import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';


import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <div>
            <Card>
                <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" className={classes.cardText}>{item.name}</Typography>
                    <Typography variant="h6" className={classes.cardText}>{item.line_total.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions className={classes.cartActions}>
                    <div className={classes.buttons}>
                        <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                        <Typography className={classes.cardText}>{item.quantity}</Typography>
                        <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                    </div>
                    <Button variant="contained" type="button" className={classes.removeButton} onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
                </CardActions>
            </Card>
        </div >
    )
}

export default CartItem
