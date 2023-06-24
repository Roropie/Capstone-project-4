document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  alert("A team member will reach out shortly, thank you");

  this.reset();
});
