/*
============== EXAMPLE ONE ==============
*/
var app1 = new Vue({
  el: '#app-ex-1',
  data: {
    banana: 'This text is reactive!'
  },
  methods: {
    orange: function() {
      this.banana = this.banana.split('').reverse().join('')
    }
  }
})

/*
============== EXAMPLE TWO ==============
*/
var app2 = new Vue({
  el: '#app-ex-2',
  data: {
    apple: '<span style="color: red">This should be red</span>',
    seen: false
  }
})

/*
============== EXAMPLE THREE ==============
*/
Vue.component('fruit-basket', {
  props: ['fruit'],
  template: '<li>{{ fruit.text }}</li>'
})

var app3 = new Vue({
  el: '#app-ex-3',
  data: {
    basket: [
      { id: 0, text: 'Pear' },
      { id: 1, text: 'Grape' },
      { id: 2, text: 'Watermelon' }
    ]
  }
})


