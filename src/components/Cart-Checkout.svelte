<script lang="ts">

    let test = [
        { id: 1, PRICE: 310.25, completed: true },
        { id: 2, PRICE: 201.11, completed: true },
        { id: 3, PRICE: 55.91, completed: false }
    ];

    function sumProducts( product:any ) {
        sum += parseFloat(product.product[0].PRICE)*product.QUANTITY
    }

    export let products: any;
    let tax: number;
    let total: number;

    let sum: number = 0;

    products.forEach(sumProducts);
    tax = sum*0.08;
    tax = Math.round( tax * 1e2 ) / 1e2;
    total = sum+tax;

</script>

<div class="flex w-full h-16 bg-secondary justify-center shadow-md">
    <p class="flex text-center self-center h-fit w-fit font-bold text-xl">Cart</p>
</div>
<div class="flex flex-col p-8 gap-8">
    <p>Products: ${sum}</p>
    <p>Tax: ${tax}</p>
    <p>Total: ${total}</p>
    <a href="/checkout" class="btn btn-primary hidden">Checkout Cart</a>
</div>