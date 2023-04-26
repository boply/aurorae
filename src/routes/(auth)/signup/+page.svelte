<script lang="ts">

    import {
        getAuth,
        createUserWithEmailAndPassword,
    } from 'firebase/auth';

    let email : string;
    let password : string;
    let confirmPassword : string;

    // input-base-error for wrong username/password
	let emailBoxOutline = "input-base-100"
    let passwordBoxOutline = "input-base-100"

    async function post() {
        // /api/login/getYourUser
        if (password == confirmPassword) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }else {
            passwordBoxOutline = "input-error"
            alert("Passwords don't match!");
        }
		
	}

</script>

<form class="flex flex-col gap-6" method="POST">
    <!-- Username/Email/Password/Confirm Boxes -->
    <input bind:value={email} type="text" placeholder="Email" class="input {emailBoxOutline} w-full max-w-xs" />
    <input bind:value={password} type="password" placeholder="Password" class="input {passwordBoxOutline} w-full max-w-xs"  />
    <input bind:value={confirmPassword} type="password" placeholder="Confirm Password" class="input {passwordBoxOutline} w-full max-w-xs" />

    <!-- Submit Button -->
    <input type="button" value="Sign Up" class="btn btn-primary my-4 w-full" on:click={post} />
</form>

<!-- Login Redirect -->
<div class="divider h-0">OR</div>
<div class="self-center">
    Already have an account? <a class="underline" href="/login">Login</a>
</div>