<script lang="ts">
    
    let email : String;
    let password : String;

	// input-base-error for wrong username/password
	let boxOutline = "input-base-100"

    async function post() {
		
    }

</script>

<!-- Email and Password Box -->
<form class="flex flex-col gap-6" method="POST">
	<input bind:value={email} type="text" placeholder="Email" class="input {boxOutline} w-full max-w-xs " />
	<input bind:value={password} type="password" placeholder="Password" class="input {boxOutline} w-full max-w-xs" />

	<!-- Submit Button -->
	<input type="button" value="Login" class="btn btn-primary my-4 w-full" on:click={post} />
</form>

<!-- Signup Redirect -->
<div class="divider h-0">OR</div>
<div class="self-center text-center">
	Don't have an account? <a class="underline" href="/signup">Sign Up</a>
</div>