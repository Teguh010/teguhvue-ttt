<template>

 <div id="app">
     <modal v-if="show" :show="show" @closeModal="closeModal" :reset="reset" :playerName="playerName" />
      <modaldraw v-if="showdraw" :showdraw="showdraw" @closeModalDraw="closeModalDraw" :reset="reset" />
<div>
      <h1 class="title" style="background-color: LightSeaGreen">
      <marquee direction="right">Teguh Vue JS Tic-Tac-Toe</marquee>
    </h1>
 
    <div class="game-panelku">
      <div class="tic-tac-toe">
        <div class="reset-score">
          <table class="scoreboard">
            <tr>
              <td style="font-size: 20px">{{ namaPlayer1 }}(X)</td>
              <td width="30">&nbsp;</td>
              <td style="font-size: 20px">{{ namaPlayer2 }}(O)</td>
            </tr>
            <tr>
              <td class="score X">{{ scores.X }}</td>
              <td>&nbsp;</td>
              <td class="score O">{{ scores.O }}</td>
            </tr>
          </table>
        </div>

        <select
          class="grid-options"
          v-model="grid_options"
          @change="changeGrid"
        >
          <option value="2">2 X 2</option>
          <option value="3" selected>3 X 3</option>
          <option value="4">4 X 4</option>
          <option value="5">5 X 5</option>
          <option value="6">6 X 6</option>
          <option value="8">8 X 8</option>
          <option value="10">10 X 10</option>
          <option value="12">12 X 12</option>
          <option value="14">14 X 14</option>
          <option value="16">16 X 16</option>
          <option value="18">18 X 18</option>
          <option value="20">20 X 20</option>
          <option value="30">30 X 30</option>
          <option value="40">40 X 40</option>
          <option value="50">50 X 50</option>
          <option value="100">100 X 100</option>
        </select>
        <div class="board"></div>
        <div>
          <button class="btn-reset" @click="reset">Reset</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

function playerName(player, { state }) {
  return player === "X" ? state.player1Name : state.player2Name;
}
import modal from "./modal"
import modaldraw from "./modalDraw"
export default {
  components : {
    modal,
    modaldraw
  },
  name: "app",
  data: () => ({
    grid_size: 3,
    namePlayer: "X",
    show: false,
    showdraw: false,
    moves: 0,
    scores: {
      X: 0,
      O: 0,
    },
    data: {},
    grid_options: 3,
  }),

  mounted() {
    this.init();
  },

  methods: {
    openModal() { 
      this.show= true
      },
    closeModal() {
      this.show= false
          },
           closeModalDraw() {
      this.showdraw= false
          },
    reset: function () {
      this.init();
       this.$store.commit("clear");
      this.$router.push({ path: "/" });
    },

    changeGrid: function () {
      this.grid_size = this.grid_options;
    
      this.init();
    },

    paint: function () {
      let main_element = document.querySelector(".game-panelku"),
        board = main_element.querySelector(".board");

      var table = "<table>";
      for (var i = 0; i < this.grid_size; i++) {
        table += "<tr>";
        for (var j = 0; j < this.grid_size; j++) {
          table += '<td row="' + i + '" column="' + j + '"></td>';
        }
        table += "</tr>";
      }

      board.innerHTML = table;

      var columns = board.getElementsByTagName("td");

      for (i = 0; i < columns.length; i++) {
        columns[i].addEventListener("click", this.mark);
      }
      // console.log(mark)
    },

    mark: function (e) {
      var td = e.target;

      if (td.innerHTML) {
        return;
      }

      var row = td.getAttribute("row"),
        column = td.getAttribute("column");

      var current_mark = this.moves % 2 === 0 ? "X" : "O";

      td.innerHTML = current_mark;
      td.classList.add(current_mark);
      this.data[row + "" + column] = current_mark;

      this.moves++;

      setTimeout(() => {
        this.checkDidWin(current_mark);
      }, 1000);
      this.namePlayer = current_mark
       this.namePlayer = this.namePlayer === "X" ? "O" : "X";
    },


    checkDidWin: function (current_mark) {
      if (this.didWin(current_mark)) {
        this.namePlayer = current_mark
        this.show = true
        this.playerName = current_mark
        this.scores[current_mark]++;
        this.updateScoreboard();
        this.empty();
      } else if (this.moves === Math.pow(this.grid_size, 2)) {
         this.showdraw = true
        this.empty();
      }
    },

    didWin: function (mark) {
      var vertical_count = 0,
        horizontal_count = 0,
        right_to_left_count = 0,
        left_to_right_count = 0;

      for (var i = 0; i < this.grid_size; i++) {
        vertical_count = 0;
        horizontal_count = 0;

        for (var j = 0; j < this.grid_size; j++) {
          if (this.data[i + "" + j] == mark) {
            horizontal_count++;
          }

          if (this.data[j + "" + i] == mark) {
            vertical_count++;
          }
        }

        if (this.data[i + "" + i] == mark) {
          left_to_right_count++;
        }

        if (this.data[this.grid_size - 1 - i + "" + i] == mark) {
          right_to_left_count++;
        }

        if (
          horizontal_count == this.grid_size ||
          vertical_count == this.grid_size
        ) {
          return true;
        }
      }

      if (
        left_to_right_count == this.grid_size ||
        right_to_left_count == this.grid_size
      ) {
        return true;
      }

      return false;
    },

    empty: function () {
      this.moves = 0;
      this.paint();
      this.data = {};
      //  this.$store.commit("clear");
    },

    init: function () {
      this.empty();
      this.scores = {
        X: 0,
        O: 0,
      };
      this.updateScoreboard();
    },

    updateScoreboard: function () {
      this.score_X = this.scores.X;
      this.score_O = this.scores.O;
    },
  },
   computed: {
    playerName: {
      get () {
      return playerName(this.namePlayer, this.$store);
      },
       set () {
       playerName(this.namePlayer, this.$store);
      }
    },
     namaPlayer1() {
      return this.$store.state.player1Name;
    },
    namaPlayer2() {
      return this.$store.state.player2Name;
    },
    resetNamaku(){
      return this.namaPlayer === "X";
    }
  }
};
</script>
<style >
.game {
  &__board {
    width: 600px;
    height: 600px;
    background-color: #F8A028;
    color: #fff;
    border: 6px solid #212750;
    border-radius: 10px;
    @include box-shadow;
  }
}

</style>