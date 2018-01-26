<template>
  <div>
    {{title}}
    <p>rootState中的count {{count}}</p>
    <p>modules_A中的count {{A.count}}</p>
    <p>rootGetters中的addedCount {{addedCount}}</p>
    <p>modules_A中的A_addedCount {{A_addedCount}}</p>
    <button @click="add(2)">root+</button>
    <button @click="A_add(10)">A+</button>
    <button @click="changeTile('Profile')">change title</button>
  </div>
</template>

<script>
import Types from '../store/types';
import {mapState,mapActions,mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods: {
    ...mapActions({add: Types.ADD_COUNT,A_add: Types.A_ADD_COUNT,changeTile: Types.CHANGE_TITLE})
  },
  computed: {
    ...mapGetters(['addedCount','A_addedCount']),
    ...mapState(['title','count','A']),
    // ...mapState({A_count: state => state.A.count})
  },
  mounted(){
    console.log(this.$store);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
