// Vue Router


// Main components
const Body = { template: '<div>This is Body</div>' };
const Header = { template: '<div>This is Header</div>' };
const Footer = { template: '<div>This is Footer</div>' };

// Login components
const Login_Body = {
    template: `
        <div>
            This is Login Header
            <router-view></router-view>
        </div>`
};
const Login_Header = { template: '<div>This is Login Header</div>' };
const Login_Footer = { template: '<div>This is Login Footer</div>' };

// Child component
const User_Body = { template: '<div>This is only seen to you</div>'};

// Router
const router = new VueRouter({
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