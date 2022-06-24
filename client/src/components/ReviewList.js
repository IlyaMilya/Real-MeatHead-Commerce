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
  const [rating, setRating] = useState([])
  const [userId, setUserId] = useState("")
  const [productId, setProductId] = useState("")
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch("/reviews")
  //   .then(response => response.json())
  //   .then(reviews => setReviews(() => reviews))
  //   .catch(error => console.log(error))
  // },[])

//Fetching product.reviews to render
  useEffect(() => {
    fetch(`/products/${id}`)
    .then(response => response.json())
    .then(products => setProducts(() => products))
    .catch(error => console.log(error))
  },[]);

//Mapping thru all reviews in product.reviews to render
  const reviewItems = products.reviews.map((review) => {
    return <Review key={review.id} review={review} />
  })

  function handleAddReview(newReview) {
    setReviews((reviews) => [...reviews, newReview]);
  }
//Form submission to create a new review
  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      description: description,
      rating: Number(rating),
      user_id: Number(userId),
      product_id: Number(productId)
    };
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((review) => {
          setDescription("");
          setRating("");
          setUserId("");
          setProductId("");
          handleAddReview(review);
        });
      }
    })
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