<template>
  <div class="inilobby">
    <form class="lobby" @submit.prevent="start">
      <div>
        <label>Player 1</label>
        <input type="text" v-model="player1" placeholder="Name for player 1" />
      </div>
      <div>
        <label>Player 2</label>
        <input type="text" v-model="player2" placeholder="Name for player 2" />
      </div>

      <div class="lobby__action">
        <button type="submit" :disabled="!player1 || !player2">Start the game</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player1: null,
      player2: null
    };
  },
  methods: {
    start() {
      this.$store.commit("player1Name", this.player1);
      this.$store.commit("player2Name", this.player2);
      this.$router.push({ path: "/game" });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.player1 = null;
      vm.player2 = null;
    });
  }
};
</script>
<style lang="scss">
@media only screen and (min-width: 374px) and (min-height: 800px) {
 .inilobby {
  padding-left: 30%;
  padding-right: 30%;
  padding-top: 5%;
}
}
.inilobby {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
}

.lobby {
  label {
    font-size: 3em;
    font-weight: 500;
    align-self: center;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1.5em;
     align-items: center;
     padding-left: 50px;

  }

  &__action {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    > button {
      padding: 15px 18px;
      font-size: 1.5em;
      background: purple;
      border: 6px solid plum;
      border-radius: 10px;
      outline: none;
      color: white;
      cursor: pointer;
      transition: transform 0.2s;
      // @include box-shadow;
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);

      &:hover:not(:disabled) {
        background: peru;
      }

      &:active {
        transform: scale(0.9);
      }

      &:disabled {
        cursor: default;
        opacity: 0.3;
      }
    }
  }
}

</style>
