<script lang="ts">

    import Counter from "$components/Counter.svelte";

    export let product: any;
    let counter: number = 1;

    async function post(id) {
      let url = "http://localhost:8093/api/cart/addItem/" + id+"/user/" + counter + "/135" 
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then((response) => response.json())
      .then((json) => console.log(json));

    }

</script>

<div class="card bg-base-100 shadow-xl max-h-96 w-96 box">
    <figure class="h-1/2"><img src={product.THUMBNAIL} alt="picture" /></figure> 
    <div class="card-body">
      <h2 style="text-transform:uppercase;" class="card-title">{product.NAME}</h2>
      <p>{product.DESCRIPTION}</p>
      <div class="card-actions justify-end flex flex-row">
        <Counter bind:number={counter}/>
        <button class="btn btn-primary" on:click={post(product.ID)}>Add to Cart</button>
      </div>
    </div>
  </div>