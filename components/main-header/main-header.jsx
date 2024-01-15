import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/main-header/main-header.module.css'

import logoImg from '@/assets/logo.png'
import MainHeaderBackground from './main-header-background.jsx'
import NavLink from './nav-link.jsx'

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image
                        src={logoImg}
                        alt='A plate with food on it'
                        priority
                    />
                    NextLevel Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink 
                            href="/meals"

                            >
                                Browse Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            href="/community"
                            >
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
