//title container
var titlecontainer = document.createElement("div");
titlecontainer.setAttribute("id", "title");
titlecontainer.setAttribute("class", "text-center mt-5");
document.body.appendChild(titlecontainer);
//title
var title = document.createElement("h3");
title.innerHTML = "Cricket 10";
document.getElementById("title").appendChild(title);
//colum container
var row = document.createElement("div");
row.setAttribute("class", "row mt-5");
row.setAttribute("id", "row");
document.body.appendChild(row);
//three column
var column1 = document.createElement("div");
column1.setAttribute("class", "col-sm-4 text-center");
column1.setAttribute("id", "column1");
document.getElementById("row").appendChild(column1);
var column2 = document.createElement("div");
column2.setAttribute("class", "col-sm-4 text-center");
column2.setAttribute("id", "column2");
document.getElementById("row").appendChild(column2);
var column3 = document.createElement("div");
column3.setAttribute("class", "col-sm-4 text-center");
column3.setAttribute("id", "column3");
document.getElementById("row").append(column3);
//column1 items
var titlescrore1 = document.createElement("h5");
titlescrore1.innerHTML = "Team 1 Score";
document.getElementById("column1").appendChild(titlescrore1);
var scrore1 = document.createElement("h2");
scrore1.innerHTML = "0";
scrore1.setAttribute("id", "score1");
document.getElementById("column1").appendChild(scrore1);
var button1 = document.createElement("button");
button1.setAttribute("class", "btn btn-primary");
button1.setAttribute("id", "hit1");
// button1.setAttribute("onclick", game.displayRuns);
button1.innerHTML = "HIT 1";
document.getElementById("column1").appendChild(button1);
//column2 items
var timerTitle = document.createElement("h5");
timerTitle.innerHTML = "TIMER";
document.getElementById("column2").appendChild(timerTitle);
//clock
var timer = document.createElement("h2");
timer.innerHTML = "0";
timer.setAttribute("id", "timer");
document.getElementById("column2").appendChild(timer);
//column3 items
var titlescrore2 = document.createElement("h5");
titlescrore2.innerHTML = "Team 2 Score";
document.getElementById("column3").appendChild(titlescrore2);
var scrore2 = document.createElement("h2");
scrore2.innerHTML = "0";
scrore2.setAttribute("id", "score2");
document.getElementById("column3").appendChild(scrore2);
var button2 = document.createElement("button");
button2.setAttribute("class", "btn btn-primary disabled");
button2.setAttribute("id", "hit2");
button2.innerHTML = "HIT 2";
document.getElementById("column3").appendChild(button2);
//table column container
var row_table = document.createElement("div");
row_table.setAttribute("class", "row mt-5");
row_table.setAttribute("id", "row_table");
document.body.appendChild(row_table);
//three column
var table_column1 = document.createElement("div");
table_column1.setAttribute("class", "col-sm-5 text-center");
table_column1.setAttribute("id", "table_column1");
document.getElementById("row_table").appendChild(table_column1);
var table_column2 = document.createElement("div");
table_column2.setAttribute("class", "col-sm-2 text-center");
table_column2.setAttribute("id", "table_column2");
document.getElementById("row_table").appendChild(table_column2);
var table_column3 = document.createElement("div");
table_column3.setAttribute("class", "col-sm-5 text-center");
table_column3.setAttribute("id", "table_column3");
document.getElementById("row_table").append(table_column3);
//table 1
var table1 = document.createElement("table");
table1.setAttribute("class", "table");
table1.setAttribute("id", "table1");
document.getElementById("table_column1").appendChild(table1);
// thead 1
var thead1 = document.createElement("thead");
thead1.innerHTML =
    "<tr><th>Team 1</th><th>B1</th><th>B2</th><th>B3</th><th>B4</th><th>B5</th><th>B6</th><th>Total</th></tr>";
document.getElementById("table1").appendChild(thead1);
//column entities
thead1.innerHTML +=
    '<tr id="t11"><th>P1</th></tr><tr id="t12"><th >P2</th></tr><tr  id="t13"><th >P3</th></tr><tr  id="t14"><th >P4</th></tr><tr  id="t15"><th >P5</th></tr><tr id="t16"><th  >P6</th></tr><tr  id="t17"><th>P7</th></tr><tr  id="t18"><th>P8</th></tr><tr  id="t19"><th>P9</th></tr><tr id="t110"><th>P10</th></tr>';
//table 2
var table2 = document.createElement("table");
table2.setAttribute("class", "table");
table2.setAttribute("id", "table2");
document.getElementById("table_column3").appendChild(table2);
//thead 2
var thead2 = document.createElement("thead");
thead2.innerHTML =
    "<tr><th>Team 2</th><th>B1</th><th>B2</th><th>B3</th><th>B4</th><th>B5</th><th>B6</th><th>Total</th></tr>";
document.getElementById("table2").appendChild(thead2);
//column entities
thead2.innerHTML +=
    '<tr  id="t21"><th>P1</th></tr><tr id="t22"><th >P2</th></tr><tr  id="t23"><th>P3</th></tr><tr id="t24"><th  >P4</th></tr><tr  id="t25"><th >P5</th></tr><tr  id="t26"><th>P6</th></tr><tr  id="t27"><th>P7</th></tr><tr  id="t28"><th >P8</th></tr><tr id="t29"><th >P9</th></tr><tr  id="t210"><th >P10</th></tr>';
//result
var result = document.createElement("h3");
result.setAttribute("id", "result");
document.getElementById("table_column2").appendChild(result);
//creating the generate button
var buttonX = document.createElement("button");
buttonX.setAttribute("class", "btn btn-primary");
buttonX.setAttribute("id", "GenerateResult");
buttonX.innerHTML = "Generate Result";
// GETTING ALL THE QUERIES NEEDED
var timerDisplay = document.getElementById("timer");
var Button1 = document.getElementById("hit1");
var Button2 = document.getElementById("hit2");
buttonX.style.display = "none";
document.getElementById("table_column2").appendChild(buttonX);
var cricketPlay = /** @class */ (function () {
    function cricketPlay() {
        var _this = this;
        this.bigSwitch = 1;
        this.smallSwitch = 0;
        this.totalTeam1Runs = 0;
        this.tempTotal1 = 0;
        this.toggleSameRowSwitch = 0;
        this.team1PlayerPlayed = 1;
        this.playerXballPlayed = 0;
        this.team2PlayerPlayed = 1;
        this.totalTeam2Runs = 0;
        this.tempTotal2 = 0;
        this.exitGame = 0;
        this.loopSwitch = 0;
        this.maxRowNumber1 = 0;
        this.maxScore1 = 0;
        this.maxRowNumber2 = 0;
        this.maxScore2 = 0;
        this.running = 0;
        this.seconds = 0;
        this.startTimer = function () {
            if (!_this.running) {
                _this.startTime = new Date().getTime();
                _this.tInterval = setInterval(_this.displayTime, 1);
                _this.running = 1;
            }
        };
        //METHOD TO DISPLAYTIMER FOR BOTH TEAMS
        this.displayTime = function () {
            _this.updatedTime = new Date().getTime();
            _this.difference = _this.updatedTime - _this.startTime;
            _this.seconds = Math.floor((_this.difference % (1000 * 60)) / 1000);
            _this.seconds = _this.seconds < 10 ? "0" + _this.seconds : _this.seconds;
            timerDisplay.innerHTML = _this.seconds + "s";
            //IF TIMER REACHES 10 SECONDS IT HAS TO RESET FOR NEXT TEAM
            if (_this.seconds == 59) {
                _this.resetTimer();
            }
        };
        //METHOD USED TO RESET TIMER FOR THE SECOND TEAM
        this.resetTimer = function () {
            _this.difference = 0;
            _this.running = 0;
            _this.seconds = "0";
            timerDisplay.innerHTML = _this.seconds + "s";
            clearInterval(_this.tInterval);
            if (_this.bigSwitch === 1)
                _this.addClass();
        };
        this.randomRunGenerator = function () {
            var run = Math.floor(Math.random() * 7);
            return run;
        };
        this.addClass = function () {
            Button1.setAttribute("class", "btn btn-primary disabled");
            Button1.removeEventListener("click", game.hitClicked, false);
            Button2.setAttribute("class", "btn btn-primary");
            Button2.addEventListener("click", game.hitClicked);
            _this.resetTimer();
        };
        this.removeClass = function () {
            Button2.setAttribute("class", "btn btn-primary disabled");
            Button2.removeEventListener("click", game.hitClicked, false);
            buttonX.style.display = "block";
            buttonX.addEventListener("click", function () {
                var resultText = document.createElement("p");
                if (_this.totalTeam1Runs > _this.totalTeam2Runs) {
                    resultText.innerHTML = "Team 1 is winner by scoring ".concat(_this.totalTeam1Runs - _this.totalTeam2Runs, " runs and man of the match is Player number ").concat(_this.maxRowNumber1, " with ").concat(_this.maxScore1, " runs");
                }
                else {
                    resultText.innerHTML = "Team 2 is winner by scoring ".concat(_this.totalTeam2Runs - _this.totalTeam1Runs, " runs and man of the match is Player number ").concat(_this.maxRowNumber2, " with ").concat(_this.maxScore2, " runs");
                }
                document.getElementById("table_column2").appendChild(resultText);
            });
            _this.resetTimer();
        };
        this.runEvents = function () {
            var emptyRuns1 = document.createElement("td");
            emptyRuns1.innerHTML = ' ';
            var emptyRuns2 = document.createElement("td");
            emptyRuns2.innerHTML = ' ';
            var emptyRuns3 = document.createElement("td");
            emptyRuns3.innerHTML = ' ';
            var emptyRuns4 = document.createElement("td");
            emptyRuns4.innerHTML = ' ';
            var emptyRuns5 = document.createElement("td");
            emptyRuns5.innerHTML = ' ';
            if (_this.bigSwitch === 1) {
                if (_this.playerXballPlayed === 1) {
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(emptyRuns1);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(emptyRuns2);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(emptyRuns3);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(emptyRuns4);
                }
                else if (_this.playerXballPlayed === 2) {
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(emptyRuns1);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(emptyRuns2);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(emptyRuns3);
                }
                else if (_this.playerXballPlayed === 3) {
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(emptyRuns1);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(emptyRuns2);
                }
                else if (_this.playerXballPlayed === 4) {
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(emptyRuns1);
                }
            }
            else if (_this.bigSwitch === 2) {
                if (_this.playerXballPlayed === 1) {
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(emptyRuns1);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(emptyRuns2);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(emptyRuns3);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(emptyRuns4);
                }
                else if (_this.playerXballPlayed === 2) {
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(emptyRuns1);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(emptyRuns2);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(emptyRuns3);
                }
                else if (_this.playerXballPlayed === 3) {
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(emptyRuns1);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(emptyRuns2);
                }
                else if (_this.playerXballPlayed === 4) {
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(emptyRuns1);
                }
            }
            _this.playerXballPlayed = 6;
        };
        this.hitClicked = function () {
            var _a, _b;
            var tempRun = _this.randomRunGenerator();
            if (_this.bigSwitch === 1 && _this.exitGame != 1) {
                _this.startTimer();
                if (_this.playerXballPlayed < 6) {
                    if (tempRun === 0) {
                        _this.toggleSameRowSwitch = 1;
                    }
                    if (_this.toggleSameRowSwitch === 0 && _this.playerXballPlayed != 7) {
                        var currRuns = document.createElement("td");
                        currRuns.innerHTML = "".concat(tempRun);
                        document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(currRuns);
                        _this.tempTotal1 = _this.tempTotal1 + tempRun;
                        if (_this.tempTotal1 > _this.maxScore1) {
                            _this.maxScore1 = _this.tempTotal1;
                            _this.maxRowNumber1 = _this.team1PlayerPlayed;
                        }
                        _this.playerXballPlayed++;
                    }
                    else {
                        var currRuns = document.createElement("td");
                        currRuns.innerHTML = "X";
                        document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(currRuns);
                        _this.runEvents();
                    }
                }
                else if (_this.playerXballPlayed === 6) {
                    var currRuns = document.createElement("td");
                    currRuns.innerHTML = "".concat(_this.tempTotal1);
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team1PlayerPlayed)).appendChild(currRuns);
                    _this.playerXballPlayed = 0;
                    _this.team1PlayerPlayed++;
                    _this.totalTeam1Runs = _this.totalTeam1Runs + _this.tempTotal1;
                    _this.tempTotal1 = 0;
                    _this.toggleSameRowSwitch = 0;
                    if (_this.tempTotal1 > _this.maxScore1) {
                        _this.maxScore1 = _this.tempTotal1;
                        _this.maxRowNumber1 = _this.team1PlayerPlayed;
                    }
                    if (_this.team1PlayerPlayed > 10) {
                        _this.playerXballPlayed = 0;
                        _this.bigSwitch = 2;
                        _this.totalTeam1Runs = _this.totalTeam1Runs + _this.tempTotal1;
                        (_a = document.getElementById('score1')) === null || _a === void 0 ? void 0 : _a.innerHTML = "".concat(_this.totalTeam1Runs);
                        _this.toggleSameRowSwitch = 0;
                        _this.addClass();
                    }
                }
            }
            if (_this.bigSwitch === 2) {
                _this.startTimer();
                if (_this.playerXballPlayed < 6) {
                    if (tempRun === 0) {
                        _this.toggleSameRowSwitch = 1;
                    }
                    if (_this.toggleSameRowSwitch === 0 && _this.playerXballPlayed != 7) {
                        var currRuns = document.createElement("td");
                        currRuns.innerHTML = "".concat(tempRun);
                        document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(currRuns);
                        _this.tempTotal2 = _this.tempTotal2 + tempRun;
                        if (_this.tempTotal2 > _this.maxScore2) {
                            _this.maxScore2 = _this.tempTotal2;
                            _this.maxRowNumber2 = _this.team2PlayerPlayed;
                        }
                        _this.playerXballPlayed++;
                    }
                    else {
                        var currRuns = document.createElement("td");
                        currRuns.innerHTML = "X";
                        document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(currRuns);
                        _this.runEvents();
                    }
                }
                else if (_this.playerXballPlayed === 6) {
                    var currRuns = document.createElement("td");
                    currRuns.innerHTML = _this.tempTotal2;
                    document.getElementById("t".concat(_this.bigSwitch).concat(_this.team2PlayerPlayed)).appendChild(currRuns);
                    _this.playerXballPlayed = 0;
                    _this.team2PlayerPlayed++;
                    _this.totalTeam2Runs = _this.totalTeam2Runs + _this.tempTotal2;
                    _this.tempTotal1 = 0;
                    _this.toggleSameRowSwitch = 0;
                    if (_this.tempTotal2 > _this.maxScore2) {
                        _this.maxScore2 = _this.tempTotal2;
                        _this.maxRowNumber2 = _this.team2PlayerPlayed;
                    }
                    if (_this.team2PlayerPlayed > 10) {
                        _this.playerXballPlayed = 0;
                        _this.bigSwitch = 3;
                        _this.totalTeam2Runs = _this.totalTeam2Runs + _this.tempTotal2;
                        (_b = document.getElementById('score2')) === null || _b === void 0 ? void 0 : _b.innerHTML = "".concat(_this.totalTeam2Runs);
                        _this.toggleSameRowSwitch = 0;
                        _this.removeClass();
                    }
                }
            }
        };
    }
    return cricketPlay;
}());
var game = new cricketPlay();
document.getElementById("hit1").addEventListener("click", game.hitClicked);
