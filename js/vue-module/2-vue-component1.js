// 전역 & 지역 Component


// 전역 component 등록 - 어디서든 해당 component를 사용할 수 있음
Vue.component('my-global-component', {
    template: '<div>전역 컴포넌트가 등록되었습니다!</div>'
});

// first instance
new Vue({
    el: '#app',
    // 지역 component 등록 - 현재 인스턴스에서만 component를 사용할 수 있음
    components: {
        'my-local-component': {
            template: '<div>지역 컴포넌트가 등록되었습니다!</div>'
        }
    }
});

// second instance
new Vue({
    el: '#app2'
});