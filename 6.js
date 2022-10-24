/*
Make a game of tic tac toe using HTML, CSS and JS.
*/

function funTicTacToe() {
    var frfcb, frscb, frtcb, srfcb, srscb, srtcb, trfcb, trscb, trtcb;
    frfcb = document.getElementById("frfcb").value;
    frscb = document.getElementById("frscb").value;
    frtcb = document.getElementById("frtcb").value;
    srfcb = document.getElementById("srfcb").value;
    srscb = document.getElementById("srscb").value;
    srtcb = document.getElementById("srtcb").value;
    trfcb = document.getElementById("trfcb").value;
    trscb = document.getElementById("trscb").value;
    trtcb = document.getElementById("trtcb").value;


    if ((frfcb == 'x' || frfcb == 'X') && (frscb == 'x' ||
        frscb == 'X') && (frtcb == 'x' || frtcb == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srscb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        document.getElementById("trfcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        document.getElementById("trtcb").disabled = true;
        window.alert('Player X won');
    }
    else if ((frfcb == 'x' || frfcb == 'X') && (srfcb == 'x' ||
        srfcb == 'X') && (trfcb == 'x' || trfcb == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("frscb").disabled = true;
        document.getElementById("frtcb").disabled = true;
        document.getElementById("srscb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        document.getElementById("trtcb").disabled = true;

        window.alert('Player X won');
    }
    else if ((trfcb == 'x' || trfcb == 'X') && (trscb == 'x' ||
        trscb == 'X') && (trtcb == 'x' || trtcb == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("frfcb").disabled = true;
        document.getElementById("frscb").disabled = true;
        document.getElementById("frtcb").disabled = true;
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srscb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        window.alert('Player X won');
    }
    else if ((frtcb == 'x' || frtcb == 'X') && (srtcb == 'x' ||
        srtcb == 'X') && (trtcb == 'x' || trtcb == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("frfcb").disabled = true;
        document.getElementById("frscb").disabled = true;
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srscb").disabled = true;
        document.getElementById("trfcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        window.alert('Player X won');
    }
    else if ((frfcb == 'x' || frfcb == 'X') && (srscb == 'x' ||
        srscb == 'X') && (trtcb == 'x' || trtcb == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("frscb").disabled = true;
        document.getElementById("frtcb").disabled = true;
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        document.getElementById("trfcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        window.alert('Player X won');
    }
    else if ((frtcb == 'x' || frtcb == 'X') && (srscb == 'x' ||
        srscb == 'X') && (trfcb == 'x' || trfcb == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("frfcb").disabled = true;
        document.getElementById("frscb").disabled = true;
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        document.getElementById("trtcb").disabled = true;
        window.alert('Player X won');
    }
    else if ((frscb == 'x' || frscb == 'X') && (srscb == 'x' ||
        srscb == 'X') && (trscb == 'x' || trscb == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("frfcb").disabled = true;
        document.getElementById("frtcb").disabled = true;
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        document.getElementById("trfcb").disabled = true;
        document.getElementById("trtcb").disabled = true;
        window.alert('Player X won');
    }
    else if ((srfcb == 'x' || srfcb == 'X') && (srscb == 'x' ||
        srscb == 'X') && (srtcb == 'x' || srtcb == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("frfcb").disabled = true;
        document.getElementById("frscb").disabled = true;
        document.getElementById("frtcb").disabled = true;
        document.getElementById("trfcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        document.getElementById("trtcb").disabled = true;
        window.alert('Player X won');
    }

    else if ((frfcb == '0' || frfcb == '0') && (frscb == '0' ||
        frscb == '0') && (frtcb == '0' || frtcb == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srscb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        document.getElementById("trfcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        document.getElementById("trtcb").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((frfcb == '0' || frfcb == '0') && (srfcb == '0' ||
        srfcb == '0') && (trfcb == '0' || trfcb == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("frscb").disabled = true;
        document.getElementById("frtcb").disabled = true;
        document.getElementById("srscb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        document.getElementById("trtcb").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((trfcb == '0' || trfcb == '0') && (trscb == '0' ||
        trscb == '0') && (trtcb == '0' || trtcb == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("frfcb").disabled = true;
        document.getElementById("frscb").disabled = true;
        document.getElementById("frtcb").disabled = true;
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srscb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((frtcb == '0' || frtcb == '0') && (srtcb == '0' ||
        srtcb == '0') && (trtcb == '0' || trtcb == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("frfcb").disabled = true;
        document.getElementById("frscb").disabled = true;
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srscb").disabled = true;
        document.getElementById("trfcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((frfcb == '0' || frfcb == '0') && (srscb == '0' ||
        srscb == '0') && (trtcb == '0' || trtcb == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("frscb").disabled = true;
        document.getElementById("frtcb").disabled = true;
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        document.getElementById("trfcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((frtcb == '0' || frtcb == '0') && (srscb == '0' ||
        srscb == '0') && (trfcb == '0' || trfcb == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("frfcb").disabled = true;
        document.getElementById("frscb").disabled = true;
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        document.getElementById("trtcb").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((frscb == '0' || frscb == '0') && (srscb == '0' ||
        srscb == '0') && (trscb == '0' || trscb == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("frfcb").disabled = true;
        document.getElementById("frtcb").disabled = true;
        document.getElementById("srfcb").disabled = true;
        document.getElementById("srtcb").disabled = true;
        document.getElementById("trfcb").disabled = true;
        document.getElementById("trtcb").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((srfcb == '0' || srfcb == '0') && (srscb == '0' ||
        srscb == '0') && (srtcb == '0' || srtcb == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("frfcb").disabled = true;
        document.getElementById("frscb").disabled = true;
        document.getElementById("frtcb").disabled = true;
        document.getElementById("trfcb").disabled = true;
        document.getElementById("trscb").disabled = true;
        document.getElementById("trtcb").disabled = true;
        window.alert('Player 0 won');
    }

    else if ((frfcb == 'X' || frfcb == '0') && (frscb == 'X'
        || frscb == '0') && (frtcb == 'X' || frtcb == '0') &&
        (srfcb == 'X' || srfcb == '0') && (srscb == 'X' ||
            srscb == '0') && (srtcb == 'X' || srtcb == '0') &&
        (trfcb == 'X' || trfcb == '0') && (trscb == 'X' ||
            trscb == '0') && (trtcb == 'X' || trtcb == '0')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
    }
    else {

        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}


function reset() {
    location.reload();
    document.getElementById('frfcb').value = '';
    document.getElementById("frscb").value = '';
    document.getElementById("frtcb").value = '';
    document.getElementById("srfcb").value = '';
    document.getElementById("srscb").value = '';
    document.getElementById("srtcb").value = '';
    document.getElementById("trfcb").value = '';
    document.getElementById("trscb").value = '';
    document.getElementById("trtcb").value = '';

}

flag = 1;
function first_Row_first_column_box() {
    if (flag == 1) {
        document.getElementById("frfcb").value = "X";
        document.getElementById("frfcb").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("frfcb").value = "0";
        document.getElementById("frfcb").disabled = true;
        flag = 1;
    }
}

function first_Row_second_column_box() {
    if (flag == 1) {
        document.getElementById("frscb").value = "X";
        document.getElementById("frscb").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("frscb").value = "0";
        document.getElementById("frscb").disabled = true;
        flag = 1;
    }
}

function first_Row_third_column_box() {
    if (flag == 1) {
        document.getElementById("frtcb").value = "X";
        document.getElementById("frtcb").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("frtcb").value = "0";
        document.getElementById("frtcb").disabled = true;
        flag = 1;
    }
}

function second_Row_first_column_box() {
    if (flag == 1) {
        document.getElementById("srfcb").value = "X";
        document.getElementById("srfcb").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("srfcb").value = "0";
        document.getElementById("srfcb").disabled = true;
        flag = 1;
    }
}

function second_Row_second_column_box() {
    if (flag == 1) {
        document.getElementById("srscb").value = "X";
        document.getElementById("srscb").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("srscb").value = "0";
        document.getElementById("srscb").disabled = true;
        flag = 1;
    }
}

function second_Row_third_column_box() {
    if (flag == 1) {
        document.getElementById("srtcb").value = "X";
        document.getElementById("srtcb").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("srtcb").value = "0";
        document.getElementById("srtcb").disabled = true;
        flag = 1;
    }
}

function third_Row_first_column_box() {
    if (flag == 1) {
        document.getElementById("trfcb").value = "X";
        document.getElementById("trfcb").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("trfcb").value = "0";
        document.getElementById("trfcb").disabled = true;
        flag = 1;
    }
}

function third_Row_second_column_box() {
    if (flag == 1) {
        document.getElementById("trscb").value = "X";
        document.getElementById("trscb").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("trscb").value = "0";
        document.getElementById("trscb").disabled = true;
        flag = 1;
    }
}

function third_Row_third_column_box() {
    if (flag == 1) {
        document.getElementById("trtcb").value = "X";
        document.getElementById("trtcb").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("trtcb").value = "0";
        document.getElementById("trtcb").disabled = true;
        flag = 1;
    }
}
