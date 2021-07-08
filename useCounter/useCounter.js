import { useState } from 'react';
import PropTypes from 'prop-types';

const useCounter = (initialState = 0) => {
      const [counter, setCounter] = useState(initialState);

      if (counter < 0) {
            setCounter(0);
      }

      const increment = (factor = 1) => {
            setCounter(counter + factor);
      };

      const decrement = (factor = 1) => {
            setCounter(counter - factor);
      };

      const reset = () => {
            setCounter(initialState);
      };

      return {
            counter,
            increment,
            decrement,
            reset,
      };
};
useCounter.propTypes = {
      initialState: PropTypes.number,
};
export default useCounter;
