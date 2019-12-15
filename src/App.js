import React from 'react';
import { useFetch } from './hooks/useFetch';
import Article from './components/Article';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Error from './components/Error';
import get from 'lodash.get';
import { transformArticleData } from './utils';

export default function App() {
  const { isLoading, error, data } = useFetch(
    `${process.env.REACT_APP_DOMAIN_NAME}/api/${process.env.REACT_APP_CONTENT_HUB_ID}/delivery/v1/content/${process.env.REACT_APP_ARTICLE_ID}`
  );

  return (
    <div>
      {error || (data && data.errors) ? (
        <Error />
      ) : isLoading ? (
        <ProgressBar />
      ) : (
        data && (
          <>
            <Header />
            <Article {...transformArticleData(get(data, 'elements', {}))} />
          </>
        )
      )}
    </div>
  );
}
