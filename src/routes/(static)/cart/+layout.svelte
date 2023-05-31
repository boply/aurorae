<script lang="ts">
    import { user, authenticated } from '$firebase';
    import { writable } from 'svelte/store';
    
    let _user: any;
    // export const uid = writable("")
        
    user.subscribe(async (data) => {
        _user = data;
        // uid.set(_user.uid)
    });
    
    </script>
    
    {#if authenticated}
        <slot />
    {:else}
    
    {/if}