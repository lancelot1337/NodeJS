type ResponseData = string | null;

function someTask(data:ResponseData) {
    console.log((data as string).toUpperCase());
}