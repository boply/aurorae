<script lang="ts">

    import Counter from "$components/Counter.svelte";
    import { onMount } from 'svelte';

    export let product: any;
    let counter: number = 1;


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

</script>

<div class="card bg-base-100 shadow-xl max-h-96 h-fit w-full box">
    <figure class="h-4 w-full"><img src={product.THUMBNAIL} alt="picture" /></figure>
    <div class="card-body">
      <button class="btn btn-sm btn-circle btn-secondary absolute -right-2 -top-2">X</button>
      <h2 id="title" class="card-title">Item Number: {product.ITEM}</h2>
      <p>{product.DESCRIPTION}</p>
      <div class="card-actions justify-end flex flex-row">
        <Counter/>
        <!-- <button class="btn btn-primary">Buy Now</button> -->
      </div>
    </div>
  </div>