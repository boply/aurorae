<script lang="ts">

	import { signOut, updateEmail, updatePassword, deleteUser } from "firebase/auth";
	import { auth, user } from "$firebase";
	
	let _user: any = $user;
	let email = _user.email;

	let deleteUserPassword: string;
	let newEmail: string;
	let newPasswordCurrentPassword: string;
	let newPassword: string;
	let confirmNewPassword: string;
	
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
		updateEmail(_user, newEmail).then(() => {
			console.log('Email updated successfully!');
			email = _user.email;
		}).catch((error) => {
			console.log('Error updating email:', error);
		});
  }

  const changePassword = () => {
	if (newPasswordCurrentPassword == _user.password && newPassword == confirmNewPassword) {
		updatePassword(_user, newPassword).then(() => {
			console.log('Email updated successfully!');
			email = _user.email;
		}).catch((error) => {
			console.log('Error updating email:', error);
		});
	}
  }

	const userdel = () => {  
	
	if (_user.password == deleteUserPassword) {
		deleteUser(_user).then(() => {
			// User deleted.
		}).catch((error) => {
			// An error ocurred
			// ...
		});
	}
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
							<input type="text" placeholder="email..." class="input input-bordered" bind:value={newEmail}/>
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
						<span class="font-bold text-md">Current Password:</span>
						<div class="flex flex-row">
							<input type="password" placeholder="password..." class="input input-bordered" bind:value={newPasswordCurrentPassword} />
							
							
							<label class="btn btn-circle btn-ghost swap swap-rotate absolute left-48" >

								<!-- this hidden checkbox controls the state -->
								<input type="checkbox" />
								
								<!--  icon -->
								<div class="swap-on fill-current"></div>
								
								<!--  icon -->
								<div class="swap-off fill-current"></div>
								
								</label>
							
						</div>
					
						<span class="font-bold text-md">New Password:</span>
						<div class="flex flex-row">
							<input type="password" placeholder="password..." class="input input-bordered" bind:value={newPassword}/>
							
							
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
							<input type="password" placeholder="password..." class="input input-bordered" bind:value={confirmNewPassword} />
							<label for="edit-password-popup" class="btn btn-primary self-center" on:click={changePassword}>Update Password</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-6">
		
		<!-- Logout -->
		<div class="flex justify-between">
			<label class="btn btn-ghost normal-case p-2 border-red-500/10 w-full opacity-70 text-center" on:click={Logout}>Logout</label>
		</div>

		<div class="flex justify-between flex-col">
			<label for="delete-account-popup" class="w-full opacity-70 text-center btn btn-ghost p-2 border-red-500">Delete Account</label>
			
			<input type="checkbox" id="delete-account-popup" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box relative">
					<label for="delete-account-popup" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<!-- Popup Content -->
					<div class="flex self-center form-control w-full gap-4">
						<span class="font-bold text-md">Enter Password:</span>
						<div class="flex flex-row justify-between">
							<input type="password" placeholder="password..." class="input input-bordered" bind:value={deleteUserPassword}/>
							<label for="delete-account-popup" class="btn btn-primary self-center" on:click={userdel}>Delete Account</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>