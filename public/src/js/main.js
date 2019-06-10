$(document).ready(() => {
  $("#searchForm").on("submit", e => {
    let searchText = $("#searchText").val();
    getUsers();
    e.preventDefault();
  });
});

function getUsers() {
  axios
    .get("http://jsonplaceholder.typicode.com/users")
    .then(resp => {
      console.log(resp.data);
      let infoUsers = resp.data;
      let output = "";
      $.each(infoUsers, (index, users) => {
        if (index % 2 == 0) {
          output += `
        <tr class="table-active" >
        <th scope="row">${users.id}</th>
        <td>${users.name}</td>
        <td>${users.username}</td>
        <td>${users.email}</td>
        <td>${users.address.street}, ${users.address.city}</td>
        <td>${users.phone}</td>
        <td>${users.website}</td>
        <td>${users.company.name}</td>
      </tr>
        `;
        } else {
          output += `
        <tr>
        <th scope="row">${users.id}</th>
        <td>${users.name}</td>
        <td>${users.username}</td>
        <td>${users.email}</td>
        <td>${users.address.street}, ${users.address.city}</td>
        <td>${users.phone}</td>
        <td>${users.website}</td>
        <td>${users.company.name}</td>
      </tr>
        `;
        }
      });
      $("#users").html(output);
    })
    .catch(err => {
      console.log(err);
    });
}
