import React from 'react'

import ClipLoader from "react-spinners/ClipLoader";
const override ={ 
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const loader = ({loading}) => {
  return (
    <>
     <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  )
}

export default loader