import Layout from '../../Layout'
import { Head } from '@inertiajs/react'

export default function Step1(props) {
    return (
        <Layout>
            <Head title="Welcome" />
            <h1>Welcome</h1>
            <p>Hello {props.test}, welcome to your first Inertia app!</p>
        </Layout>
    )
}
