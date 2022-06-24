import React, {useState, useEffect} from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";

function ReviewEdit() {

    let {id} = useParams();
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("")
    const [userId, setUserId] = useState("1")
    const [productId, setProductId] = useState("1")
    const [review, setReview] = useState([])

useEffect(() => {
  fetch(`/reviews/${id}`)
  .then(response => response.json())
  .then(review => setReview(() => review))
  .catch(error => console.log(error))
},[])

console.log(review)

function handleEdit() {

    fetch(`/reviews/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: description,
            rating: Number(rating),
            user_id: Number(userId),
            product_id: Number(productId)
        }),
    }).then(() => setReview())
}


    
  return (
    <>
      <br></br>
      <CssBaseline />
      <Container maxWidth="sm">
            <Card sx={{ maxWidth: 818 }}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {review.description}
                    </Typography>
                </CardContent>
            </Card>
        <Card sx={{ maxWidth: 818 }}>
          <form noValidate autoComplete="off" onSubmit={handleEdit}>
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
  )
}

export default ReviewEdit;