# Cloudflare Workers Test Area
A project to hold tests I am making with Cloudflare workers.

Initially this will based heavily on the [samples provided by Cloudflare](https://developers.cloudflare.com/workers/get-started/quickstarts). These [examples](https://developers.cloudflare.com/workers/examples) are also useful.

## Node Version
The .envrc in the root of this project is setup to force the Node version to lts/erbium using the [technique seen here](https://blog.differentpla.net/blog/2019/01/30/nvm-direnv/).

## my-ts-project
Based on the Cloudflare sample seen here https://github.com/cloudflare/worker-typescript-template .

I have setup .gitignore to suppress commits of wrangler.toml although [this post](https://github.com/cloudflare/wrangler/issues/209#issuecomment-541654484) suggests that's not necessary.

https://www.npmjs.com/package/@dashlane/simple-url-parser

## Using the Cloudflare API with curl

Some of the API doco seems at odds with comments from CF support people.

Here, for instance, is how the doco tells you to [add a KV Namespace](https://api.cloudflare.com/#workers-kv-namespace-create-a-namespace) use `X-Auth-Email` and `X-Auth-Key` headers but here is a [different approach](https://community.cloudflare.com/t/what-is-x-auth-key/203765/4) which is [supported by a CF employer](https://community.cloudflare.com/t/what-is-x-auth-key/203765/7), specifically using a `Authorization` header with a `Bearer` prefix like this ...

```
curl -X POST "https://api.cloudflare.com/client/v4/accounts/a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0/storage/kv/namespaces" \
     -H "Authorization: Bearer b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0" \
     -H "Content-Type: application/json" \
     -d '{"title":"My Own Namespace 1"}'
```

In this example the value `a0...a0` is the value seen on the home page of the dashboard and labelled "Account ID". The value `b0...b0` is a value associated with a 'API Token' with relevant permissions seen at https://dash.cloudflare.com/profile/api-tokens .
