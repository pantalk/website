# Pantalk

Landing page for Pantalk - the open source Unix-style client-server communication tool for chat services.

Pantalk is a Go-based daemon + CLI toolkit that keeps persistent service sessions in one local process and exposes a clean Unix socket protocol for bots, AI agents, and scripts.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## About Pantalk

Pantalk helps you manage multi-service bot communication from a single local daemon. It can:

- Keep Slack, Discord, Mattermost, and Telegram sessions persistent
- Expose a simple Unix socket protocol for CLI and agent tooling
- Store local message history and notifications in SQLite
- Support multi-bot routing with config-defined bot names

Pantalk is written in Go and is open source at https://github.com/pantalk/pantalk.
