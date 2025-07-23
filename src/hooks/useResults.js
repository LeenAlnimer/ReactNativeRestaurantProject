import { useEffect, useState } from "react";
import yelp from "../api/yelp";
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });

      if (response.data.businesses.length === 0) {
        setErrorMessage(" Something went wrong");
      } else {
        setErrorMessage("");
      }

      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something  Went Wrong ");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
