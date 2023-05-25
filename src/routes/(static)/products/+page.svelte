
<script lang="ts">
  import Card from "../../../components/product-card.svelte";
	import { onMount } from 'svelte';
  let title: string;
  let description: string;
  let thumbnail: string;
	
  /** @type {import('./$types').PageData} */
  export let data;
  let products = [data.products];
  for (let i = 0; i < products.length; i++){
    console.log(products[i]);
  }

	let infos = [
		{ title: 'Stem Cells', description: 'Nurture the Mind', thumbnail: 'https://i0.wp.com/vitalrecord.tamhsc.edu/wp-content/uploads/2016/05/stem-pixabay.jpg?fit=1100%2C625&ssl=1' },
		{ title: 'Wack Cells', description: 'No Touch!', thumbnail: 'https://i0.wp.com/vitalrecord.tamhsc.edu/wp-content/uploads/2016/05/stem-pixabay.jpg?fit=1100%2C625&ssl=1' },
		{ title: 'Yum Cells', description: 'Food for the stomach', thumbnail: 'https://i0.wp.com/vitalrecord.tamhsc.edu/wp-content/uploads/2016/05/stem-pixabay.jpg?fit=1100%2C625&ssl=1' }
	];

</script>


<div class="flex flex-wrap gap-12 min-h-screen w-full py-24 md:px-24 p-8 justify-center md:justify-normal">

  
  
  <div id="content">
  </div>
  
  
  {#each products as product}
  <Card title={product.title} description={product.description} image={product.thumbnail} />
  {/each}
</div>



  

