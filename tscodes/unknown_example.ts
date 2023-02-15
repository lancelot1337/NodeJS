function doTask2(arg:unknown) {
    if(typeof arg === 'function') {
        arg();
    } else if(typeof arg === 'string') {
        console.log(arg.toUpperCase());
    }
}

doTask2("Hello World!!!");