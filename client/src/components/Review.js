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


function Review({review}) {

    const [value, setValue] = React.useState();

  return (
    <>
        <CssBaseline />
        <Container maxWidth="sm">
            <Card sx={{ maxWidth: 818 }}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {review.description}
                    </Typography>
                    <Box sx={{'& > legend': { mt: 2 },}}>
                        <br></br>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        />
                    </Box>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="edit comment">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete comment">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Container>
    </>
  );
}

export default Review;