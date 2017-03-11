/**
 * Created by hf on 2017/2/13.
 */
import {rootPath,xhrStartHandler,xhrFinishHander,xhrErrHander} from './config.js'

const xhr=({method='get',url,body=null})=>{
    const defer=$.Deferred();
    $.ajax({
        type:method,

    });
};