<div class=" flex justify-center max-w-screen-2xl h-screen px-80">
	<div class="flex justify-center w-full py-10 mt-10">
		<div class="flex flex-col justify-between bg-base-200 w-1/5 py-8 px-2 rounded-lg">
			<div class="flex flex-col justify-between gap-2">
				<a class="btn btn-ghost normal-case p-2" href="/settings/account">
					<span class="flex flex-row gap-2 w-full opacity-70 text-left text-xs">Account</span>
				</a>
			</div>

			<div class="flex flex-col gap-2">
				<btn class="flex justify-between btn btn-ghost normal-case p-2 border-red-500/10">
					<span class="w-fit opacity-70 text-left text-xs">Logout</span>
				</btn>

				<btn class="flex justify-between btn btn-ghost normal-case p-2 border-red-500">
					<button><span class="w-fit opacity-70 text-left text-xs">Delete Account</span></button>
				</btn>
			</div>
		</div>

		<div class="bg-base-100 w-4/5 px-2">
			<slot />
		</div>
	</div>
</div>
