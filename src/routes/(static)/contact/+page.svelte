
  <script lang="ts">
    var options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded', 
            },
        };

    const contact = () => {
        
        var email = document.getElementById("inputEmail").value;
        var company = document.getElementById("inputCompany").value;
        var name = document.getElementById("inputName").value;
        var message = document.getElementById("inputMsg").value;

        const options = {
            method: 'POST',
        };
        fetch( 'http://localhost:8093/api/contact/post/' + "?email=" + email + "&company=" + company + "&name=" + name + "&message=" + message , options )
        .then(response => response.json())
        .then(data => {console.log(data);});

        var success = document.getElementById("success");
        success.style.display = "block";
        // Set a timeout to hide the div after 3 seconds
        setTimeout(function() {
          success.style.display = "none";
        }, 3000);
        
        // Store the visibility state in local storage
        localStorage.setItem("isVisible", "true");

        // Check if the div should be hidden or shown based on local storage
        window.onload = function() {
          var success = document.getElementById("success");
          var isVisible = localStorage.getItem("isVisible");
          
          if (isVisible === "true") {
            success.style.display = "block";
          }
        };


        document.getElementById("inputEmail").value = "";
        document.getElementById("inputCompany").value = "";
        document.getElementById("inputName").value = "";
        document.getElementById("inputMsg").value = "";


    }

  </script>
  <div class="flex min-h-screen w-full px-8 py-24 justify-center">



    <!-- Other content -->
    <div class="isolate px-100 py-100 sm:py-200 lg:px-500">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          <div class="relative center-1 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2596E1] to-[#0A99F8] opacity-30 sm:center-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">Reach Out to the Aurorae Biolabs Team for Any Questions or Comments.</p>
        </div>
        <div class="mx-auto mt-16 max-w-xl sm:mt-20">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label class="block text-sm font-semibold leading-6 text-gray-900">Name</label>
              <div class="mt-2.5">
                <input type="text" id="inputName" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" >
              </div>
            </div>
            <div class="sm:col-span-2">
              <label class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
              <div class="mt-2.5">
                <input type="text" id="inputCompany" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" >
              </div>
            </div>
            <div class="sm:col-span-2">
              <label class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input type="email" id="inputEmail" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" >
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea rows="4"  id="inputMsg" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button on:click={contact} class="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg- focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">Let's talk</button>
          </div>
          <br>
          <div class="alert alert-success shadow-lg" id="success" style="display: none;">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Your message has been sent!</span>
            </div>
          </div>
        </div>   
      </div>
  </div>