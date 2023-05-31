<script lang="ts">
import { user, aid } from '$firebase';

let _user: any;
	
user.subscribe(async (data) => {
    _user = data;
});

</script>

{#if _user?.uid == aid}
    <slot/>
{:else}

{/if}