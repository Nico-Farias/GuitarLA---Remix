import { getGuitarras } from '~/models/guitarras.server';
import { getPosts } from '~/models/post.server';
import { getCurso } from '~/models/curso.server'
import { useLoaderData } from '@remix-run/react';
import ListadoPosts from '~/components/listado-posts';
import ListadoGuitarras from '~/components/listado-guitarras';
import Curso from '~/components/curso';
import stylesGuitarras from '~/styles/guitarra.css'
import stylesCurso from '~/styles/curso.css'
import stylesBlog from '~/styles/blog.css'


export function meta() {

}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitarras
        },
        {
            rel: 'stylesheet',
            href: stylesBlog
        },
        {
            rel: 'stylesheet',
            href: stylesCurso
        }
    ]
}

export async function loader() {

    const [guitarras, posts, curso] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCurso()
    ])

    return {
        guitarras: guitarras.data,
        posts: posts.data,
        curso: curso.data
    }

}


function Index() {

    const { guitarras, posts, curso } = useLoaderData();


    return (
        <div>

            <main className='contenedor'>

                <ListadoGuitarras guitarras={guitarras} />
            </main>

            <Curso curso={curso.attributes} />

            <section className=' contenedor'>

                <ListadoPosts posts={posts} />

            </section>

        </div>
    )
}

export default Index