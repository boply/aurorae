<script lang="ts">

    import Counter from "$components/Counter.svelte";

    export let product: any;
    let counter: number = 1;

const addProduct = () => {
  let id = product.ID;
  console.log(product.ID);
  var user = "dummy"
  var quantity = counter;
  var uid = 3531;

  const options = {
      method: 'POST',
  };
  fetch( 'http://localhost:8093/api/cart/addItem/' + id + "/" + user + "/" + quantity + "/"+uid , options )
  .then(response => response.json())
  .then(data => {console.log(data);});

}

</script>

<div class="card bg-base-100 shadow-xl h-fit w-96 box">
    <figure class="h-32"><img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/070116_stemcelltourism_THUMB_LARGE.jpg?w=1155&h=1528" alt="picture" /></figure> 
    <div class="card-body gap-4">
      <h2 class="card-title">{product.NAME}</h2>
      <p>{product.DESCRIPTION}</p>
      <div class="w-fit font-bold text-2xl self-end">${product.PRICE}</div>
      <div class="card-actions justify-end gap-6 flex flex-row">
        <Counter bind:number={counter}/>
        <button class="btn btn-primary" on:click={addProduct}>Add to Cart</button>
      </div>
    </div>
  </div>