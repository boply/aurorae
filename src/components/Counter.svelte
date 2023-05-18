<script lang="ts">

    export let number = 1;

    function minus() {
        if (number <= 1) {
            number = 1;
        } else {
            number -= 1;
        }
    }

    function plus() {
        if (number >= 99) {
            number = 99;
        } else {
            number += 1;
        }
    }

</script>

<div class="rounded-box bg-gray-100 flex flex-row w-36 h-12">
    <div class="btn btn-secondary w-1/3" on:click={minus}>
        <button id="minus-btn">-</button>
    </div>
    <div class="w-1/3 h-full flex">
        <span class="flex text-center self-center h-fit w-full">
            <p>{number}</p>
        </span>
    </div>
    <div class="btn btn-secondary w-1/3" on:click={plus}>
        <button id="plus-btn">+</button>
    </div>
</div>