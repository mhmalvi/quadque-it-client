import { useState, useEffect } from "react";
import { handleFetchCourseCategories } from "../../Services/company";

const useCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleFetchCourseCategories();
      if (response) {
        setCategory(response);
      }
    })();
  }, []);

  return [category, setCategory];
};

export default useCategory;