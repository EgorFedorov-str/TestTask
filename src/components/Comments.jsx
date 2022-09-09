
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { useSelector } from 'react-redux';


export default function FixedBottomNavigation({postId}) {
  const ref = React.useRef(null);

  const comments = useSelector(state => state.comment.comments.filter(comment => comment.postId === postId))
  
  return (
    <>
    <h3>Comments</h3>
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {comments.map(({ name, body, email }, index) => (
          <ListItem button key={index + email}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={email} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={body} />
          </ListItem>
        ))}
      </List>
      
    </Box>
    </>
  );
}

