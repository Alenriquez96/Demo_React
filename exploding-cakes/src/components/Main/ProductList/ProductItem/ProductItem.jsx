import React, { Component } from 'react'
import "./ProductItem.css"
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

export class ProductItem extends Component {
  //rconst
  constructor(props) {
    super(props)
  
    this.state = {
       company: this.props.data.company ||   "Cat Cake SA"
    }
  }
  render() {
    //Destructuring
    const {name,price,img}=this.props.data

    return (
      <section>
          <Card sx={{ width: 250, margin:1 }}>
            <CardMedia component="img" height="140" image={img}alt="cake"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio:{price}€
            </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={this.props.remove}>Borrar</Button>
              <Button size="small">❤</Button>
            </CardActions>
          </Card>  
      </section>
      // <div>
      //     <h4>Tarta de {name}</h4>
      //     <p>Precio:{price}$</p>
      //     <p>Companía: {this.state.company}</p>
      //     <img className='cake' src={img} alt="tarta" /><br />
      //     <button onClick={this.props.remove}>Borrar una tarta</button>
      // </div>
    )
  }
}

export default ProductItem
