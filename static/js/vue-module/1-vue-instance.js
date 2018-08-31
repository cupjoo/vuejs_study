/*
* Vue Instance Life Cycle
*
* beforeCreate
* created
*
* beforeMount
* mounted
*
* beforeUpdate
* updated
*
* beforeDestroy
* destroyed
*
*/

/* Instance */
new Vue({
    el: '#app',
    data: {
        my_message: 'Hello Vue.js!'
    },
    beforeCreate: function(){
        // Life Cycle Hook (사용자 추가 로직)
        console.log('beforeCreate', this.my_message);
    },
    created: function(){
        console.log('created', this.my_message);
    },
    mounted: function(){
        console.log('mounted', this.my_message);
        this.my_message = 'Goodbye Vue.js!'
    },
    updated: function(){
        console.log('updated', this.my_message);
    },
    destroyed: function(){
        console.log('destroyed', this.my_message);
    }
}); /* Instance */