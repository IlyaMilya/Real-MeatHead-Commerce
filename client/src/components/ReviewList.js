import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Review from './Review';
//MATERIAL UI IMPORTS
import AddCommentIcon from '@mui/icons-material/AddComment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
// import ReviewEdit from './ReviewEdit';

function ReviewList() {

let {id} = useParams();

const [products, setProducts] = useState({reviews: [{description: '', rating: '', user_id: '', product_id:''}]});
const [description, setDescription] = useState("");
const [rating, setRating] = useState("")
const [userId, setUserId] = useState("1")
const [productId, setProductId] = useState("1")
const [reviews, setReviews] = useState([])
// const [description, setDescription] = useState({reviews: [{description:""}]});
// const [rating, setRating] = useState({reviews: [{rating:""}]})
// const [userId, setUserId] = useState({reviews: [{user_id:""}]})
// const [productId, setProductId] = useState({reviews: [{product_id:""}]})
// const [reviews, setReviews] = useState({reviews: ""})


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
  .then(products => {
    setProducts(products)
    setReviews(products.reviews)
  })
  .catch(error => console.log(error))
},[]);

//function to edit product.reviews to render
// function 

//function to delete reviews
function handleDelete(id){
  setReviews((reviews) => 
  reviews.filter((review)=> review.id !== id)
  )
    fetch(`/reviews/${id}`, {
      method: "DELETE",
        })

}

//Mapping thru all reviews in product.reviews to render
const reviewItems = reviews.map((review) => {
  return <Review key={review.id} review={review} handleDelete={handleDelete}/>
})

//Form submission to create a new review
function handleSubmit(e) {
  e.preventDefault()
  fetch("/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: description,
      rating: rating,
      user_id: userId,
      product_id: productId
    }),
  })
  .then((r) => {
      r.json().then((newReview) => {
        setReviews((reviews) => [...reviews, newReview]);

      });
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