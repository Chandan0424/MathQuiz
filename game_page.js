P1name = localStorage.getItem("player1Name");
P2name = localStorage.getItem("player2Name");

P1score = 0;
P2score = 0;

Qturn = "P1";
Aturn = "P2";

document.getElementById("p1Name").innerHTML = P1name;
document.getElementById("p2Name").innerHTML = P2name;

document.getElementById("p1score").innerHTML = P1score;
document.getElementById("p2score").innerHTML = P2score;

document.getElementById("player_question").innerHTML = P1name;
document.getElementById("player_answer").innerHTML = P2name;
function Send() {
    tp_word = document.getElementById("text_input2").value;
    tp_word1 = document.getElementById("text_input1").value;
    actual_answer = parseInt(tp_word1) * parseInt(tp_word);
    console.log(actual_answer);

    question_word = "<h4>" + tp_word1 + "X" + tp_word + "</h4>";
    inputbox = "<br> answer: <input type='text' id='inputCheckBox'>";
    checkbutton = "<br><br> <button class='btn btn-info' onclick='Check()'>Check</button>";
    row = question_word + inputbox + checkbutton;

    document.getElementById("output").innerHTML = row;
    document.getElementById("text_input1").value = "";
    document.getElementById("text_input2").value = "";
}

function Check() {
    input = document.getElementById("inputCheckBox").value
    answer = parseInt(input);
    if (answer == actual_answer) {
        if (Aturn == "P1") {
            P1score = P1score + 1;
            document.getElementById("p1score").innerHTML = P1score;

        } else {
            P2score = P2score + 1;
            document.getElementById("p2score").innerHTML = P2score;
        }
    }
    if (Qturn == "P1") {
        Qturn = "P2";
        document.getElementById("player_question").innerHTML =P2name;
    } else {
        Qturn = "P1";
        document.getElementById("player_question").innerHTML =P1name;
    }
    if (Aturn == "P1") {
        Aturn = "P2";
        document.getElementById("player_answer").innerHTML =P2name;
    } else {
        Aturn = "P1";
        document.getElementById("player_answer").innerHTML =P1name;
    }
    document.getElementById("inputCheckBox").value = "";
}
