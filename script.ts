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
const buttonX = document.createElement("button");
buttonX.setAttribute("class", "btn btn-primary");
buttonX.setAttribute("id", "GenerateResult");
buttonX.innerHTML = "Generate Result";


// GETTING ALL THE QUERIES NEEDED
var timerDisplay = document.getElementById("timer");
var Button1 = document.getElementById("hit1");
var Button2 = document.getElementById("hit2");
buttonX.style.display = "none";
document.getElementById("table_column2").appendChild(buttonX);

class cricketPlay {
  bigSwitch: any = 1;
  smallSwitch: any = 0;
  totalTeam1Runs: any = 0;
  tempTotal1: any = 0;
  toggleSameRowSwitch: any = 0;
  team1PlayerPlayed: any = 1;
  playerXballPlayed: any = 0;
  team2PlayerPlayed: any = 1;
  totalTeam2Runs: any = 0;
  tempTotal2: any = 0;
  exitGame: any = 0;

  maxRowNumber1: any = 0;
  maxScore1: any = 0;
  maxRowNumber2: any = 0;
  maxScore2: any = 0;

  startTime: any;
  updatedTime: any;
  difference: any;
  tInterval: any;
  running: Number = 0;
  seconds: any = 0;

  startTimer = () => {
    if (!this.running) {
      this.startTime = new Date().getTime();
      this.tInterval = setInterval(this.displayTime, 1);
      this.running = 1;
    }
  };
  //METHOD TO DISPLAYTIMER FOR BOTH TEAMS
  displayTime = () => {
    this.updatedTime = new Date().getTime();
    this.difference = this.updatedTime - this.startTime;
    this.seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    timerDisplay.innerHTML = this.seconds + "s";
    //IF TIMER REACHES 10 SECONDS IT HAS TO RESET FOR NEXT TEAM
    if (this.seconds == 59) {
      this.resetTimer();
    }
  };
  //METHOD USED TO RESET TIMER FOR THE SECOND TEAM
  resetTimer = () => {
    this.difference = 0;
    this.running = 0;
    this.seconds = "0";
    timerDisplay.innerHTML = this.seconds + "s";
    clearInterval(this.tInterval);
    if (this.bigSwitch === 1)
      this.addClass();
  };


  randomRunGenerator = () => {
    let run = Math.floor(Math.random() * 7);
    return run;
  };
  addClass = () => {
    Button1.setAttribute("class", "btn btn-primary disabled");
    Button1.removeEventListener("click", game.hitClicked, false);
    Button2.setAttribute("class", "btn btn-primary");
    Button2.addEventListener("click", game.hitClicked);
    this.resetTimer();
  };
  removeClass = () => {
    Button2.setAttribute("class", "btn btn-primary disabled");
    Button2.removeEventListener("click", game.hitClicked, false);
    buttonX.style.display = "block";
    // if(this.totalTeam1Runs>this.totalTeam2Runs)
    //   result.innerHTML=(`Team 1 is winner by scoring ${this.totalTeam1Runs-this.totalTeam2Runs} runs and man of the match
    //   is Player number ${this.maxRowNumber1} with ${this.maxScore1} runs`);
    // else 
    // result.innerHTML=(`Team 2 is winner by scoring ${this.totalTeam2Runs-this.totalTeam1Runs} runs and man of the match
    //   is Player number ${this.maxRowNumber2} with ${this.maxScore2} runs`);

    buttonX.addEventListener("click", () => {
      const resultText = document.createElement("p");
      if (this.totalTeam1Runs > this.totalTeam2Runs) {
        resultText.innerHTML = `Team 1 is winner by scoring ${this.totalTeam1Runs - this.totalTeam2Runs
          } runs and man of the match is Player number ${this.maxRowNumber1
          } with ${this.maxScore1} runs`;
      } else {
        resultText.innerHTML = `Team 2 is winner by scoring ${this.totalTeam2Runs - this.totalTeam1Runs
          } runs and man of the match is Player number ${this.maxRowNumber2
          } with ${this.maxScore2} runs`;
      }

      document.getElementById("table_column2").appendChild(resultText);
    });
    this.resetTimer();
  }
  hitClicked = () => {
    let tempRun = this.randomRunGenerator();
    if (this.bigSwitch === 1 && this.exitGame != 1) {
      this.startTimer();
      if (this.playerXballPlayed < 6) {
        if (tempRun === 0) {
          this.toggleSameRowSwitch = 1;
        }
        if (this.toggleSameRowSwitch === 0 && this.playerXballPlayed != 7) {
          var currRuns = document.createElement("td");
          currRuns.innerHTML = `${tempRun}`;
          document.getElementById(`t${this.bigSwitch}${this.team1PlayerPlayed}`).appendChild(currRuns);
          this.tempTotal1 = this.tempTotal1 + tempRun;

          if (this.tempTotal1 > this.maxScore1) {
            this.maxScore1 = this.tempTotal1;
            this.maxRowNumber1 = this.team1PlayerPlayed;
          }
        }
        else {
          var currRuns = document.createElement("td");
          currRuns.innerHTML = `X`;
          document.getElementById(`t${this.bigSwitch}${this.team1PlayerPlayed}`).appendChild(currRuns);
        }
        this.playerXballPlayed++;
      }
      else if (this.playerXballPlayed === 6) {
        var currRuns = document.createElement("td");
        currRuns.innerHTML = this.tempTotal1;
        document.getElementById(`t${this.bigSwitch}${this.team1PlayerPlayed}`).appendChild(currRuns);
        this.playerXballPlayed = 0;
        this.team1PlayerPlayed++;
        this.totalTeam1Runs = this.totalTeam1Runs + this.tempTotal1;
        this.tempTotal1 = 0;
        this.toggleSameRowSwitch = 0;
        if (this.tempTotal1 > this.maxScore1) {
          this.maxScore1 = this.tempTotal1;
          this.maxRowNumber1 = this.team1PlayerPlayed;
        }
        if (this.team1PlayerPlayed > 10) {
          this.playerXballPlayed = 0;
          this.bigSwitch = 2;
          this.totalTeam1Runs = this.totalTeam1Runs + this.tempTotal1;
          document.getElementById('score1')?.innerHTML = `${this.totalTeam1Runs}`;
          this.toggleSameRowSwitch = 0;
          this.addClass();
        }
      }
    }

    if (this.bigSwitch === 2) {
      this.startTimer();
      if (this.playerXballPlayed < 6) {
        if (tempRun === 0) {
          this.toggleSameRowSwitch = 1;
        }
        if (this.toggleSameRowSwitch === 0 && this.playerXballPlayed != 7) {
          var currRuns = document.createElement("td");
          currRuns.innerHTML = `${tempRun}`;
          document.getElementById(`t${this.bigSwitch}${this.team2PlayerPlayed}`).appendChild(currRuns);
          this.tempTotal1 = this.tempTotal1 + tempRun;

          if (this.tempTotal2 > this.maxScore2) {
            this.maxScore2 = this.tempTotal2;
            this.maxRowNumber2 = this.team2PlayerPlayed;
          }
        }
        else {
          var currRuns = document.createElement("td");
          currRuns.innerHTML = `X`;
          document.getElementById(`t${this.bigSwitch}${this.team2PlayerPlayed}`).appendChild(currRuns);
        }
        this.playerXballPlayed++;
      }
      else if (this.playerXballPlayed === 6) {
        var currRuns = document.createElement("td");
        currRuns.innerHTML = this.tempTotal1;
        document.getElementById(`t${this.bigSwitch}${this.team2PlayerPlayed}`).appendChild(currRuns);
        this.playerXballPlayed = 0;
        this.team2PlayerPlayed++;
        this.totalTeam2Runs = this.totalTeam2Runs + this.tempTotal2;
        this.tempTotal1 = 0;
        this.toggleSameRowSwitch = 0;

        if (this.tempTotal2 > this.maxScore2) {
          this.maxScore2 = this.tempTotal2;
          this.maxRowNumber2 = this.team2PlayerPlayed;
        }

        if (this.team2PlayerPlayed > 10) {
          this.playerXballPlayed = 0;
          this.bigSwitch = 3;
          this.totalTeam2Runs = this.totalTeam2Runs + this.tempTotal2;
          document.getElementById('score2')?.innerHTML = `${this.totalTeam2Runs}`;
          this.toggleSameRowSwitch = 0;
          this.removeClass();
        }
      }
    }

  };
}
var game = new cricketPlay();
document.getElementById("hit1").addEventListener("click", game.hitClicked);