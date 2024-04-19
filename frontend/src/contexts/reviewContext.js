import axios from "axios";
import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState(null);
  const [postResp, setPostResp] = useState(null);
  const { user } = useContext(AuthContext);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const refresh = () => setShouldRefresh(!shouldRefresh);

  const sendReview = ({ drugId, comment, rating }) => {
    setLoading(true)
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/reviews", {
          userId: user.user._id,
          drugId,
          comment,
          rating,
        })
        .then((res) => {
          resolve(res);
          setLoading(false)
          setPostResp(res.data);
        })
        .catch((err) => {
          reject(err);
          setLoading(false)
          setError(err)
        });
    });
  };


  const deleteReview = (reviewId) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`http://localhost:3000/reviews/${reviewId}`)
        .then((res) => {
          resolve(res);
          // Optionally update the reviews state to reflect the deletion
          setReviews(reviews.filter((review) => review._id !== reviewId));
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return (
    <ReviewContext.Provider
      value={{ sendReview, deleteReview, refresh, loading, error }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
