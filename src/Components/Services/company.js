import axios from "axios";

export const handleFetchCourseCategories = async () => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/course-category`
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const handleDeleteCourseCategory = async (id) => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/delete-category/${id}`
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};