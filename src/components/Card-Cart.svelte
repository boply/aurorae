<script lang="ts">

    import Counter from "$components/Counter.svelte";

    export let product: any;
    export let item: any;
    let counter: number = 1;


    // let apiResponse = fetch("http://localhost:8093/api/products/getProducts/"+item).then(res => res.json()).then((data) => {
    // return data;
    // });

    async function getApiResponse(n) {
      try {
        const response = await fetch("http://localhost:8093/api/products/getProducts/" + n);
        const data = await response.json();
        return data;
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error(error);
        throw error;
      }
    }

    // Call the async function
    getApiResponse(item)
      .then(data => {
        // Handle the response data here
        console.log(data);
        console.log(data["data"][0])
        document.getElementById("title").innerText = data["data"][0]["NAME"]
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });



    async function post() {
      console.log(counter)
    }

</script>

<div class="card bg-base-100 shadow-xl max-h-96 h-fit w-full box">
    <figure class="h-4 w-full"><img src={product.THUMBNAIL} alt="picture" /></figure>
    <div class="card-body">
      <button class="btn btn-sm btn-circle btn-secondary absolute -right-2 -top-2">X</button>
      <h2 id="title" class="card-title">{product.ITEM}</h2>
      <p>{product.DESCRIPTION}</p>
      <div class="card-actions justify-end flex flex-row">
        <Counter/>
        <!-- <button class="btn btn-primary">Buy Now</button> -->
      </div>
    </div>
  </div>