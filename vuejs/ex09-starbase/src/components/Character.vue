<template>
  <div class="col-md-4" @click="">
    <div class="character-card">
        <button class="btn-primary" @click="switchPrevious">Previous</button>
        <div class="card-block">
          <h4 class="card-title">{{character.name}}</h4>
          <p class="card-text">Height: {{character.height}}cm</p>
          <p class="card-text">Mass: {{character.mass}}Kg</p>
          <p class="card-text">Hair Color: {{character.hair_color}}</p>
          <p class="card-text">Eye Color: {{character.eye_color}}</p>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['id'],
    data() {
      return {
        character: {}
      }
    },
    methods: {
      fetchCharacter(id) {
        console.log('foi');
        axios.get(`https://swapi.co/api/people/${id}`)
          .then( data => this.character = data.data )
          .catch( response => console.log(response))
      },
      switchCharacter() {
        let random_id = Math.floor(Math.random() * 83) + 1
        this.fetchCharacter(random_id)
      }
    },
    created() {
      this.fetchCharacter(this.id)
    }
  }
</script>
