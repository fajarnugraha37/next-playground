import { PostHelper } from '@/lib/definitions'
import Link from 'next/link';
 
export default function Page() {
  const posts = PostHelper.mocks(10);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <p>{post.description}</p>
            <hr />
            <br />
        </li>
      ))}
    </ul>
  )
}