interface User {
    name:string
}

interface ErrorMsg {
    error:string
}

// type predicate function
function isUser(data:User | ErrorMsg): data is User {
   // return typeof (data as User).name === 'string';
   return "name" in data;
}

// type predicate function
function isErrorMsg(data:User | ErrorMsg): data is ErrorMsg {
    return 'error' in data;
}

function printData(data: User | ErrorMsg):void {
    if(isUser(data)) {
        console.log(data.name); // data is casted to User
    } else if  (isErrorMsg(data)) {
        console.log(data.error);
    }
}
// https://dev.to/smeijer/typescript-type-guards-and-type-predicates-4m5e
printData({"name":"Harry"}); // User

printData({"error":"404 not found!!!"});