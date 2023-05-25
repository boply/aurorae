
<script lang="ts">
  import Card from "$components/Product-Card.svelte";
	
  /** @type {import('./$types').PageData} */
  export let data;
  let products = [data.products.products];

</script>


<div class="flex flex-wrap gap-12 min-h-screen w-full py-24 md:px-24 p-8 justify-center md:justify-normal">
  
  
  {#each products as product}
    {#each product as final}
      <Card product={final} />
    {/each}
  {/each}


</div>



  

