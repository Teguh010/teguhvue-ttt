<template>
<div>
<div class="modal-body">
  <div class="modal">
    <div class="box-nama" style="max-width: 350px; background: blue;">
     <div class="message-name">{{ playerName }} </div>
     </div>
  <p class="message">WON!!</p>
   <p class="message-lanjutkan">lanjutkan main??</p>
  <div class="options">
    <button @click="closeModal()" class="btn">Yes</button>
    <button @click="reset" class="btn">No</button>
  </div>
</div>
  <div>
     <div class="modal-sub-body">
      <img class="gambar" src="../assets/winnerlagi.png" style="width:350px;">
     </div>
  </div>
    </div>
    </div>
</template>

<script>


export default {
  props: {
    show : {
      type: Boolean,
    default: false
    },
    reset : {
      type: Function,
    },
    playerName: {
      type: String,
    },
    resetName: {
      type: Function,
    }
  },
  data() {
    return {
      showModal: this.show
    }
  },
  methods: {
   closeModal() {
       this.showModal = false;
       this.$emit('closeModal');
   }
}
}
</script>

<style>
.modal-body {
  color:black;
  background-color: #EE04FF;
     position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
     /* background-image: url("../assets/winner.png"); */
  background-image: linear-gradient(
      45deg,
      #ffd966 25%,
      transparent 25%,
      transparent 75%,
      #ffd966 75%,
      #ffd966
    ),
    linear-gradient(
      -45deg,
      #ffd966 25%,
      transparent 25%,
      transparent 75%,
      #ffd966 75%,
      #ffd966
    );
  background-size: 40px 40px;
  background-position: 0 0;
  animation: slide 4s infinite linear;
}
.gambar {
 /* background-image: url("../assets/winner.png"); */
  padding: auto;
  margin: auto;
  position: absolute;
  bottom: 0;
  /* left: -9%; */
  /* right: 9%; */
}
@keyframes slide {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -120px 60px;
  }
}

.modal-sub-body{
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.modal {
 
  position: fixed;
  /* left: 50%; */
  top: 40%;
  z-index: 999;
  transform: translate(-50%, -50%);
  width: auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 3rem;
}
/* .box-nama {
   transform: rotate(-10deg);
} */
.message-name {
  display: inline;
  padding: 10px;
  background: red;
  color: white;
  text-shadow: 2px 2px 5px black;
  transform: rotate(-10deg);
  font-size:100px;
  font-weight: 900;
  margin-top: 0;
  text-transform:uppercase;
  display: block;/* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 8.6em;
  line-height: 1em;
}
.message {
  color: white;
  text-shadow: 2px 2px 5px black;
  transform: rotate(-10deg);
  font-size:100px;
  margin-bottom: 1rem;
  font-weight: 900;
  margin-top: 0;
  text-transform:uppercase;
}
.message-lanjutkan {
  color: white;
  text-shadow: 2px 2px 5px black;
  font-size:30px;
  margin-bottom: 1.6rem;
  font-weight: 900;
  margin-top: 0;
  text-transform:uppercase;
}
.btn {
  color:inherit;
    font-family:inherit;
  font-size: inherit;
  background: white;
  padding: 0.3rem 3.4rem;
  border: 3px solid black;
  margin-right: 2.6rem;
  box-shadow: 0 0 0 black;
  transition: all 0.2s;
}

.btn:last-child {
  margin: 0;
}

.btn:hover {
  box-shadow: 0.4rem 0.4rem 0 black;
  transform: translate(-0.4rem, -0.4rem);
}

.btn:active {
  box-shadow: 0 0 0 black;
  transform: translate(0, 0);
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>