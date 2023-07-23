import React, { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setTimeout(() => {
        setData(response.data.results);
      }, 500);
    });
  }, []);

  return [data];
};

export { UseFetch };
