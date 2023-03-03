import imagen from "../../public/img/nosotros.jpg"
import styles from "../styles/nosotros.css"


export function meta() {
    return {
        title: 'GuitarLA - Sobre Nosotros',
        descriptio: 'Venta de guitarras, blog de musica'
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
    return (

        <main className="contenedor nosotros">

            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="" />

                <div>
                    <p>Ut tincidunt velit eu placerat viverra. Proin quis finibus est. Maecenas sagittis orci sed mi euismod pretium. Nunc fringilla rhoncus diam quis euismod. In vel mauris et velit scelerisque lacinia ut eu nulla. Aliquam faucibus venenatis fermentum. Vivamus eget justo vulputate, ultricies dolor id, convallis ex. Proin varius lobortis quam at ullamcorper. Praesent id rutrum tortor.

                    </p>
                    <p>  Curabitur imperdiet et velit vitae euismod. Vivamus in tortor sed dolor auctor posuere. Aliquam posuere efficitur ipsum, ut viverra magna convallis a. Pellentesque varius, risus a interdum dictum, nunc leo semper ligula, ut luctus ex nulla ut ex. Suspendisse viverra eget tellus non posuere. Nam dapibus dolor sed finibus posuere. Maecenas mattis at justo sed interdum. Integer facilisis felis ipsum, eu fringilla nunc imperdiet sed. Sed at sem et nibh tempor eleifend vitae id felis. Curabitur efficitur tortor et lacus tristique lobortis. Proin eu tincidunt nibh. Etiam ultricies augue neque, sed sollicitudin diam sollicitudin in.</p>
                </div>

            </div>

        </main>
    )
}

export default Nosotros