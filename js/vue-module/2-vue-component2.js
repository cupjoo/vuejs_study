// Vue Component 통신


// 데이터 통신 시도
const cmp1 = {
    template: '<div>First local component: {{ cmp1_data }}</div>',
    data: function () {
        return {
            cmp1_data : 100
        }
    }
};
const cmp2 = {
    template: '<div>Second local component: {{ cmp2_data }}</div>',
    data: function () {
        return {
            cmp2_data : cmp1.data.cmp1_data
        }
    }
};

new Vue ({
    el: '#app',
    components: {
        'my-component1': cmp1,
        'my-component2': cmp2
    }
});

// props 속성을 사용한 데이터 전달 (상위 -> 하위)
new Vue({
    el: '#app2',
    data: {
        msg: 'Hello Vue!'
    },
    components: {
        'child-comp' : {
            props: ['my_data'],
            template: '<p>{{ my_data }}</p>',
        }
    }
});

// 이벤트 발생과 수신 (하위 -> 상위)
new Vue({
    el: '#app3',
    data: {
        msg: 'Goodbye Vue!'
    },
    methods: {
        printText: function () {
            console.log('received an event!');
        }
    },
    components: {
        'child-comp': {
            template: '<button v-on:click="showLog">Show</button>',
            methods: {
                showLog: function () {
                    this.$emit('show_log');
                }
            }
        }
    }
});