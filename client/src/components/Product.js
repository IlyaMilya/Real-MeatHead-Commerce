import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Product({id, category, name, price, image, company}) {

  // const [isInStock, setIsInStock] = useState(true)

  // function handleStock () {
  //   setIsInStock(!isInStock)
  // }

  // function handleDelete () {
  //   fetch(`http://localhost:6001/plants/${id}`, {
  //     method: 'DELETE',
  //   })
  //   .then(response => response.json())
  //   .then(() => onDelete(id))
  // }

  return (
   
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name}/>
      <CardMedia
        component= "img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;



