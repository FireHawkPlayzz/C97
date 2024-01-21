// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  var player1Name = document.getElementById('player1_name_input').value;
  var player2Name = document.getElementById('player2_name_input').value;

  // Store these values locally
  localStorage.setItem('player1Name', player1Name);
  localStorage.setItem('player2Name', player2Name);

  // Assign "game_page.html" to window.location
  window.location = "game_page.html";
}