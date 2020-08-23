import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import root from './root';

function load(){
    let state;
    try{
        state = localStorage.getItem('state');
        if(typeof(state) === "string"){
            state = JSON.parse(state);
        }
    }catch(err){
        console.log(err);
    };
    return state || undefined;
};

let store;
if(process.env.NODE_ENV === "development"){
    store = createStore(root,load(),composeWithDevTools(applyMiddleware(thunk)))
}else if(process.env.NODE_ENV === "production"){
    store = createStore(root,load(),compose(applyMiddleware(thunk)))
};

function save(){
    try{
        localStorage.setItem('state',JSON.stringify(store.getState()));
    }catch(err){
        console.log(err);
    }
};

store.subscribe(() => save());

export default store;