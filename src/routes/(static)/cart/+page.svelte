<script>

    import Card from "$components/Card-Cart.svelte";
    import Checkout from "$components/Cart-Checkout.svelte";

</script>

<div class="flex flex-col min-h-screen w-full py-24 px-8 lg:px-24">
    <div class="flex full lg:w-1/2 w-full justify-center gap-8">
        <Card title="Neural Stem Cells" description="Derived from iPSCs" image="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2018/10/stem-cells.jpg?w=1155&h=1541" />
    </div>

    <div class="lg:flex flex-col justify-center hidden">
        <div class="flex flex-col h-fit max-h-3/4 w-96 gap-2 lg:self-end self-center rounded-box shadow-xl bg-base-100 fixed">
            <Checkout product="980" tax="19" total="999"/>
        </div>
    </div>

    <label for="my-modal-4" class="btn btn-primary lg:hidden fixed right-6 bottom-6">Checkout</label>

    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative h-fit w-96 p-0" for="">
            <Checkout product="980" tax="19" total="999"/>
        </label>
    </label>
</div>