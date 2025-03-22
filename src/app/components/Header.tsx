'use client';
import { Button, Avatar } from '@mui/material';
import Search from '@mui/icons-material/Search';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="text-center pt-4 pb-4 mx-8 lg:mx-auto max-w-screen-lg">
            <div className="flex justify-between items-center">
                <div className={styles['empty-div']}></div>
                <Link className={styles.title} href="/">Nag&apos;s Blog</Link>
                <div className="flex justify-end gap-4 flex-1">
                    <Button variant="text" size="small">
                        <Search className="h-4 w-4" />
                    </Button>
                    <Link href="/tags">
                        <Button variant="text">Tags</Button>
                    </Link>
                    <Link href="/profile">
                        <Avatar>
                            <Image src="/file.svg" alt="Avatar" width={16} height={16} className={styles.avatar} />
                        </Avatar>
                    </Link>
                </div>
            </div>
            <p className="text-sm text-muted-foreground">KEEP ON GROWING</p>
        </header>
    );
}
