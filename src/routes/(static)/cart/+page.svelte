<script>

    import Card from "$components/Cart-Card.svelte";
    import Checkout from "$components/Cart-Checkout.svelte";

</script>
<div class="flex flex-col min-h-screen w-full p-24">
    <div class="flex full lg:w-1/2 w-96 justify-center gap-8">
        <Card title="Neural Stem Cells" description="Derived from iPSCs" image="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2018/10/stem-cells.jpg?w=1155&h=1541" />
    </div>

    <div class="lg:flex flex-col justify-center hidden">
        <Checkout product="980" tax="19" total="999"/>
    </div>

    <label for="my-modal-4" class="btn btn-primary lg:hidden fixed right-6 bottom-6">Checkout</label>

    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative h-fit w-96 p-0" for="">
            <div class="flex w-full h-16 bg-secondary justify-center shadow-md">
                <p class="flex text-center self-center h-fit w-fit font-bold text-xl">Cart</p>
            </div>
            <div class="flex flex-col p-8 gap-8">
                <p>Products: $9999</p>
                <p>Tax: $999</p>
                <p>Total: $9999</p>
                <button class="btn btn-primary">Checkout Cart</button>
            </div>
        </label>
    </label>
</div>