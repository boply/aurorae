<script lang="ts">

    import Counter from "$components/Counter.svelte";

    export let product: any;
    let counter: number = 1;

    async function post() {
      console.log(counter)
    }

</script>

<div class="card bg-base-100 shadow-xl max-h-96 w-96 box">
    <figure class="h-1/2"><img src={product.thumbnail} alt="picture" /></figure> -->
    <div class="card-body">
      <h2 class="card-title">{product.name}</h2>
      <p>{product.description}</p>
      <div class="card-actions justify-end flex flex-row">
        <Counter bind:number={counter}/>
        <button class="btn btn-primary" on:click={post}>Add to Cart</button>
      </div>
    </div>
    <h2>{product.NAME}</h2> 
  </div>