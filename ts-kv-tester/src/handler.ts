import * as UrlUtils from '@dashlane/simple-url-parser';
import { handleRequestForIndexPage } from './handlerIndexPage'
import { handleRequestForJSON } from './handlerJSONPage'

export async function handleRequest(request: Request): Promise<Response> {
    var filePath = UrlUtils.extractFilepathFromUrl(request.url);
    switch ( filePath ) {
        case "/":
            return handleRequestForIndexPage(request);
        default:
            return handleRequestForJSON(request);
    }
}
