
<script lang="ts">
  import Card from "../../../components/Product-Card.svelte";
	import { onMount } from 'svelte';
	let data;
  let products: any;
  let title: any;
  let description: any;
  let thumbnail: any;
	onMount(async () => {
		data = await fetch('https://dummyjson.com/products').then((x) => x.json());
    products = data.products;
    for (let i = 0; i < 5; i++){
      console.log(products.length);
      title = products[i].title;
      description = products[i].description;
      thumbnail = products[i].thumbnail;
      document.getElementById("content").innerHTML += "hi";
    }
	});

	let infos = [
		{ title: 'Stem Cells', description: 'Nurture the Mind', thumbnail: 'https://i0.wp.com/vitalrecord.tamhsc.edu/wp-content/uploads/2016/05/stem-pixabay.jpg?fit=1100%2C625&ssl=1' },
		{ title: 'Wack Cells', description: 'No Touch!', thumbnail: 'https://i0.wp.com/vitalrecord.tamhsc.edu/wp-content/uploads/2016/05/stem-pixabay.jpg?fit=1100%2C625&ssl=1' },
		{ title: 'Yum Cells', description: 'Food for the stomach', thumbnail: 'https://i0.wp.com/vitalrecord.tamhsc.edu/wp-content/uploads/2016/05/stem-pixabay.jpg?fit=1100%2C625&ssl=1' }
	];

</script>


<div class="flex flex-wrap gap-10 min-h-screen w-full px-8 py-24 justify-center md:justify-normal">
  
  
  
  <div id="content">
    hi
  </div>
  <Card title={title} description={description} image={thumbnail} />
  
  {#each infos as info}
  <Card title={info.title} description={info.description} image={info.thumbnail} />
  {/each}
</div>



  

