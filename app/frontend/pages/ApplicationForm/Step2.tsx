import { useState } from 'react'
import {router, usePage, useForm} from '@inertiajs/react'
import Layout from "../../Layout.tsx";

export default function Step2() {
    const { user } = usePage().props

    const { data, setData, post, processing, errors } = useForm({
        amount: 0,
        subject: '',
    })

    const [values, setValues] = useState({
        amount: 0,
        subject: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        const resp = router.post('/create_app', values)
        console.log(resp)
    }

    function change() {

    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount">Сумма:</label>
                <input id="amount"/>

                <label htmlFor="subject">Предмет лизинга:</label>
                <input id="subject"/>

                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
}
