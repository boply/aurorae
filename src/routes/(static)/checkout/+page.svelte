<script lang="ts">

    function Checkout () {

    }

</script>

<div class="flex flex-col min-h-screen w-full py-24 px-8 lg:px-24">

    <div class="flex flex-col gap-6 bg-base-100 shadow-xl rounded-lg p-4 self-center w-full md:w-2/3 lg:w-1/2">
        
        <!-- Name -->
        <div class="form-control w-full">
            <label class="label">
                <span class="label-text">Name on Card</span>
            </label>
            <input type="text" placeholder="John Doe" class="input input-bordered w-full" />
        </div>

        <!-- Card -->
        <div class="flex w-full gap-4">

            <div class="form-control w-3/4">
                <label class="label">
                <span class="label-text">Card Number</span>
                </label>
                <input type="number" class="input input-bordered w-full" placeholder="*** *** ****" />
            </div>

            <div class="form-control w-1/4">
                <label class="label">
                <span class="label-text">CVV</span>
                </label>
                <input type="number" class="input input-bordered w-full" placeholder="***" />
            </div>

        </div>

        <!-- Expiry -->
        <div class="flex w-full gap-4">

            <div class="form-control w-1/2">
                <label class="label">
                <span class="label-text">Expiry Month</span>
                </label>
                <input type="number" class="input input-bordered w-full" placeholder="2" />
            </div>

            <div class="form-control w-1/2">
                <label class="label">
                <span class="label-text">Expiry Year</span>
                </label>
                <input type="number" class="input input-bordered w-full" placeholder="2050" />
            </div>

        </div>

        <!-- Address -->
        <div class="flex w-full gap-4">

            <div class="form-control w-1/2">
                <label class="label">
                    <span class="label-text">Address</span>
                </label>
                <input type="text" class="input input-bordered w-full" placeholder="6393 Nancy Ridge Dr Ste B" />
            </div>

            <div class="form-control w-1/4">
                <label class="label">
                <span class="label-text">City</span>
                </label>
                <input type="text" class="input input-bordered w-full" placeholder="San Diego" />
            </div>

            <div class="form-control w-1/4">
                <label class="label">
                <span class="label-text">Zip Code</span>
                </label>
                <input type="number" class="input input-bordered w-full" placeholder="92121" />
            </div>

        </div>


        <input type="button" value="Checkout" class="btn btn-primary my-4 w-full" on:click={Checkout}>
    </div>

</div>