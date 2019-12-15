import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  MoreVert as MoreVertIcon
} from '@material-ui/icons';
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '10%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function Article({ author, body, date, heading, mainImage }) {
  const classes = useStyles();

  return (
    <Grid container justify="center" spacing={1}>
      <Grid container item xs={12} md={6} spacing={3}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                AC
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={heading}
            subheader={`${author} ${date &&
              new Date(Date.parse(date)).toLocaleDateString('en-US')}`}
          />
          <CardMedia
            className={classes.media}
            image={mainImage}
            title={heading}
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
          <div>
            <CardContent>
              {body &&
                body.map((section, index) => (
                  <Typography
                    component="div"
                    key={String(Math.random()).slice(2)}
                  >
                    {ReactHtmlParser(section)}
                  </Typography>
                ))}
            </CardContent>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
