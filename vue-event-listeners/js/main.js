var app = new Vue({
  el: '#root',

  data: {
      newFriend: '',
      friends: ['Rachel Green', 'Monica Geller', 'Phoebe Buffay', 'Joey Tribbiani', 'Chandler Bing', 'Ross Geller']
  },

  methods: {

      addFriend() {
          this.friends.push(this.newFriend);
          newFriend: ''
      }

  },

});
