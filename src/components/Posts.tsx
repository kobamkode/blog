import { readFile } from "fs/promises";
import { globby } from "globby";
import matter from "gray-matter";
import Link from "next/link";

export default async function Posts() {
        const getMdxFiles = async () => {
                const paths = await globby('**/content/**/*.mdx')

                const files = await Promise.all(
                        paths.map(async (path) => {
                                const f = await readFile(path);
                                return matter(f)
                        })
                )

                return files
        }

        const mdxData = await getMdxFiles()

        return (
                <>
                        <h4>Posts</h4>
                        <ul>
                                {mdxData.map((mdx, index) => (
                                        <li key={index}>
                                                <article>
                                                        <Link href={`/posts/${mdx.data.slug}`}>{mdx.data.title}</Link>
                                                </article>
                                        </li>
                                ))}


                        </ul>
                </>
        );
}
