import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
      const isMounted = useRef(true);

      const [state, setState] = useState({
            data: null,
            loading: true,
            error: null,
      });

      useEffect(() => {
            return () => {
                  isMounted.current = false;
            };
      }, []);

      useEffect(() => {
            setState({
                  data: null,
                  loading: true,
                  error: null,
            });

            fetch(url)
                  .then((resp) => resp.json())
                  .then((data) => {
                        if (isMounted.current) {
                              if (data.length === 0)
                                    data.push({
                                          quote: 'No se encuentra el id',
                                    });
                              setState({
                                    data,
                                    loading: false,
                                    error: null,
                              });
                        }
                  })
                  .catch((error) =>
                        setState({
                              loading: false,
                              error: 'error',
                              data: null,
                        })
                  );
      }, [url]);
      return state;
};
