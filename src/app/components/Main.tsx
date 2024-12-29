'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Items } from '@/storage/items';

export default function Main() {
    return (
        <main className="p-4 bg-gray-100 min-h-screen">
            {/* 上部メッセージ */}
            <div className="mb-8 bg-white p-6 shadow-md">
                <h2 className="text-xl font-bold mb-2">日々のインプットをアウトプットします。毎日コミット実践中!</h2>
                <p className="text-sm text-gray-600">ドキュメントのメモ・技術書レビュー・ナレッジを書き溜めます。</p>

                {/* SNSボタン的なもの */}
                <div className="mt-4 flex space-x-2">
                    <a
                        href="https://github.com/nag-ryo"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="bg-gray-800 text-white px-3 py-2 rounded transition-colors duration-300 hover:bg-gray-500 flex items-center">
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="mr-2"
                            />
                            GitHub
                        </button>
                    </a>
                </div>
            </div>

            {/* アイテム一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Items.map((item, index) => (
                    <Link
                        href={item.link}
                        key={index}>
                        <div
                            className="
                                flex
                                items-center
                                bg-white
                                p-4
                                shadow-md
                                rounded
                                transition-colors
                                duration-300
                                hover:bg-gray-200
                                hover:animate-pulse-fast
                        ">
                            <div className="w-16 h-16 mr-4 relative">
                                <Image
                                    src={item.imgSrc}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
