function Login(){
    P1_name=document.getElementById("P1_input").value;
    P2_name=document.getElementById("P2_input").value;

    localStorage.setItem("player1Name",P1_name);
    localStorage.setItem("player2Name",P2_name);
    window.location="game_page.html";
}
