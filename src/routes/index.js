/**
 * Created by hf on 2017/2/13.
 */
//路由
import rAuth from './map/auth.js';
import rIndex from './map/index.js';
//页面
import p404 from '../../src/views/error/404/index.vue';

const baseRoute=[
    {
        path:"*",
        name:"404",
        component:p404
    }
];

const routes=rAuth.concat(rIndex,baseRoute);

export default routes;