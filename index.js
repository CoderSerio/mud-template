import Mud from '@trickle/mud.js';
console.log(Mud);

new Mud({
  el: '#app',
  data: {
    title: '✨Mud.js✨'
  },
  components: {
    home: 'src/components/home/index.html'
  }
});
