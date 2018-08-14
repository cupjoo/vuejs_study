new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    beforeCreate: function(){
        console.log('beforeCreate');
    },
    created: function(){
        console.log('created');
    },
    mounted: function(){
        console.log('mounted');
        this.message = 'changed message'
    },
    updated: function(){
        console.log('updated');
    },
    destroyed: function(){
        console.log('destroyed');
    }
});