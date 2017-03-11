/**
 * Created by hf on 2017/2/21.
 */
import sAuth from './../../services/authService.js';
import * as xTypes from './../mutation-types';
//initial state

const state={
    all:[]
};

//getters
const getters={
    login:sAuth.checkLogin()
};

//actions
const actions={

};

//mutations

const mutations={

};

export default {
    state,
    getters,
    actions,
    mutations
}
