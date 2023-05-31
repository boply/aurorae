<script src="https://core.spreedly.com/iframe/iframe-v1.min.js"> 
</script>


<script lang="ts">

    Spreedly.on("ready", function () {
    var submitButton = document.getElementById('submit-button');
    submitButton.disabled = false
    });

    Spreedly.init("8ggqGg4czIQy4K4uOZwMLUnDmUP", {
    "numberEl": "spreedly-number",
    "cvvEl": "spreedly-cvv"
    });

</script>

<div class="flex flex-col min-h-screen w-full py-24 px-8 lg:px-24">

    <div class="flex flex-col gap-6 bg-base-100 shadow-xl rounded-lg p-4 self-center w-full md:w-2/3 lg:w-1/2">
        
        <form id="payment-form"
            action="https://yoursite.com/checkout"
            onsubmit='submitPaymentForm(); return false;'>

            <input type="hidden"  name="payment_method_token" id="payment_method_token">

            <label for="full_name">Name</label>
            <input type="text" id="full_name" name="full_name"><br/>

            <label>Credit Card Number</label>
            <div id="spreedly-number" style="width:225px; height:35px; border: 2px solid"></div><br/>

            <label for="month">Expiration Date</label>
            <input type="text" id="month" name="month" maxlength="2">
            <input type="text" id="year" name="year" maxlength="4"><br/>

            <label>CVV</label>
            <div id="spreedly-cvv" style="width:60px; height:35px; border: 2px solid "></div><br/>

            <input id="submit-button" type="submit" value="Pay Now" disabled>

        </form>
    </div>

</div>