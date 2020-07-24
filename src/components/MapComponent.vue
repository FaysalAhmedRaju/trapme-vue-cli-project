<template>
  <div>
      <p>Hello this is Map component.</p>
<!--      <p>{{countAlias}}</p>-->
<!--      <p>{{count}}</p>-->
<!--      <p>{{countPlusLocalState}}</p>-->
<!--      <p>{{this.$store.getters.doneGArray}}</p>-->
<!--       <p>{{this.$store.getters.doneTodosCount}}</p>-->
<!--             <p>{{this.$store.getters.getTodoById(2)}}</p>-->
<!--      <h4>Getters from computer:</h4>-->
<!--      <p>{{doneTodosCount}}</p>-->
<!--      <p>{{doneTodosCount}}</p>-->
      <hr>
      <h5>Mutation:</h5>
      <p>{{this.$store.commit('changeFlagValue')}}</p>
  </div>

</template>
<script>
    // import {mapState} from "vuex";
    import {mapGetters} from 'vuex';
    export default {

        data () {
            return {
                localCount: 5

            }
        },
        watch: {

        },
        computed: mapGetters([
            'doneGArray','doneTodosCount','getTodoById'
        ]),
        // computed: {
        //   doneTodosCount(){
        //       return this.$store.getters.doneTodosCount
        //   }
        // },
        // computed: mapState([
        //     'count'
        // ]),
        methods: {

        },
    }

</script>

<!--count: state => state.count,-->
<!--countAlias: 'count',-->

<!--countPlusLocalState(state){-->
<!--return state.count + this.localCount-->
<!--}-->
