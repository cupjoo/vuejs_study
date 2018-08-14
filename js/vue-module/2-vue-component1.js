// 전역 component 등록
Vue.component('my-global-component', {
    template: '<div>전역 컴포넌트가 등록되었습니다!</div>'
});
// 지역 component 내용
var cmp = {
    template: '<div>지역 컴포넌트가 등록되었습니다!</div>'
};
// first instance
new Vue({
    el: '#app',
    // 지역 component 등록
    components: {
        'my-local-component': cmp
    }
});
// second instance
new Vue({
    el: '#app2'
});