const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarItems = document.getElementsByClassName("navbar-items")[0];
const searchBar = document.getElementById("searchBar");

toggleButton.addEventListener("click", () => {
  navbarItems.classList.toggle("active");
});

document.querySelector("footer").append(`© ${new Date().getFullYear()} `);


searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  // const filteredPosts = posts.filter((post: any) => {
  //   return post.title.contain(searchString) || post.content.contain(searchString) || post.category.contain(searchString);
  // });
  console.log(e.target.value);
});