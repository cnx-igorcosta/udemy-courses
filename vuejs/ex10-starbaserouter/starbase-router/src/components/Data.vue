<template lang="html">
  <div class="col-md-12">
    <Item
      v-for="(item, index) in items"
      key="index"
      :passed-item="item"
      :type="type"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Item from './Item.vue'
export default {
    data() {
      return {
        type: this.$route.params.type,
        items: []
      }
    },
    watch: {
      '$route': 'fetchItems'
    },
    methods: {
      fetchItems() {
        this.items = []
        this.type = this.$route.params.type
        let initial_ids = [1, 2, 3]

        for(let i in initial_ids) {
          let id = initial_ids[i]
          axios.get(`https://swapi.co/api/${this.type}/${id}`)
            .then( data => data.data)
            .then( json => this.items.push(json))
            .catch( response => console.log(response))
        }
      }
    },
    created() {
      this.fetchItems()
    },
    components: {
      Item
    }
}
</script>
