<script>

    import Card from "../../../components/Cart-Card.svelte";

</script>
<div class="flex flex-col min-h-screen w-full p-24 justify-between">
    <div class="flex full w-1/2 min-w-96 justify-center">
        <Card title="Neural Stem Cells" description="Derived from iPSCs" image="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2018/10/stem-cells.jpg?w=1155&h=1541" />
    </div>

    <div class="flex flex-col h-fit w-1/4 gap-2 self-end rounded-box shadow-xl bg-base-100 fixed">
        <div class="flex w-full h-16 bg-secondary justify-center">
            <p class="flex text-center self-center h-fit w-fit font-bold text-xl">Cart</p>
        </div>
        <div class="flex flex-col p-8 gap-8">
            <p>Products: $9899</p>
            <p>Tax: $100</p>
            <p>Subtotal: $9999</p>
            <button class="btn btn-primary">Checkout Cart</button>
        </div>
    </div>
</div>