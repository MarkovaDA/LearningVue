<template>
  <div id="app">
    <TodoItem v-for="item in groceryList"
              v-bind:todo="item.text">
    </TodoItem>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import TodoItem from './components/TodoItem.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      TodoItem
    },
    data: () => {
      return {
        surname: 'Darya Markova',
        groceryList: [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
      }
    }
  }
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
