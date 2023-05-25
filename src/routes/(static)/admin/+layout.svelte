<script lang="ts">
import { user, aid } from '$firebase';

let _user: any;
	
user.subscribe(async (data) => {
    _user = data;
    console.log(_user);
});

</script>

{#if _user?.uid == aid}
    <slot/>
{:else}

{/if}