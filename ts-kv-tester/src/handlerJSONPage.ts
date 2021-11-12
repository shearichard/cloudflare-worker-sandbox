
declare global {
      const SHEARICHARD_TEST_0: KVNamespace;
}
export async function handleRequestForJSON(request: Request): Promise<Response> {
    let datetimeiso = new Date().toISOString()
    let model_name = Math.random().toString().substr(2, 8);
    const defaultData = { 
        todos: [
            {
                id: datetimeiso,
                name: model_name,
                completed: false
            }
        ] 
    }
    SHEARICHARD_TEST_0.put(datetimeiso, JSON.stringify(defaultData))
    //
    const json = JSON.stringify(defaultData, null, 2)
    //
    return new Response(json, {
        headers: {
            "content-type": "text/json;charset=UTF-8",
        },
    });
}
