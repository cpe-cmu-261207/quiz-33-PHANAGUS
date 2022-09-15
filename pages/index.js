import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          imgsrc="/profileImages/profilecat.jpg"
          name="Phanarin Kiatsirithaworn 640610661"
          status="Quiz ยากจังเลยครับ ของ่าย ๆ กว่านี้ได้ไหม #261207"
          likes="99"
        />

        {comments.map((x) => (
          <Comment
            imgsrc={x.userImagePath}
            name={x.username}
            comment={x.commentText}
            likes={x.likeNum}
            reply={x.replies}
          />
        ))}
      </div>
    </div>
  );
}
