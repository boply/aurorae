<script lang="ts">
  import Card from "../../../components/Product-Card.svelte";
  // Get the table element
  const table = document.getElementById('productTable');

  // Fetch data from the API
  fetch('http://localhost:8085/api/products/getProducts')
    .then(response => response.json())
    .then(data => {
      // Loop through the data array
      data.data.forEach(product => {
        // Create a new row in the table
        const row = table.insertRow();

        // Insert cells with product information
        const idCell = row.insertCell();
        idCell.textContent = product.ID;

        const nameCell = row.insertCell();
        nameCell.textContent = product.NAME;

        const descriptionCell = row.insertCell();
        descriptionCell.textContent = product.DESCRIPTION;

        const priceCell = row.insertCell();
        priceCell.textContent = product.PRICE;

        const inStockCell = row.insertCell();
        inStockCell.textContent = product.INSTOCK;
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });


    
</script>



<div class="flex flex-wrap gap-10 min-h-screen w-full px-8 py-24 justify-center md:justify-normal">
    <Card title="Neural Stem Cells" description="Derived from iPSCs" image="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2018/10/stem-cells.jpg?w=1155&h=1541" />
    
    <Card title="Neural Stem Cells" description="Derived from iPSCs" image="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2018/10/stem-cells.jpg?w=1155&h=1541" />
</div>

<table id="productTable">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>In Stock</th>
    </tr>
  </thead>
  <tbody>
    <!-- Product data will be inserted here -->
  </tbody>
</table>

