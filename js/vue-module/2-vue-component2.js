// Vue Component 통신


// 데이터 통신 시도
var cmp1 = {
    template: '<div>First local component: {{ cmp1_data }}</div>',
    data: function () {
        return {
            cmp1_data : 100
        }
    }
};
var cmp2 = {
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