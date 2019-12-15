import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useFetch } from './hooks/useFetch';
import Article from './components/Article';
import Header from './components/Header';
import get from 'lodash.get';
import { transformArticleData } from './utils';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function App() {
  const classes = useStyles();
  const { isLoading, error, data } = useFetch(
    `${process.env.REACT_APP_DOMAIN_NAME}/api/${process.env.REACT_APP_CONTENT_HUB_ID}/delivery/v1/content/${process.env.REACT_APP_ARTICLE_ID}`
  );

  return (
    <div>
      {error ? (
        <p>Whoops! Something went wrong</p>
      ) : isLoading ? (
        <p>...Loading</p>
      ) : (
        data && (
          <>
            <Header />
            <div className={classes.root}>
              <Article {...transformArticleData(get(data, 'elements', {}))} />
            </div>
          </>
        )
      )}
    </div>
  );
}
