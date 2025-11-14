import { PostCardProps } from "@/interfaces";

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <article className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {body && <p className="text-sm text-gray-600">{body}</p>}
    </article>
  );
};

export default PostCard;
