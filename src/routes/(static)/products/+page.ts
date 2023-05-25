/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch(`https://dummyjson.com/products`);
    const products = await res.json();

    return { products };
}