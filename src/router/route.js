import App from "view/main/App";

const index = resolve => require.ensure([], () => resolve(require("view/index/index")), "index");

export default[
    {
        path : "/",
        component : App, //顶层路由，对应index.html
        children : [
            {
                path: "/index",
                component: index

            }
        ]
    }
];