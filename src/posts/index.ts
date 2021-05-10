import { promises as fs } from "fs";
import { join } from "path";
import matter from "gray-matter";
import type { Post, PostFragment, PostMeta } from "~/types";

const postDirectory = join(process.cwd(), "posts");

export const getPosts = async () => {
	const files = await fs.readdir(postDirectory);
	const metadata: PostFragment[] = await Promise.all(
		files
			.filter((file) => file.endsWith(".md"))
			.map(async (file) => {
				const raw = await fs.readFile(join(postDirectory, file));
				const matterInner = matter(raw.toString());

				return {
					id: file.replace(/\.md$/, ""),
					...(matterInner.data as PostMeta)
				};
			})
	);

	return metadata.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
};

export const getSinglePost = async (id: string) => {
	const raw = await fs.readFile(join(postDirectory, `${id}.md`));
	const matterInner = matter(raw.toString());

	return {
		id,
		...(matterInner.data as PostMeta),
		innerMD: matterInner.content
	} as Post;
};

export const getAllPosts = async () => {
	const files = await fs.readdir(postDirectory);

	return files
		.filter((file) => file.endsWith(".md"))
		.map((fileName) => ({
			params: {
				post: fileName.replace(/\.md$/, "")
			}
		}));
};
