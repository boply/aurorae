<script lang="ts">

    export let product: string;
    export let tax: string;
    export let total: string;

</script>

<div class="flex w-full h-16 bg-secondary justify-center shadow-md">
    <p class="flex text-center self-center h-fit w-fit font-bold text-xl">Cart</p>
</div>
<div class="flex flex-col p-8 gap-8">
    <p>Products: ${product}</p>
    <p>Tax: ${tax}</p>
    <p>Total: ${total}</p>
    <a href="/checkout" class="btn btn-primary">Checkout Cart</a>
</div>