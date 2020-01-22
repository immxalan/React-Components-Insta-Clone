//Complete the necessary code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import Post from "./Post";
// import App from "../../App.js"
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  // const [postData] = useState(props.data);
  // console.log(postData);
  console.log(props);
  //   const postArray= postData.map(element => (
  // [`${element.username}`, `${element.thumbnailUrl}`, `${element.imageUrl}`, `${element.likes}`, `${element.timestamp}`]
  // ))
  // console.log(postArray);
  return (
    <div className="posts-container-wrapper">
      {props.data.map(data => (
				<div className="post-tunnel" key={data.timestamp}>
          <Post post={data} />
				</div>
        ))}
    </div>
  );
};

export default PostsPage;

// key={`${element.username} ${element.thumbnailUrl} ${element.imageUrl} ${element.likes} ${element.timestamp} ${element.comments}`}
// {element.username} - {element.thumbnailUrl} - {element.imageUrl} - {element.likes} - {element.timestamp} - {element.comments}
// prop.data.map((element, index) => {
//   return (
//       <p key={`${element.username}_{anObjectMapped.thumbnailUrl}_{element.imageUrl}_{element.likes}_{element.timestamp}_{element.comments}`}>
//           {element.username} - {element.thumbnailUrl} - {element.imageUrl} - {element.likes} - {element.timestamp} - {element.comments}
//       </p>

  // const postArray= props.data.map(element => (
  // [`${element.username}`, `${element.thumbnailUrl}`, `${element.imageUrl}`, `${element.likes}`, `${element.timestamp}`]
  // ))