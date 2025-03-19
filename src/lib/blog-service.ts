import { client } from '@/lib/microcms';
import { IBlog } from '@/interfaces/i-blog';
import { ITag } from '@/interfaces/i-tag';

/**
 * APIを叩いてブログデータの全てを取得する
 * MicroCMSのAPIは1回のリクエストで取得できるデータが最大100件までなので、
 * 100件以上のデータを取得する場合はoffsetを指定して複数回リクエストを送る必要がある
 * @returns
 */
export const getBlogData = async (): Promise<IBlog[]> => {
    let allBlogs: IBlog[] = [];
    let offset = 0;
    const limit = 100; // 1回のリクエストで取得する最大件数

    while (true) {
        const data = await client.get({
            endpoint: process.env.MICRO_CMS_ENDPOINT_BLOG as string,
            queries: { limit, offset },
        });

        // データを結合
        allBlogs = allBlogs.concat(data.contents || []);

        // 取得件数がlimit未満の場合、すべてのデータを取得完了
        if (data.contents.length < limit) {
            break;
        }

        // 次のページのデータを取得するためにoffsetを更新
        offset += limit;
    }

    return allBlogs;
};

/**
 * APIを叩いてタグデータの全てを取得する
 * MicroCMSのAPIは1回のリクエストで取得できるデータが最大100件までなので、
 * 100件以上のデータを取得する場合はoffsetを指定して複数回リクエストを送る必要がある
 */
export const getTagData = async (): Promise<ITag[]> => {
    let allTags: ITag[] = [];
    let offset = 0;
    const limit = 100; // 1回のリクエストで取得する最大件数

    while (true) {
        const data = await client.get({
            endpoint: process.env.MICRO_CMS_ENDPOINT_TAG as string,
            queries: { limit, offset },
        });

        // データを結合
        allTags = allTags.concat(data.contents || []);

        // 取得件数がlimit未満の場合、すべてのデータを取得完了
        if (data.contents.length < limit) {
            break;
        }

        // 次のページのデータを取得するためにoffsetを更新
        offset += limit;
    }

    return allTags;
};
