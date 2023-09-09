'use client'
import {Audio} from 'react-loader-spinner'
const loading = () => {
  return (
 
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        
      /> 
  );
};

export default loading;
