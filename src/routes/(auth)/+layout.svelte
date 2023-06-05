<script lang="ts">
    import { user, authenticated } from '$firebase';
    import Navbar from '$components/Navbar.svelte'
    
    let _user: any;
    // export const uid = writable("")
        
    user.subscribe(async (data) => {
        _user = data;
        // uid.set(_user.uid)
    });
    
</script>


<a href="/" class="btn self-start btn-ghost normal-case absolute text-xl m-2">Aurorae</a>

<div class="flex flex-col justify-center h-screen w-screen bg-base-100">

	<div class="bg-base-200 flex flex-col p-8 w-96 h-fit justify-between self-center rounded-box gap-4 shadow-xl">

        <slot />

    </div>
</div>