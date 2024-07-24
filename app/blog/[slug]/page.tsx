import { getAllPostSlugs, getPostData } from "../../../lib/posts";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    params: { slug: slug.slug }, // Ensure 'slug' is properly accessed
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postData = await getPostData(params.slug);
  return (
    <article className="prose lg:prose-xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-8">{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
