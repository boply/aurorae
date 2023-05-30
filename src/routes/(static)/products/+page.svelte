<script lang="ts">
  import Card from "$/components/Card-Product.svelte";
	
  /** @type {import('./$types').PageData} */
  export let data: any;
  let products = data.products;

</script>


<div class="flex flex-wrap gap-12 min-h-screen w-full py-24 md:px-24 p-8 justify-center md:justify-normal">
  
  
  {#each products as product}
    <Card product={product} />
  {/each}


</div>



  

