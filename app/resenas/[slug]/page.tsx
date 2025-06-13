import Header from "@/app/Components/Header";
import React from "react";
import CommentList from "./Components/CommentList";

function page() {
  return (
    <div>
      <Header />
      <CommentList></CommentList>
    </div>
  );
}

export default page;
