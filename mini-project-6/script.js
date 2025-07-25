let data = [];

function register() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const adhar = document.getElementById("adhar").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!name || !email || !adhar || !gender) {
    alert("Please fill all the fields");
    return;
  }

  data.push({
    name,
    email,
    adhar,
    gender: gender.value
  });

  displayTable(data);
  clearFields();
}

function displayTable(records) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  records.forEach(item => {
    const row = `<tr>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.adhar}</td>
      <td>${item.gender}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("adhar").value = "";
  document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);
}

function searchData() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.email.toLowerCase().includes(query) ||
    item.adhar.includes(query) ||
    item.gender.toLowerCase().includes(query)
  );
  displayTable(filtered);
}
