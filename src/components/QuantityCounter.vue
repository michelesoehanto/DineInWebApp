<template>
<div id = 'item'>
    <button class="clickbut" @click = 'incrementCounter'>+</button>
    <span>{{count}}</span>
    <button class = "clickbut" @click= 'decrementCounter'>-</button>
</div>
</template>

<script>
export default {
    name:'Qcounter',
    data() {
        return {
            count: 0
        }
    },
    props: {
        item: Object
      
    },
    methods: {
        incrementCounter: function() {
            if (this.count < 10) {
                this.count+=1;
            } else {
                alert('You cannot buy more than 10 items')
            }
            this.$emit('counter', this.item, this.count)
        },
        decrementCounter: function() {
            if (this.count > 0) {
                this.count -=1
            }
            this.$emit('counter', this.item, this.count)
        }
    }
}
</script>

<style scope>

span {
    padding:10px;
}
.clickbut {

  border-radius: 8px;
  padding: 5px 15px;
  background-color: #4CAF50;
  border: 2px solid #4CAF50;
  color: white;
  cursor: pointer;
  outline: none; /* removes the outer border when button is in focus */
}
.clickbut:hover {
  background-color: white;
  color: #4CAF50;
}
</style>