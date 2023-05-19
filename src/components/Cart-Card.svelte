<script lang="ts">

    import Counter from "./Counter.svelte";

    export let title: string;
    export let description: string;
    export let image: string;

</script>

<div class="card bg-base-100 shadow-xl max-h-96 h-fit w-full box">
    <figure class="h-4 w-full"><img src={image} alt="picture" /></figure>
    <div class="card-body">
      <button class="btn btn-sm btn-circle btn-secondary absolute -right-2 -top-2">X</button>
      <h2 class="card-title">{title}</h2>
      <p>{description}</p>
      <div class="card-actions justify-end flex flex-row">
        <Counter/>
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>