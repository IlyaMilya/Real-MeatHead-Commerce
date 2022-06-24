import * as React from 'react';
//MATERIAL UI IMPORTS
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";


function Review({review, handleDelete}) {
    console.log(review.id)

    const [value, setValue] = React.useState();
    const [reviews, setReviews] = React.useState([])

  return (
    <>
        <CssBaseline />
        <Container maxWidth="sm">
            <Card sx={{ maxWidth: 818 }}>
                <CardContent>
                    <Box sx={{'& > legend': { mt: 2 },}}>
                        <br></br>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                    />
                    <br></br>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {review.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="edit comment">
                        <Link to={`/reviews/${review.id}`}>
                            <EditIcon />
                        </Link>
                    </IconButton>
                    <IconButton aria-label="delete comment" onClick={() => handleDelete(review.id)}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Container>
    </>
  );
}

export default Review;