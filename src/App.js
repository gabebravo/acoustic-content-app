import React from 'react';
import { useFetch } from './hooks/useFetch';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from 'react-html-parser';

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
          <>
            <img
              width="400"
              src={`${process.env.REACT_APP_DOMAIN_NAME}/api/${process.env.REACT_APP_CONTENT_HUB_ID}${article.mainImage}`}
            />
            <h1>{article.heading}</h1>
            <h3>{article.author}</h3>
            {article.body &&
              article.body.map((section, index) => ReactHtmlParser(section))}
          </>
        )
      )}
    </div>
  );
}

export default App;
