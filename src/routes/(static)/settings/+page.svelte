<script lang="ts">

	import { signOut, updateEmail, deleteUser } from "firebase/auth";
	import { auth, user } from "$firebase";
	
	let _user: any = $user;
	let email = _user.email;
	
	user.subscribe((data) => {
		_user = data;
	});


	async function Logout () {
		signOut(auth()).then(() => {
			window.location.href = '/';
		}).catch((error) => {
		// An error happened.
		// what happens when errors happen?
		});
	}
	
	const changeEmail = () => {
    const newEmail = document.getElementById('new-email-input').value;
	updateEmail(_user, newEmail).then(() => {
		console.log('Email updated successfully!');
		email = _user.email;
	}).catch((error) => {
		console.log('Error updating email:', error);
	});
  }

	const userdel = () => {  
	deleteUser(_user).then(() => {
		// User deleted.
	}).catch((error) => {
		// An error ocurred
		// ...
	});
}

  </script>
<div class="flex flex-col self-center w-full h-fit bg-base-100 shadow-xl rounded-lg p-4 mb-4 gap-2">

	<div class="flex flex-col rounded-lg bg-default w-full h-full p-4 self-center gap-12">

		<!-- Email -->
		<div class="flex flex-row justify-between">
			<div class="flex flex-col">
				<span class="font-bold text-xs opacity-50">Email:</span>
				<span class="text-md">{email}</span>
			</div>

			<!-- Edit Email Button -->
			<div class="flex flex-col justify-center">
				<label for="edit-email-popup" class="btn btn-secondary btn-sm w-36 self-end">Update Email</label>
			</div>

			<!-- Edit Email Popup -->

			<input type="checkbox" id="edit-email-popup" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box relative">
					<label for="edit-email-popup" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<!-- Popup Content -->
					<div class="flex self-center form-control w-full gap-4">
						<span class="font-bold text-md">New Email:</span>
						<div class="flex flex-row justify-between">
							<input type="text" placeholder="email..." class="input input-bordered" id="new-email-input"/>
							<label for="edit-email-popup" class="btn btn-primary self-center" on:click={changeEmail}>Update Email</label>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Password -->
		<div class="flex flex-row justify-between">
			<div class="flex flex-col">
				<span class="font-bold text-xs opacity-50">Password:</span>
				<span class="text-md">*********</span>
			</div>

			<!-- Update Password Button -->
			<div class="flex flex-col justify-center">
				<label for="edit-password-popup" class="btn btn-secondary btn-sm w-36 self-end">Update Password</label>
			</div>

			<!-- Edit Password Popup -->

			<input type="checkbox" id="edit-password-popup" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box relative">
					<label for="edit-password-popup" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<!-- Popup Content -->
					<div class="flex self-center form-control w-full gap-4">
						<span class="font-bold text-md">New Password:</span>
						<div class="flex flex-row">
							<input type="password" placeholder="password..." class="input input-bordered" id="first-pass" />
							
							
							<label class="btn btn-circle btn-ghost swap swap-rotate absolute left-48" >

								<!-- this hidden checkbox controls the state -->
								<input type="checkbox" />
								
								<!--  icon -->
								<div class="swap-on fill-current"></div>
								
								<!--  icon -->
								<div class="swap-off fill-current"></div>
								
								</label>
							
						</div>
						<span class="font-bold text-md">Confirm Password:</span>
						<div class="flex flex-row justify-between">
							<input type="password" placeholder="password..." class="input input-bordered" id="new-pass-input" />
							<label for="edit-password-popup" class="btn btn-primary self-center">Update Password</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-2">
		<btn class="flex justify-between btn btn-ghost normal-case p-2 border-red-500/10" on:click={Logout}>
			<span class="w-fit opacity-70 text-center">Logout</span>
		</btn>

		<btn class="flex justify-between btn btn-ghost p-2 border-red-500" on:click={userdel}>
			<button><span class="w-fit opacity-70 text-center">Delete Account</span></button>
		</btn>
	</div>

</div>