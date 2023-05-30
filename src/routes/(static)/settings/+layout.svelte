<script lang="ts">
	import { authenticated } from '$firebase';
	
</script>

{#if $authenticated}
<div class=" flex justify-center w-screen h-screen py-24">
	<div class="bg-base-100 lg:w-1/2 md:w-2/3 w-3/4 px-2">
		<slot />
	</div>
</div>
{:else}
404
{/if}

