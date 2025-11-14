import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";
import Button from "@/components/common/Button";

const samplePosts = [
  {
    title: "How to style with Tailwind",
    body: "A short guide on utility-first CSS.",
  },
  {
    title: "Building components",
    body: "Break UI into small reusable pieces.",
  },
  { title: "Optimizing images", body: "Use next/image for best results." },
];

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Posts</h1>
          <Button
            title="New Post"
            onClick={() => alert("Open modal: Add Post")}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {samplePosts.map((p, idx) => (
            <PostCard key={idx} title={p.title} body={p.body} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
