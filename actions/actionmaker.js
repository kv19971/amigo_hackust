import Axios from 'axios'
import store from '../mainstore'
import _ from 'lodash'
import https from 'https'

function makeAction(type, status, payload){
    return {
        type: type,
        status: status,
        payload: payload
    };
}

function dispatchAction(action){
    store.dispatch(action);
}

function dispatchAsyncAction(data, req){
    // dispatch action with status loading/pending 
    // make async call 
    //      if success then respond with success and payload 
    //      if error then respond with error and error message (optional)
    let action = _.cloneDeep(data);
    action.status = "l";
    dispatchAction(action);
    console.log("action dispatched");
/*
    const options = {
    hostname: req.url,
    path: '/',
    method: req.method
    };

const httpreq = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    //process.stdout.write(d);
    
  });
});

httpreq.on('error', (e) => {
  action.status = "error";
            action.payload = error;
            console.log("action failed");
            dispatchAction(action);
  console.error(e);
});
httpreq.end(d, (d)=>{
    action.status = "success";
            action.payload = d;
            console.log(d);
            console.log("action successful");
            dispatchAction(action);
});
*/
    /*
    https.get(req.url, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        action.status = "success";
            action.payload = res.data;
            console.log(res);
            console.log("action successful");
            dispatchAction(action);
        //process.stdout.write(d);
    });

    }).on('error', (e) => {
    action.status = "error";
            action.payload = error;
            console.log("action failed");
            dispatchAction(action);
    console.error(e);
});

    
    https.get(req.url,
    (res) => {
        
        //console.error('https: ok')
        action.status = "success";
            action.payload = res.data;
            console.log(res);
            console.log("action successful");
            dispatchAction(action);
    })
    req.on('error', (e) => {
    action.status = "error";
            action.payload = error;
            console.log("action failed");
            dispatchAction(action);
    })
    req.end()
    */
    
    Axios({
        method: req.method,
        url: req.url,
        data: req.data,
    }).then(
        (res) => {
            action.status = "success";      
            action.payload = res.data;
            console.log("action successful");
            dispatchAction(action);
        }, 
        (error) => {
            action.status = "error";
            action.payload = error;
            console.log("action failed");
            dispatchAction(action);
        }
    );
}

export {makeAction, dispatchAction, dispatchAsyncAction};