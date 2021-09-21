import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id: 1, name:'Shoes', description: 'Running Shoes', price:'$5', image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fshoes&psig=AOvVaw2MGMIk3v15IqWAlz9v2PWf&ust=1632251359234000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIC1x6WgjvMCFQAAAAAdAAAAABAN'},
    {id: 2, name:'Macbook', description: 'Apple Macbook', price:'$5', image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techradar.com%2Fbest%2Fbest-mac-antivirus-software&psig=AOvVaw3jWr6080uzra18whXj-UO_&ust=1632251394951000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjp5begjvMCFQAAAAAdAAAAABAD'},
];

const Products = () => {
    const classes = useStyles();

    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}
export default Products;