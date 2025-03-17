import Link from "next/link";

export default function Home() {
        const posts = [
                {
                        id: 1,
                        title: 'Use PicoCss in NextJs',
                        uri: '/posts/use-picocss-in-nextjs'
                },
        ]
        return (
                <>
                        <h4>Posts</h4>
                        <ul>
                                {posts.map((post) => (
                                        <li key={post.id}>
                                                <Link href={post.uri}>{post.title}</Link>
                                        </li>
                                ))}
                        </ul>
                </>
        );
}
