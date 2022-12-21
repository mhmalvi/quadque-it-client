import axios from "axios";

export const handleFetchCourseCategories = async () => {
  try {
    const result = await axios.get(
      `http://127.0.0.1:8000/api/course-category`
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};