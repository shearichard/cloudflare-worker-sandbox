import { handleRequestForIndexPage } from './handlerIndexPage'

export async function handleRequest(request: Request): Promise<Response> {
    return handleRequestForIndexPage(request);
}
