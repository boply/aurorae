/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    const res = await fetch(`http://localhost:8093/api/cart/getCart/`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        // cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "include", // include, *same-origin, omit
        headers: {
            'Accept': 'application/json',
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',

    },
  });
    const products: any[] = (await res.json())["data"]; // Assuming 'products' is an array of any type

    return {products};
}