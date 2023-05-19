<div class="flex min-h-screen w-full px-8 py-24">
    <div class="about-section">
        <h1>About Us</h1>
        <p>Biotechnology is a rapidly advancing field at the intersection of biology and technology. It involves the application of scientific and engineering principles to develop innovative solutions and products that harness the power of living organisms or their components.</p>
      </div>
      
      <h2 style="text-align:center">Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="/w3images/team1.jpg" style="width:100%">
            <div class="container">
              <h2>Bo Yang</h2>
              <p class="title">CEO & Founder</p>
              <p>Bio</p>
              <p>example@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src="/w3images/team2.jpg"  style="width:100%">
            <div class="container">
              <h2>Dongmei Wu</h2>
              <p class="title">Art Director</p>
              <p>Bio</p>
              <p>example@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src="/w3images/team3.jpg" style="width:100%">
            <div class="container">
              <h2>Lai Dong</h2>
              <p class="title">Designer</p>
              <p>Bio</p>
              <p>example@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
<style>
    body {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

</style>
      </div>
      
