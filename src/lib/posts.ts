import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// postsフォルダのパスを取得
const postsDirectory = path.join(process.cwd(), 'src/posts/');

// 再帰的にファイルを取得する関数
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
        } else {
            arrayOfFiles.push(filePath);
        }
    });

    return arrayOfFiles;
}

// すべての投稿データを取得
export function getSortedPostsData() {
    const filePaths = getAllFiles(postsDirectory);
    const allPostsData: { slug: string; date: string; description: string; title: string; category: string }[] = filePaths.map(
        (filePath) => {
            // 拡張子を削除し、相対パスをスラッグに変換。さらに、ファイル名のみにする
            const slug = path.relative(postsDirectory, filePath).replace(/\.md$/, '').split('/').pop();
            const fileContents = fs.readFileSync(filePath, 'utf8');

            const matterResult = matter(fileContents);

            return {
                slug,
                ...matterResult.data,
            } as any; // TODO: anyを外す
        }
    );

    // 日付でソート
    return allPostsData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

// 特定の投稿データを取得
export async function getPostData(slug: string, category: string) {
    const fullPath = path.join(postsDirectory, `${category}/${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    };
}
