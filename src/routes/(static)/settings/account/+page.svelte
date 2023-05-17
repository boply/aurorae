<div class="flex flex-col self-center w-full h-fit bg-base-200 shadow-xl rounded-lg p-4 mb-4 gap-2">
	<div class=" flex flex-col justify-center bg-base-300 rounded-lg p-4">
		<span class="self-start text-sm">Account</span>

		<div class="flex flex-row gap-3 justify-between">
			<div class="flex flex-row gap-3 justify-between">
				<img
					class="self-center btn btn-ghost btn-circle outline outline-primary/50 rounded-full avatar w-24 h-24 my-8"
					
					alt="acc"
				/>
				<span class="self-center text-base font-bold"></span>
			</div>

			<button class="btn btn-primary self-center"><label for = "edit-pfp-popup">Upload New PFP</label></button>

			<input type="checkbox" id="edit-pfp-popup" class="modal-toggle" />
		  <div class="modal">
			<div class="modal-box relative">
			  <label for="edit-pfp-popup" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
			  <!-- Popup Content -->
			  <div class="flex self-center form-control w-full gap-4">
				<span class="font-bold text-md">Upload Image</span>
				<div class="flex flex-row justify-between">
					<input type="text" placeholder="Enter Image Address..." class="input input-bordered bg-opacity-50 backdrop-blur-md bg-neutral" id="new-pfp-input" />
					<label for="edit-pfp-popup" class="btn btn-ghost border-white/10 bg-primary self-center">Update</label>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	</div>

	<div class="flex flex-col rounded-lg bg-default w-full h-full p-4 self-center gap-12">
		<!-- Username -->
		<div class="flex flex-row justify-between">
		  <div class="flex flex-col">
			<span class="font-bold text-xs opacity-50">USERNAME:</span>
			<span class="text-md"></span>
		  </div>
	  
		  <!-- Edit Username Button -->
		  <div class="flex flex-col justify-center">
			<label for="edit-username-popup" class="btn btn-xs btn-ghost border-white/10 opacity-50 self-end">Edit</label>
		  </div>
	  
		  <!-- Edit Username Popup -->
	  
		  <input type="checkbox" id="edit-username-popup" class="modal-toggle" />
		  <div class="modal">
			<div class="modal-box relative">
			  <label for="edit-username-popup" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
			  <!-- Popup Content -->
			  <div class="flex self-center form-control w-full gap-4">
				<span class="font-bold text-md">Enter New Username:</span>
				<div class="flex flex-row justify-between">
				  <input type="text" placeholder="Update username..." class="input input-bordered bg-opacity-50 backdrop-blur-md bg-neutral" id="new-username-input" />
				  <label for="edit-username-popup" class="btn btn-ghost border-white/10 bg-primary self-center">Update</label>
				</div>
			  </div>
			</div>
		  </div>
		</div>

		<!-- Email -->
		<div class="flex flex-row justify-between">
			<div class="flex flex-col">
				<span class="font-bold text-xs opacity-50">Email:</span>
				<span class="text-md"></span>
			</div>

			<!-- Edit Email Button -->
			<div class="flex flex-col justify-center">
				<label for="edit-email-popup" class="btn btn-xs btn-ghost border-white/10 opacity-50 self-end">Edit</label>
			</div>

			<!-- Edit Email Popup -->

			<input type="checkbox" id="edit-email-popup" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box relative">
					<label for="edit-email-popup" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<!-- Popup Content -->
					<div class="flex self-center form-control w-full gap-4">
						<span class="font-bold text-md">Enter New Email:</span>
						<div class="flex flex-row justify-between">
							<input type="text" placeholder="Update email..." class="input input-bordered bg-opacity-50 backdrop-blur-md bg-neutral" id="new-email-input" />
							<label for="edit-email-popup" class="btn btn-ghost border-white/10 bg-primary self-center">Update</label>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Phone Number -->
		<div class="flex flex-row justify-between">
			<div class="flex flex-col">
				<span class="font-bold text-xs opacity-50">Phone Number:</span>
				<span class="text-md"></span>
			</div>

			<!-- Edit Phone Number Button -->
			<div class="flex flex-col justify-center">
				<label for="edit-phone-number-popup" class="btn btn-xs btn-ghost border-white/10 opacity-50 self-end">Edit</label>
			</div>

			<!-- Edit Phone Number Popup -->

			<input type="checkbox" id="edit-phone-number-popup" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box relative">
					<label for="edit-phone-number-popup" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<!-- Popup Content -->
					<div class="flex self-center form-control w-full gap-4">
						<span class="font-bold text-md">Enter New Phone Number:</span>
						<div class="flex flex-row justify-between">
							<input type="text" placeholder="Update phone number..." class="input input-bordered bg-opacity-50 backdrop-blur-md bg-neutral" />
							<label for="edit-phone-number-popup" class="btn btn-ghost border-white/10 bg-primary self-center">Update</label>
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
				<label for="edit-password-popup" class="btn btn-xs btn-ghost border-white/10 opacity-50 self-end">Update Password</label>
			</div>

			<!-- Edit Password Popup -->

			<input type="checkbox" id="edit-password-popup" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box relative">
					<label for="edit-password-popup" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<!-- Popup Content -->
					<div class="flex self-center form-control w-full gap-4">
						<span class="font-bold text-md">Enter New Password:</span>
						<div class="flex flex-row">
							<input type="password" placeholder="Update password..." class="input input-bordered bg-opacity-50 backdrop-blur-md bg-neutral" id="first-pass" />
							
							
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
							<input type="password" placeholder="Re-type password..." class="input input-bordered bg-opacity-50 backdrop-blur-md bg-neutral" id="new-pass-input" />
							<label for="edit-password-popup" class="btn btn-ghost border-white/10 bg-primary self-center">Update</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
