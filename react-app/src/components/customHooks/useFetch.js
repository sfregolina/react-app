import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that recource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [url]);

  return { data };
};

export default useFetch;
