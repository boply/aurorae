<script lang="ts">

    import Card from "$components/Card-Cart.svelte";
    import Checkout from "$components/Cart-Checkout.svelte";
    // import { user } from "$firebase";

    // let _user: any = $user;
	
    // user.subscribe((data) => {
	//   _user = data;
	// });
    
    /** @type {import('./$types').PageData} */
    export let data: any;
    let products = data.products;
    
</script>

<div class="flex flex-row min-h-screen w-full py-24 px-8 lg:px-24">
    <div class="flex flex-col lg:w-1/2 md:w-3/4 w-full justify-center gap-8">
        {#each products as product}
            <Card product={product} />
        {/each}
    </div>

    <div class="lg:flex flex-col h-fit max-h-3/4 w-96 gap-2 right-24 top-24 lg:self-end self-center rounded-box shadow-xl bg-base-100 fixed hidden">
        <Checkout product="980" tax="19" total="999"/>
    </div>

    <label for="my-modal-4" class="btn btn-primary lg:hidden fixed right-6 bottom-6">Checkout</label>

    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative h-fit w-96 p-0" for="">
            <Checkout product="980" tax="19" total="999"/>
        </label>
    </label>
</div>