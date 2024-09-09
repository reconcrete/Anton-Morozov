"use client";

import { BlogPost } from "@widgets/blogPost";

export default function Projects() {
  return (
    <main className="flex h-full flex-col gap-8 overflow-y-auto pt-16">
      <BlogPost
        title="The way this website is built"
        description="A dive into the tools and techniques used to build this website."
        date="2022-01-01"
        href="/blog/the-way-this-website-is-built"
      />
    </main>
  );
}
