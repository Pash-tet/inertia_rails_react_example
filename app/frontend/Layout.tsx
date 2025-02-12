import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function Layout({ children }) {
    const { user } = usePage().props

    return (
        <main>
            <header>
                <Link href="/">ROOT</Link>
                <Link href="/step2">STEP 2</Link>
                |||||||| Current user: {user.name}
            </header>
            <article>{children}</article>
        </main>
    )
}
