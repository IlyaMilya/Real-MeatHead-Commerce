import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Review from './Review';
//MATERIAL UI IMPORTS
import AddCommentIcon from '@mui/icons-material/AddComment';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

function ReviewList() {

  let {id} = useParams();
  const [products, setProducts] = useState({reviews: [{description: '', rating: '', user_id: '', product_id:''}]});
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch("/reviews")
  //   .then(response => response.json())
  //   .then(reviews => setReviews(() => reviews))
  //   .catch(error => console.log(error))
  // },[])

//Fetching product.reviews to render
  const getProductReviews = () => {
    fetch(`/products/${id}`)
    .then(response => response.json())
    .then(products => setProducts(() => products))
    .catch(error => console.log(error))
  }
  useEffect(() => {
    getProductReviews();
  },[]);
//Mapping thru all reviews in product.reviews to render
  const reviewItems = products.reviews.map((review) => {
    return <Review key={review.id} review={review} />
  })
//Form submission to create a new review
  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      description
    };
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((r) => {
        r.json().then((review) => {
          setDescription("");
          handleAddReview(review);
        });
      })

    // if (description) {
    //   console.log(description)
    // }
  }
  return (
    <>
      <br></br>
      {reviewItems}
      <CssBaseline />
      <Container maxWidth="sm">
        <Card sx={{ maxWidth: 818 }}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <CardActions disableSpacing>
                <TextField 
                  fullWidth 
                  id="outlined-basic" 
                  label="Post Review..." 
                  variant="outlined" 
                  onChange={(e) => setDescription(e.target.value)}
                />
              <IconButton aria-label="add comment" type="submit">
                <AddCommentIcon />
              </IconButton >
            </CardActions>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default ReviewList;