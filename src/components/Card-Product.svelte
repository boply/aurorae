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


  document.getElementById("prodName").value = "";
  document.getElementById("prodDescrip").value = "";
  document.getElementById("prodPrice").value = "";


}





</script>

<div class="card bg-base-100 shadow-xl max-h-96 w-96 box">
    <figure class="h-1/2"><img src={product.THUMBNAIL} alt="picture" /></figure> 
    <div class="card-body">
      <h2 style="text-transform:uppercase;" class="card-title">{product.NAME}</h2>
      <p>{product.DESCRIPTION}</p>
      <p id="id">{product.ID}</p>
      <div class="card-actions justify-end flex flex-row">
        <Counter bind:number={counter}/>
        <button class="btn btn-primary" on:click={addProduct}>Add to Cart</button>
      </div>
    </div>
  </div>