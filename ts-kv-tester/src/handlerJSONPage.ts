
export async function handleRequestForJSON(request: Request): Promise<Response> {
    //
    const data = {
        hello: "world",
        age:44,
        address: "44, Acacia Avenue"
    }
    //
    const json = JSON.stringify(data, null, 2)
    //
    return new Response(json, {
        headers: {
            "content-type": "text/json;charset=UTF-8",
        },
    });
}
