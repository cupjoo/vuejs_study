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
new Vue({   // 뷰 인스턴스가 상위 component가 됨
    el: '#app2',
    data: {
        msg: 'Hello Vue!'
    },
    components: {
        'child-comp' : {
            // props 속성은 상위 component의 속성을 불러올 수 있음
            props: ['my_data'], // props 속성명 정의
            template: '<p>{{ my_data }}</p>',   // 정의된 props 속성으로 템플릿 작성
        }
    }
});

// 이벤트 발생과 수신 (하위 -> 상위)
new Vue({
    el: '#app3',
    methods: {
        // 하위 컴포넌트에서 상위 컴포넌트의 메소드를 호출함
        parent_func: function () {
            console.log('received an event!');
        }
    },
    components: {
        'child-comp': {
            // 템플릿 자체는 아래 내용으로 바뀌지만, 컴포넌트 정의는 child-comp로 유지됨
            template: '<button v-on:click="show_log">Show</button>',
            methods: {
                show_log: function () {
                    // child_event를 발생시킴
                    this.$emit('child_event');
                }
            }
        }
    }
});