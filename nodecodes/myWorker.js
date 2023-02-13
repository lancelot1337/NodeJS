// worker thread
const {parentPort, workerData} = require('worker_threads');
/*
Server passes data as:
 {
    workerData:
    {
        number: 34
    }
 }
*/
parentPort.postMessage(fibanocci(workerData.number));
function fibanocci(num) {
    return (num == 0 || num == 1)? num : fibanocci(num - 1) + fibanocci(num - 2);
}