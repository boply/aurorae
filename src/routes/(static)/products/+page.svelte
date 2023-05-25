
<script lang="ts">
  import Card from "../../../components/product-card.svelte";
	
  /** @type {import('./$types').PageData} */
  export let data;
  let products = [data.products.products];

  for (let i = 0; i < products.length; i++){
    console.log(products[i]);
  }

	let infos = [
		{ title: 'Stem Cells', description: 'Nurture the Mind', thumbnail: 'https://i0.wp.com/vitalrecord.tamhsc.edu/wp-content/uploads/2016/05/stem-pixabay.jpg?fit=1100%2C625&ssl=1' },
		{ title: 'Wack Cells', description: 'No Touch!', thumbnail: 'https://i0.wp.com/vitalrecord.tamhsc.edu/wp-content/uploads/2016/05/stem-pixabay.jpg?fit=1100%2C625&ssl=1' },
		{ title: 'Yum Cells', description: 'Food for the stomach', thumbnail: 'https://i0.wp.com/vitalrecord.tamhsc.edu/wp-content/uploads/2016/05/stem-pixabay.jpg?fit=1100%2C625&ssl=1' }
	];

  for (let i = 0; i < infos.length; i++){
    console.log(infos);
  }

</script>


<div class="flex flex-wrap gap-12 min-h-screen w-full py-24 md:px-24 p-8 justify-center md:justify-normal">
  
  
  {#each products as product}
    {#each product as final}
      <Card product={final} />
    {/each}
  {/each}


</div>



  

