import React from 'react';
import { useFetch } from './hooks/useFetch';

function App() {
  const { isLoading, error, article } = useFetch(
    `${process.env.REACT_APP_DOMAIN_NAME}/api/${process.env.REACT_APP_CONTENT_HUB_ID}/delivery/v1/content/${process.env.REACT_APP_ARTICLE_ID}`
  );
  console.log('article', article);

  return (
    <div className="App">
      {error ? (
        <p>Whoops! Something went wrong</p>
      ) : isLoading ? (
        <p>...Loading</p>
      ) : (
        article && (
          <div>Article</div>
          // <>
          //   <h1>{article.title}</h1>
          //   <p>{article.body}</p>
          // </>
        )
      )}
    </div>
  );
}

export default App;
