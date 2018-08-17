// Vue Router


// Main components
var Body = { template: '<div>This is Body</div>' };
var Header = { template: '<div>This is Header</div>' };
var Footer = { template: '<div>This is Footer</div>' };

// Login components
var Login_Body = {
    template: `
        <div>
            This is Login Header
            <router-view></router-view>
        </div>`
};
var Login_Header = { template: '<div>This is Login Header</div>' };
var Login_Footer = { template: '<div>This is Login Footer</div>' };

// Child component
var User_Body = { template: '<div>This is only seen to you</div>'};

// Router
var router = new VueRouter({
    routes: [
        {
            // 현재 페이지가 path일 때, router-view를 component 내용으로 변경함
            path: '/main',
            components: {
                // 여러 컴포넌트를 변경시킴
                default: Body,
                my_header: Header,
                my_footer: Footer
            }
        },
        {
            path: '/login',
            // 복수 component는 s를 붙임.
            components: {
                default: Login_Body,
                my_header: Login_Header,
                my_footer: Login_Footer
            },
            children: [
                {
                    path: 'user',
                    component: User_Body
                }
            ]
        },
    ]
});

// Instance
new Vue({
    router: router
}).$mount('#app');  // el 속성과 동일