<script lang="ts">

  import { onAuthStateChanged, signOut } from "firebase/auth";
  import { auth } from "../firebase";

  let authenticated = false;

  onAuthStateChanged(auth, (user: any) => {
  if (user) {
    const uid = user.uid;
    authenticated = true;
    // ...
  } else {
    authenticated = false;
    // ...
  }
  });

  async function Logout () {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  
</script>


<div class="navbar bg-base-200 p-2 fixed z-50 text-base-content">
    <div class="navbar-start">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <div class="dropdown">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/shop">Shop</a></li>
        </ul>
      </div>

      <a href="/" class="btn btn-ghost normal-case text-xl">Aurorae</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/shop">Shop</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      {#if authenticated}
        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-200 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="error" src="https://www.w3schools.com/howto/img_avatar.png" />
            </div>
          </label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
            <li><a href="/settings">Settings</a></li>
            <li><button on:click={Logout} >Logout</button></li>
          </ul>
        </div>
      {:else}
        <div class="gap-2" > 
          <a href="/login" class="btn btn-ghost">Login</a>
          <a href="/signup" class="btn btn-primary">Sign Up</a>
        </div>
      {/if}
    </div>
  </div>