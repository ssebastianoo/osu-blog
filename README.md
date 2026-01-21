# osu!blog

an osu-themed blog that uses markdown files as posts.

## requirements!

it's highly recommended to use [bun](https://bun.sh/) as runtime environment.

```sh
curl -fsSL https://bun.sh/install | bash
```

## config!

you can configure the blog info in `[src/config.ts](src/config.ts)`

## development!

to start a local development server, run

```sh
bun run dev
```

## build!

the static export can be built using

```sh
bun run build
```

it will generate html files in the `build` folder.

## deploy!

as its just html files, you can deploy it to any static hosting services like cloudflare pages or your own server.

to run a quick local server use

```
bun run preview
```
