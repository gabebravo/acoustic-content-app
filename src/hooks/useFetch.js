import React from 'react';

export function useFetch(url) {
  // loading, error & data state
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // declaration for async function
    async function fetchData() {
      try {
        // attempt fetch
        const response = await window.fetch(url);
        const data = await response.json();
        setData(data); // set data
      } catch (error) {
        setError(error); // set error
      } finally {
        // runs last only under try/pass condiiton >> resets loading
        setIsLoading(false);
      }
    }

    // set the loading flag & make api call
    setIsLoading(true);
    fetchData();
  }, [url]); // only re-render on url change

  return { isLoading, error, data }; // return state as obj
}
