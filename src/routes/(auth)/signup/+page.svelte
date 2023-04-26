<script lang="ts">

    let username : String;
    let password : String;
    let confirmPassword : String;

    async function post() {
        // /api/login/getYourUser
        if (password == confirmPassword) {
            
        }else {
            alert("Passwords don't match!");
        }
		
	}

</script>

<form class="flex flex-col gap-6" method="POST">
    <!-- Username/Email/Password/Confirm Boxes -->
    <input bind:value={username} type="text" placeholder="Username" class="input w-full max-w-xs" name="username_box" />
    <input bind:value={password} type="password" placeholder="Password" class="input w-full max-w-xs" name="password_box" />
    <input bind:value={confirmPassword} type="password" placeholder="Confirm Password" class="input w-full max-w-xs" name="confirm_box" />

    <!-- Submit Button -->
    <input type="button" value="Sign Up" class="btn btn-primary my-4 w-full" on:click={post} />
</form>

<!-- Login Redirect -->
<div class="divider h-0">OR</div>
<div class="self-center">
    Already have an account? <a class="underline" href="/login">Login</a>
</div>