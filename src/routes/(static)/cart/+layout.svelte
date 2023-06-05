<script lang="ts">
    import { user, authenticated } from '$firebase';
    
    let _user: any;
    // export const uid = writable("")
        
    user.subscribe(async (data) => {
        _user = data;
        // uid.set(_user.uid)
    });
    
</script>
    
    {#if $authenticated}
        <slot />
    {:else}
    
    {/if}