<script lang="ts">

    import { auth, user } from "../../../firebase";
    import {
        createUserWithEmailAndPassword,
        updateProfile,
    } from 'firebase/auth';

    let name : string;
    let email : string;
    let password : string;
    let confirmPassword : string;

    // input-base-error for wrong username/password
	let emailBoxOutline = "input-base-100"
    let passwordBoxOutline = "input-base-100"
    let nameBoxOutline = "input-base-100"

    const updateUsername = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      console.log('Username updated successfully!');

    }).catch((error) => {
      console.error('Error updating username:', error);
    });
  }

    async function post() {
        // /api/login/getYourUser
        if (password == confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                window.location.href = '/login';
                updateUsername;
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
    <input bind:value={name} type="text" placeholder="First Name" class="input {nameBoxOutline} w-full max-w-xs"/>
    <input bind:value={email} type="text" placeholder="Email" class="input {emailBoxOutline} w-full max-w-xs" />
    <input bind:value={password} type="password" placeholder="Password" class="input {passwordBoxOutline} w-full max-w-xs"  />
    <input bind:value={confirmPassword} type="password" placeholder="Confirm Password" class="input {passwordBoxOutline} w-full max-w-xs" />

    <!-- Submit Button -->
    <input type="button" value="Sign Up" class="btn btn-primary my-4 w-full" on:click={post}/>
</form>

<!-- Login Redirect -->
<div class="divider h-0">OR</div>
<div class="self-center">
    Already have an account? <a class="underline" href="/login">Login</a>
</div>