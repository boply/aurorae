<script lang="ts">

  import Counter from "$components/Counter.svelte";

  export let product: any;
  let counter: number = product.QUANTITY;


    // let apiResponse = fetch("http://localhost:8093/api/products/getProducts/"+id).then(res => res.json()).then((data) => {
    // return data;
    // });

    // async function start () {
    //   try {
    //     const response = await fetch("http://localhost:8093/api/products/getProducts/" + item);
    //     const cart = await response.json();
    //     console.log(cart)
    //   } catch (error) {
    //     // Handle any errors that occurred during the request
    //     console.error(error);
    //     throw error;
    //   }
    // }

    // start();
    // console.log(cart)

  async function post() {
    console.log(counter)
  }

  const removeProduct = () => {
    let id = product.ID;

    const options = {
        method: 'POST',
    };
    fetch( 'http://localhost:8093/api/cart/delete/' + id , options )
    .then(response => response.json())
    .then(data => {console.log(data);});

}

</script>

<div class="card bg-base-100 shadow-xl max-h-96 h-fit w-full box">
    <figure class="h-4 w-full"><img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/070116_stemcelltourism_THUMB_LARGE.jpg?w=1155&h=1528" alt="picture" /></figure>
    <div class="card-body gap-4">
      <button class="btn btn-sm btn-circle btn-secondary absolute -right-2 -top-2" on:click={removeProduct}>X</button>
      <h2 id="title" class="card-title">{product.product[0].NAME}</h2>
      <p>{product.product[0].DESCRIPTION}</p>
      <div class="w-fit font-bold text-2xl self-end">${product.product[0].PRICE}</div>
      <div class="card-actions justify-end flex flex-row">
        <Counter bind:number={counter} />
        <!-- <button class="btn btn-primary">Buy Now</button> -->
      </div>
    </div>
  </div>