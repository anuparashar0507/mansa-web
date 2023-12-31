import React from "react";
import PostJobForm from "~/components/forms/PostJobForm";
const PostJob = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start p-0 md:p-6 gap-4 md:gap-8 bg-white">
      <PostJobForm />
    </div>
  );
};

export default PostJob;
