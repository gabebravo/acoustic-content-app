import React from 'react';
import get from 'lodash.get';
import { transformApiData } from '../utils';

export function useFetch(url) {
  // loading, error & data state
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [article, setArticle] = React.useState(null);

  React.useEffect(() => {
    // declaration for async function
    async function fetchArticle() {
      try {
        // attempt fetch
        const response = await window.fetch(url);
        const data = await response.json();
        const article = get(data, 'elements', {});
        setArticle(transformApiData(article)); // set data
      } catch (error) {
        setError(error); // set error
      } finally {
        // runs last only under try/pass condiiton >> resets loading
        setIsLoading(false);
      }
    }

    // set the loading flag & make api call
    setIsLoading(true);
    fetchArticle();
  }, [url]); // only re-render on url change

  return { isLoading, error, article }; // return state as obj
}
