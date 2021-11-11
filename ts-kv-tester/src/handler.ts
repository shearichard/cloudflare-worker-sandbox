import { handleRequestForIndexPage } from './handlerIndexPage'

export async function handleRequest(request: Request): Promise<Response> {
    //const wait = (ms) => new Promise({return "TEST"});
    //return wait;
    //const one = new Promise<Response>((resolve, reject) => {
    //    handleRequestForIndexPage(request);
    //});
    //one.then(value => {
    //      //console.log('resolved', value);
    //    return value;
    //});
    return handleRequestForIndexPage(request);
}
