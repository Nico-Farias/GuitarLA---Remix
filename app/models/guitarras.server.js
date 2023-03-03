
export async function getGuitarras() {

    const url = `${process.env.API_URL}/guitarras?populate=imagen`
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    return resultado;
}

export async function getGuitarra(url) {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)

    return await respuesta.json()
}