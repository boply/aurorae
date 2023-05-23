<script lang="ts">

    export let product: string;
    export let tax: string;
    export let total: string;

</script>

<div class="flex flex-col h-fit max-h-3/4 w-96 gap-2 lg:self-end self-center rounded-box shadow-xl bg-base-100 fixed">
    <div class="flex w-full h-16 bg-secondary justify-center shadow-md">
        <p class="flex text-center self-center h-fit w-fit font-bold text-xl">Cart</p>
    </div>
    <div class="flex flex-col p-8 gap-8">
        <p>Products: ${product}</p>
        <p>Tax: ${tax}</p>
        <p>Total: ${total}</p>
        <button class="btn btn-primary">Checkout Cart</button>
    </div>
</div>