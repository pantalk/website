# Pantalk

Landing page for Pantalk - any agent, any chat.

Pantalk is a Go-based daemon + CLI toolkit that keeps persistent service sessions in one local process and exposes a clean Unix socket protocol. Claude Code, Codex, Copilot, Gemini CLI, Goose, OpenCode, and Aider attach on one side; Slack, Discord, Mattermost, Telegram, WhatsApp, IRC, XMPP/Jabber, Twitch, Nostr, Matrix, Twilio, Zulip, and iMessage attach on the other. Neither side knows about the other, so either can be swapped without touching the rest.

## Development

```bash
pnpm install --ignore-workspace
pnpm dev
```

## Build

```bash
pnpm build
```

## About Pantalk

Pantalk helps you manage multi-service bot communication from a single local daemon. It can:

- Bind any harness to any bot through drivers, with ordered `when:` routing
- Keep all thirteen platform connectors alive in one daemon
- Expose a simple Unix socket protocol for CLI and harness tooling
- Store local message history and notifications in SQLite
- Support multi-bot routing with config-defined bot names

Pantalk is written in Go and is open source at https://github.com/pantalk/pantalk. See https://github.com/pantalk/station for the prebuilt showcase environment.
