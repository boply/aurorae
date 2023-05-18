<script lang="ts">
    let count = 0;

    function increment() {
        count++;
    }
    function decrement() {
        if (count > 0){
            count--;
        }
    }
</script>

<div class="flex flex-row w-40 h-12">
    <div class="btn btn-secondary w-1/3" on:click={decrement}>
        <button id="minus-btn">
            -
        </button>
    </div>
    <div class="box-rounded bg-500 w-1/3 h-full flex flex-col text-center flex-row">
        <p>{count}</p>
    </div>
    <div class="btn btn-secondary w-1/3" on:click={increment}>
        
        <button id="plus-btn">
            +
        </button>
    </div>
</div>