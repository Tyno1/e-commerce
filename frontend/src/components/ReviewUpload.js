import React, { useState } from "react";
import { toast } from "react-toastify";

const ReviewUpload = ({ refresh, sendReview, user, id }) => {
  const [payload, setPayload] = useState({
    userId: user?.user?._id,
    drugId: id,
    comment: "",
    rating: "",
  });

  const handleChange = (e) => {
    if (e.target.tagName.toLowerCase() === "textarea") {
      setPayload({ ...payload, [e.target.name]: e.target.value });
    } else if (e.target.tagName.toLowerCase() === "select") {
      setPayload({ ...payload, [e.target.name]: parseInt(e.target.value, 10) });
    }
  };

  const handlePostReview = (e) => {
    e.preventDefault();

    if (payload.rating === 0) {
      toast("Please rate the game", { hideProgressBar: true });
      return;
    }
    if (payload.comment.trim().length === 0) {
      toast("Please enter a comment", { hideProgressBar: true });
      return;
    }

    if (payload) {
      sendReview(payload)
        .then((res) => {
          console.log(res.data);
          refresh();
        })
        .catch((error) => {
          toast.error(error.message, { hideProgressBar: true });
          console.error(error);
        });
    }
  };
  return (
    <div className="add-review pt-8 w-full border-t border-teal-700">
      <form
        className="w-full items-center mx-auto flex flex-col gap-8"
        onSubmit={handlePostReview}
      >
        <div className="rating w-full flex flex-col gap-4">
          <label className="text-stone-100 text-2xl"> Comment</label>
          <textarea
            onChange={handleChange}
            className="w-full p-4 rounded-xl min-h-40 text-teal-950"
            type="text"
            name="comment"
            value={payload.comment}
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end w-full gap-4">
          <div className="rating w-full flex flex-col gap-4">
            <label className="text-stone-100 text-2xl">Rating</label>
            <select
              onChange={handleChange}
              value={payload.rating}
              className="w-full p-4 rounded-xl text-teal-950"
              name="rating"
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          <button className="mt-4 bg-amber-500 h-14 w-60 rounded-lg text-sm ">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewUpload;
