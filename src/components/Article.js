import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '50%',
    marginTop: 100,
    [theme.breakpoints.only('xs')]: {
      maxWidth: '100%'
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: 50
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Article({ author, body, date, heading, mainImage }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            GB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={heading}
        subheader={date}
      />
      <CardMedia className={classes.media} image={mainImage} title={heading} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="right"
          >
            {`By ${author}`}
          </Typography>
        </CardContent>
      </CardActions>
      <div>
        <CardContent>
          {body &&
            body.map((section, index) => (
              <Typography key={index}>{ReactHtmlParser(section)}</Typography>
            ))}
        </CardContent>
      </div>
    </Card>
  );
}
