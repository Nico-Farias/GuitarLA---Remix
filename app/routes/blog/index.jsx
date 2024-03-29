
import { getPosts } from "~/models/post.server"
import { useLoaderData } from '@remix-run/react';
import ListadoPosts from "~/components/listado-posts";

export function meta() {
    return {
        title: 'GuitarLA - Nuestro Blog',
        descripcion: ' GuitarLA , Blog de musica y venta de guitarras'
    }
}

export async function loader() {
    const posts = await getPosts()

    return posts.data
}


function Blog() {

    const posts = useLoaderData()

    return (

        <ListadoPosts posts={posts} />

    )
}

export default Blog