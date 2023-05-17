<script lang="ts">

    export let title: string;
    export let description: string;
    export let image: string;

</script>

<div class="card bg-base-100 shadow-xl max-h-96 w-96">
    <figure class="h-1/2"><img src={image} alt="picture" /></figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>{description}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>