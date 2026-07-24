import { useState } from 'react'

import Link from 'next/link'

import Logo from '@/components/Logo'
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'

import {
  ArrowRight,
  BellRing,
  Bot,
  Cable,
  Check,
  Database,
  Download,
  History,
  GitPullRequest,
  List,
  MessageSquareText,
  MonitorPlay,
  Plug,
  Siren,
  Radio,
  Send,
  Settings,
  Sparkles,
  Terminal,
  Users,
  Zap,
} from 'lucide-react'

const harnesses = [
  'Claude Code',
  'Codex',
  'Copilot',
  'Gemini CLI',
  'Goose',
  'OpenCode',
  'Aider',
]

const features = [
  {
    icon: Plug,
    title: 'Both ends are pluggable',
    description:
      'Harnesses attach through drivers, platforms through connectors, and neither knows about the other. Swap Claude Code for Codex, or Slack for WhatsApp, without touching the other side.',
  },
  {
    icon: Bot,
    title: 'Native harness drivers',
    description:
      'Claude Code and Codex run as persistent sessions with durable per-conversation threads. Copilot, Gemini CLI, Goose, OpenCode, and Aider run through the command driver. Anything else works too.',
  },
  {
    icon: MessageSquareText,
    title: 'Ten platforms, one interface',
    description:
      'Slack, Discord, Mattermost, Telegram, WhatsApp, IRC, Matrix, Twilio/SMS, Zulip, and iMessage from one unified interface. No per-platform code, ever.',
  },
  {
    icon: Cable,
    title: 'Single daemon, all providers',
    description:
      'pantalkd manages every provider session in one process - auth, reconnects, rate limits - so your harness only ever speaks one local protocol.',
  },
  {
    icon: Database,
    title: 'Persistent conversation memory',
    description:
      'All messages and events are stored in SQLite, so sessions stay isolated per bot, channel, and thread, and survive restarts on both sides.',
  },
  {
    icon: BellRing,
    title: 'Smart notification routing',
    description:
      'Surface only the events that matter - mentions, DMs, and threads your agent is part of - as structured events ready for reasoning.',
  },
]

const skills = [
  {
    icon: Send,
    name: 'pantalk-send-message',
    title: 'Send Message',
    description:
      'Send messages to any channel or thread across Slack, Discord, Mattermost, Telegram, WhatsApp, IRC, Matrix, Twilio, Zulip, and iMessage.',
  },
  {
    icon: BellRing,
    name: 'pantalk-read-notifications',
    title: 'Read Notifications',
    description:
      'Poll for unseen mentions, DMs, and notification events your agent should act on.',
  },
  {
    icon: History,
    name: 'pantalk-read-history',
    title: 'Read History',
    description:
      'Read conversation history from channels and threads to build context before responding.',
  },
  {
    icon: Radio,
    name: 'pantalk-stream-events',
    title: 'Stream Events',
    description:
      'Open a real-time event stream for continuous monitoring and instant agent reactions.',
  },
  {
    icon: List,
    name: 'pantalk-list-bots',
    title: 'List Bots',
    description:
      'Discover available bots, their platforms, and identifiers for dynamic routing.',
  },
  {
    icon: Settings,
    name: 'pantalk-manage-config',
    title: 'Manage Config',
    description:
      'Add bots, configure platforms, validate settings, and hot-reload the daemon.',
  },
]

const agents = [
  {
    name: 'Claude Code',
    driver: 'native driver',
    description:
      'Persistent sessions that reuse your local Claude Code auth and config, with permission modes and tool allowlists honoured per agent.',
  },
  {
    name: 'Codex',
    driver: 'native driver',
    description:
      'One persistent app-server process with a durable Codex thread per conversation, plus sandbox and approval policy per agent.',
  },
  {
    name: 'GitHub Copilot',
    driver: 'command driver',
    description:
      'Launch Copilot on matching mentions and DMs to report build results, post code reviews, and answer questions in real time.',
  },
  {
    name: 'Gemini CLI',
    driver: 'command driver',
    description:
      'Bind Gemini to any channel so it can summarize discussions, triage threads, and take action where the conversation happens.',
  },
  {
    name: 'Goose, OpenCode, Aider',
    driver: 'command driver',
    description:
      'Allowlisted out of the box. Each is a driver line in YAML, and each reaches the same ten platforms as every other harness.',
  },
  {
    name: 'Anything else',
    driver: 'socket or --allow-exec',
    description:
      'Pantalk is harness-agnostic. If it can run a CLI command or open a Unix socket, it can be the agent on the other end of the conversation.',
  },
]

const useCases = [
  {
    title: 'Ship code from a chat thread',
    tagline: 'Your coding assistant, where the conversation already is',
    icon: GitPullRequest,
    description:
      'Claude Code and Codex already open PRs, fix failing tests, and review diffs - they just do it in a terminal nobody else can see. Bind one to a channel and the work happens in the thread where it was asked for.',
    detail:
      'The harness runs in your repo with your sandbox and approval settings. Someone asks for a fix in #engineering, the PR link comes back in the same thread, and the whole team watched it happen.',
  },
  {
    title: 'Agents that act on incidents',
    tagline: 'Awake at 3am so nobody else has to be',
    icon: Siren,
    description:
      'Stream alerts into an agent that triages, runs the runbook, and reports back - in the channel your on-call is already watching, or over SMS to a phone with no app installed.',
    detail:
      'Ordered when: bindings decide what escalates and what gets handled quietly. Scheduled prompts let the same agent post a morning summary before anyone opens a laptop.',
  },
  {
    title: 'One subscription, whole team',
    tagline: 'Stop buying a seat for everyone',
    icon: Users,
    description:
      'Pantalk runs one authenticated Claude Code or Codex install and puts it in chat. Every teammate reaches it by DM or mention - no per-person license, no local setup, nothing to install.',
    detail:
      "Sessions stay isolated per user, channel, and thread, so nobody sees anybody else's context. Non-engineers get the same assistant without ever touching a terminal.",
  },
]

const platforms = [
  {
    name: 'Slack',
    href: 'https://github.com/pantalk/pantalk/blob/main/docs/slack-setup.md',
    path: 'M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z',
  },
  {
    name: 'Discord',
    href: 'https://github.com/pantalk/pantalk/blob/main/docs/discord-setup.md',
    path: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z',
  },
  {
    name: 'Mattermost',
    href: 'https://github.com/pantalk/pantalk/blob/main/docs/mattermost-setup.md',
    path: 'M12.081 0C7.048-.034 2.339 3.125.637 8.153c-2.125 6.276 1.24 13.086 7.516 15.21 6.276 2.125 13.086-1.24 15.21-7.516 1.727-5.1-.172-10.552-4.311-13.557l.126 2.547c2.065 2.282 2.88 5.512 1.852 8.549-1.534 4.532-6.594 6.915-11.3 5.321-4.708-1.593-7.28-6.559-5.745-11.092 1.031-3.046 3.655-5.121 6.694-5.67l1.642-1.94A4.87 4.87 0 0 0 12.08 0zm3.528 1.094a.284.284 0 0 0-.123.024l-.004.001a.33.33 0 0 0-.109.071c-.145.142-.657.828-.657.828L13.6 3.4l-1.3 1.585-2.232 2.776s-1.024 1.278-.798 2.851c.226 1.574 1.396 2.34 2.304 2.648.907.307 2.302.408 3.438-.704 1.135-1.112 1.098-2.75 1.098-2.75l-.087-3.56-.07-2.05-.047-1.775s.01-.856-.02-1.057a.33.33 0 0 0-.035-.107l-.006-.012-.007-.011a.277.277 0 0 0-.229-.14z',
  },
  {
    name: 'Telegram',
    href: 'https://github.com/pantalk/pantalk/blob/main/docs/telegram-setup.md',
    path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12.056 0h-.11zm4.962 7.224c.1.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
  },
  {
    name: 'WhatsApp',
    href: 'https://github.com/pantalk/pantalk/blob/main/docs/whatsapp-setup.md',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z',
  },
  {
    name: 'IRC',
    href: 'https://github.com/pantalk/pantalk/blob/main/docs/irc-setup.md',
    path: 'M3 3h18v12H3V3zm2 2v8h14V5H5zm1 1h4v2H6V6zm5 0h4v2h-4V6zm-5 3h3v2H6V9zm4 0h3v2h-3V9zm4 0h3v2h-3V9zM2 17h20v2H2v-2z',
  },
  {
    name: 'Matrix',
    href: 'https://github.com/pantalk/pantalk/blob/main/docs/matrix-setup.md',
    path: 'M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.036.107 1.49.327.453.218.795.61 1.023 1.175.275-.39.616-.72 1.016-.99.4-.272.91-.512 1.51-.512.46 0 .882.057 1.26.175.378.116.703.3.97.554.268.256.473.57.617.95.144.374.22.82.22 1.344v5.76h-1.83v-4.82c0-.32-.015-.6-.044-.87-.03-.27-.1-.5-.213-.68-.117-.192-.278-.342-.492-.456-.213-.112-.508-.17-.882-.17-.376 0-.68.074-.915.22s-.42.33-.558.556c-.14.226-.23.484-.28.777-.05.29-.076.583-.076.876v4.567h-1.83v-4.7c0-.278-.006-.553-.018-.823-.013-.27-.064-.508-.158-.723-.094-.215-.25-.39-.47-.52-.218-.133-.53-.2-.933-.2-.108 0-.262.032-.46.1-.2.068-.392.19-.577.366-.186.176-.346.416-.478.715-.132.3-.2.68-.2 1.14v4.645h-1.83V7.81zm14.505 0v1.157h.033c.31-.443.683-.784 1.117-1.024.434-.245.936-.365 1.5-.365.54 0 1.036.107 1.49.327.453.218.795.61 1.024 1.175.274-.39.615-.72 1.015-.99.4-.272.91-.512 1.51-.512.46 0 .882.057 1.26.175.378.116.703.3.97.554.268.256.474.57.618.95.144.374.218.82.218 1.344v5.76h-1.83v-4.82c0-.32-.014-.6-.043-.87-.03-.27-.1-.5-.213-.68-.118-.192-.28-.342-.493-.456-.213-.112-.508-.17-.882-.17-.375 0-.68.074-.914.22-.235.146-.42.33-.56.556-.138.226-.23.484-.278.777-.05.29-.076.583-.076.876v4.567h-1.83v-4.7c0-.278-.005-.553-.017-.823-.013-.27-.064-.508-.158-.723-.094-.215-.25-.39-.47-.52-.218-.133-.53-.2-.932-.2-.11 0-.263.032-.46.1-.2.068-.394.19-.578.366-.186.176-.345.416-.478.715-.132.3-.198.68-.198 1.14v4.645h-1.83V7.81zM23.368.55V24H24V0h-2.28v.55z',
  },
  {
    name: 'Twilio',
    href: 'https://github.com/pantalk/pantalk/blob/main/docs/twilio-setup.md',
    path: 'M12 0C5.381 0 0 5.381 0 12s5.381 12 12 12 12-5.381 12-12S18.619 0 12 0zm0 20.16c-4.508 0-8.16-3.652-8.16-8.16S7.492 3.84 12 3.84s8.16 3.652 8.16 8.16-3.652 8.16-8.16 8.16zm4.392-11.112c0 1.352-1.096 2.448-2.448 2.448s-2.448-1.096-2.448-2.448 1.096-2.448 2.448-2.448 2.448 1.096 2.448 2.448zm-4.896 5.904c0 1.352-1.096 2.448-2.448 2.448s-2.448-1.096-2.448-2.448 1.096-2.448 2.448-2.448 2.448 1.096 2.448 2.448z',
  },
  {
    name: 'Zulip',
    href: 'https://github.com/pantalk/pantalk/blob/main/docs/zulip-setup.md',
    path: 'M2.19 6.424c0-1.693.531-2.347 2.1-2.347h12.527c1.047 0 1.932.116 1.932 1.163 0 .818-.605 1.314-1.327 1.885L9.156 13.84h8.27c1.568 0 2.1.655 2.1 2.348v1.387c0 1.694-.532 2.348-2.1 2.348H4.898c-1.047 0-1.932-.115-1.932-1.163 0-.818.605-1.314 1.327-1.884L12.559 10.16H4.29c-1.569 0-2.1-.655-2.1-2.348V6.424Z',
  },
  {
    name: 'iMessage',
    href: 'https://github.com/pantalk/pantalk/blob/main/docs/imessage-setup.md',
    path: 'M5.285 0A5.273 5.273 0 0 0 0 5.285v13.43A5.273 5.273 0 0 0 5.285 24h13.43A5.273 5.273 0 0 0 24 18.715V5.285A5.273 5.273 0 0 0 18.715 0ZM12 4.154a8.809 7.337 0 0 1 8.809 7.338A8.809 7.337 0 0 1 12 18.828a8.809 7.337 0 0 1-2.492-.303A8.656 7.337 0 0 1 5.93 19.93a9.929 7.337 0 0 0 1.54-2.155 8.809 7.337 0 0 1-4.279-6.283A8.809 7.337 0 0 1 12 4.154',
  },
]

function InstallationSection() {
  const [tab, setTab] = useState('agent')

  return (
    <section id="installation" className="py-24 border-t border-stroke/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
            Get your harness online in seconds
          </h2>
          <p className="text-content-secondary text-lg max-w-2xl mx-auto">
            Let the harness install Pantalk itself, or do it manually.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 justify-center">
            <button
              onClick={() => setTab('agent')}
              className={`h-10 px-5 text-sm font-medium rounded-xl flex items-center gap-2 transition-all ${
                tab === 'agent'
                  ? 'bg-accent text-black'
                  : 'text-content-secondary border border-stroke hover:text-content hover:bg-background-secondary'
              }`}
            >
              <Bot className="size-4" />
              For AI Agents
            </button>
            <button
              onClick={() => setTab('human')}
              className={`h-10 px-5 text-sm font-medium rounded-xl flex items-center gap-2 transition-all ${
                tab === 'human'
                  ? 'bg-accent text-black'
                  : 'text-content-secondary border border-stroke hover:text-content hover:bg-background-secondary'
              }`}
            >
              <Terminal className="size-4" />
              For Humans
            </button>
          </div>

          {/* Agent Tab */}
          {tab === 'agent' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-stroke bg-background-secondary/50 p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Download className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-content mb-2">
                      1. Give your agent the install skill
                    </h3>
                    <p className="text-content-secondary text-sm mb-4">
                      Run this command to download the Pantalk install skill.
                      Then ask your agent to follow the instructions inside.
                    </p>
                    <div className="rounded-xl border border-stroke bg-background-tertiary/30 p-4 font-mono text-sm overflow-x-auto">
                      <code className="text-accent break-all">
                        curl -fsSL
                        https://raw.githubusercontent.com/pantalk/skills/refs/heads/main/pantalk-install/SKILL.md
                        -o PANTALK_INSTALL.md
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-content mb-2">
                      2. Ask your agent to install Pantalk
                    </h3>
                    <p className="text-content-secondary text-sm mb-4">
                      Paste something like this into your agent&apos;s chat:
                    </p>
                    <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-sm">
                      <p className="text-content italic">
                        &ldquo;Read the PANTALK_INSTALL.md file and follow the
                        instructions to install and configure Pantalk.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-content-secondary text-sm text-center">
                Your agent will install the binaries, create the config, start
                the daemon, and verify everything is working - autonomously.
              </p>
            </div>
          )}

          {/* Human Tab */}
          {tab === 'human' && (
            <div className="space-y-6">
              {[
                {
                  platform: 'Daemon',
                  command:
                    'go install github.com/pantalk/pantalk/cmd/pantalkd@latest',
                },
                {
                  platform: 'Unified CLI',
                  command:
                    'go install github.com/pantalk/pantalk/cmd/pantalk@latest',
                },
              ].map((item) => (
                <div
                  key={item.platform}
                  className="rounded-xl border border-stroke bg-background-secondary/50 overflow-hidden"
                >
                  <div className="px-4 py-2 border-b border-stroke/50 bg-background-tertiary/30">
                    <span className="text-sm text-content-secondary">
                      {item.platform}
                    </span>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <code className="text-accent">{item.command}</code>
                  </div>
                </div>
              ))}

              <div className="text-center mt-6">
                <p className="text-content-secondary mb-4">
                  Clone the repo to run all connectors and see example agent
                  configs
                </p>
                <Link
                  href="https://github.com/pantalk/pantalk"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors"
                >
                  Open repository
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stroke bg-background-secondary/50 backdrop-blur-sm mb-6">
              <span className="text-xs text-content-secondary">
                Open source • Go • Built for agentic harnesses
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-content">Pantalk</span>
              <br />
              <span className="text-accent text-glow">
                any agent, any chat
              </span>
            </h1>

            <p className="text-lg md:text-xl text-content-secondary max-w-xl mb-8">
              An open source daemon that puts the coding agent you already run
              into the chat apps your team already uses. Claude Code answers in
              Slack. Codex answers over SMS. Same config, one line each.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex flex-wrap gap-2.5">
                {harnesses.map((harness) => (
                  <span
                    key={harness}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-stroke bg-background-secondary/60 backdrop-blur-sm text-sm font-medium text-content"
                  >
                    {harness}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-accent font-mono text-lg">×</span>
                <span className="text-xs uppercase tracking-widest text-content-secondary">
                  plugs into
                </span>
                <div className="h-px flex-1 bg-stroke/50" />
              </div>

              <div className="flex flex-wrap gap-3">
                {platforms.map((platform, i) => (
                  <Link
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-float inline-flex items-center gap-2.5 pl-3 pr-4 py-2 rounded-full border border-accent/25 backdrop-blur-sm text-sm font-medium text-content bg-accent/5 no-underline"
                    style={{
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-[18px] fill-accent"
                    >
                      <path d={platform.path} />
                    </svg>
                    {platform.name}
                  </Link>
                ))}
              </div>
            </div>

            <p className="text-base text-content-secondary max-w-xl mb-6">
              A Claude tag in Slack welds one agent to one chat app.
              <span className="text-content font-medium"> Pantalk</span> welds
              nothing - so you pick both ends, and change either one later.
            </p>

            <ul className="space-y-2 mb-8 max-w-xl">
              {[
                'Ship PRs from the chat thread that asked for them',
                'Put an agent on incidents, in-channel or over SMS',
                'Share one Claude or Codex seat across the whole team',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="size-4 text-accent shrink-0" />
                  <span className="text-content-secondary">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="#installation"
                className="h-12 px-6 text-base bg-accent hover:bg-accent-secondary text-black font-medium rounded-xl flex items-center gap-2 transition glow"
              >
                <Download className="size-5" />
                Install Pantalk
              </Link>
              <Link
                href="https://github.com/pantalk/pantalk"
                className="h-12 px-6 text-base text-content-secondary hover:text-content rounded-xl flex items-center gap-2 transition border border-stroke hover:border-stroke-secondary hover:bg-background-secondary"
              >
                View on GitHub
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              A socket in the middle, sockets on both ends
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Everything a harness needs to be a real participant in a
              conversation - and nothing that ties it to the platform the
              conversation happens on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-stroke/50 bg-background-secondary/30 hover:bg-background-secondary/50 hover:border-stroke transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="size-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-content mb-2">
                  {feature.title}
                </h3>
                <p className="text-content-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="quick-start" className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-content mb-6">
                How it works
              </h2>
              <p className="text-content-secondary text-lg mb-8">
                Declare the harnesses once, declare the platforms once, and bind
                them. The daemon is the only thing that ever knows about both.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Declare your harnesses',
                    description:
                      'Each agent is a name plus a driver - claude, codex, or a command for anything else. Nothing in this block mentions a platform.',
                  },
                  {
                    step: '02',
                    title: 'Declare your platforms',
                    description:
                      'Each bot is a name plus a type - slack, discord, telegram, whatsapp, irc, matrix, twilio, zulip. Nothing in this block mentions a harness.',
                  },
                  {
                    step: '03',
                    title: 'Bind them with when:',
                    description:
                      'Ordered bindings decide which harness answers which conversation. Repoint either side by editing one line, then pantalk reload.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent font-bold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-content mb-1">
                        {item.title}
                      </h3>
                      <p className="text-content-secondary text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-stroke bg-background-secondary/50 p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-stroke/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="text-content-secondary text-xs ml-2">
                    config.yaml
                  </span>
                </div>
                <pre className="text-content-secondary leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-accent">agents:</span>
                    {`
  - name: engineering
    driver: `}
                    <span className="text-content">codex</span>
                    {`
  - name: reviewer
    driver: `}
                    <span className="text-content">claude</span>
                    {`

`}
                    <span className="text-accent">bots:</span>
                    {`
  - name: company-slack
    type: `}
                    <span className="text-content">slack</span>
                    {`
    agents:
      - agent: reviewer
        when: 'channel == "#code-review"'
      - agent: engineering
        when: true

  - name: oncall-sms
    type: `}
                    <span className="text-content">twilio</span>
                    {`
    agents:
      - agent: engineering
        when: true`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              What people actually use it for
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              The harness is already good at the work. Pantalk is what puts it
              in the room where the work gets asked for.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-8 rounded-2xl border border-stroke/50 bg-background-secondary/30 hover:bg-background-secondary/50 hover:border-accent/30 transition-all flex flex-col"
              >
                <useCase.icon className="size-10 text-accent mb-6" />
                <h3 className="text-xl font-semibold text-content mb-2">
                  {useCase.title}
                </h3>
                <p className="text-accent text-sm mb-4">{useCase.tagline}</p>
                <p className="text-content-secondary leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <p className="text-content-secondary/80 text-sm leading-relaxed mt-auto pt-4 border-t border-stroke/40">
                  {useCase.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-content-secondary text-sm">
              And because neither end is welded, none of these lock you in.
              Route <span className="text-content">#code-review</span> to Claude
              Code and the on-call SMS line to Codex, then swap either one next
              quarter without redoing a single platform integration.
            </p>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6">
              <Plug className="size-4 text-accent" />
              <span className="text-xs text-accent">Complete pluggability</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Bring your own harness
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Claude Code, Codex, Copilot, Gemini CLI, Goose, OpenCode, Aider -
              it doesn&apos;t matter. Pantalk never asks which one you picked,
              and the platform on the other end never finds out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="p-6 rounded-2xl border border-stroke/50 bg-background-secondary/30 hover:bg-background-secondary/50 hover:border-accent/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Sparkles className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-content leading-tight">
                      {agent.name}
                    </h3>
                    <span className="text-[11px] font-mono text-content-secondary">
                      {agent.driver}
                    </span>
                  </div>
                </div>
                <p className="text-content-secondary text-sm leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-content-secondary text-sm">
              Pantalk exposes chat as composable CLI skills. Any harness that
              supports tool-use, function calling, or shell execution picks them
              up instantly - zero custom integration code on either edge.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6">
              <Zap className="size-4 text-accent" />
              <span className="text-xs text-accent">Agent skills</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Built-in skills for every harness
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Pantalk ships with composable skills any harness can use as tools
              - each one maps to a single CLI command, and none of them mention
              a platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl border border-stroke/50 bg-background-secondary/30 hover:bg-background-secondary/50 hover:border-stroke transition-all group flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <skill.icon className="size-5 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-content">
                      {skill.title}
                    </h3>
                    <span className="text-[10px] font-mono text-content-secondary bg-background-tertiary/50 px-1.5 py-0.5 rounded">
                      {skill.name}
                    </span>
                  </div>
                  <p className="text-content-secondary text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Station Section */}
      <section id="station" className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6">
              <MonitorPlay className="size-4 text-accent" />
              <span className="text-xs text-accent">See it working</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Pantalk Station
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              The showcase. A browser-accessible Linux desktop with Pantalk,
              Codex, and Claude Code already installed and registered as agents
              - so you can watch a harness join a real chat server instead of
              taking our word for it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Boot the desktop',
                  description:
                    'One docker run, then open localhost in a browser. No VNC client, no dashboard, no setup wizard.',
                },
                {
                  step: '02',
                  title: 'Log into a harness',
                  description:
                    'Codex and Claude Code are preinstalled. The desktop Setup menu launches either login flow, and the credentials persist in a volume.',
                },
                {
                  step: '03',
                  title: 'Pick a deployment',
                  description:
                    'Station ships transport-neutral on purpose. A deployment recipe brings up Mattermost or an Ergo IRC server beside it and mounts the matching Pantalk config.',
                },
                {
                  step: '04',
                  title: 'Change your mind',
                  description:
                    'Swap which harness answers by editing one driver line. That is the entire demonstration - and the entire point.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-content mb-1">
                      {item.title}
                    </h3>
                    <p className="text-content-secondary text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-stroke bg-background-secondary/50 p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-stroke/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="text-content-secondary text-xs ml-2">
                    terminal
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2 break-all">
                      docker run -d --shm-size 1g -p 127.0.0.1:6902:6901
                      ghcr.io/pantalk/station:latest
                    </span>
                  </div>
                  <div className="text-content-secondary">
                    ▸ desktop ready at http://127.0.0.1:6902
                  </div>
                  <div className="mt-4">
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">
                      cd deployments/mattermost && make up
                    </span>
                  </div>
                  <div className="text-content-secondary">
                    ✓ mattermost + postgres + station
                  </div>
                  <div className="text-content-secondary">
                    ✓ bots provisioned: codex, claude
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="https://github.com/pantalk/station"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors"
                >
                  Open the Station repository
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <InstallationSection />

      {/* Architecture Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6">
                <Send className="size-4 text-accent" />
                <span className="text-xs text-accent">
                  Provider SDK abstraction
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-content mb-6">
                One protocol for every chat platform
              </h2>
              <p className="text-content-secondary text-lg mb-8">
                Your harness doesn&apos;t need to know Slack from Discord.
                Pantalk normalizes everything behind a single local protocol, so
                the only thing that ever has to learn a provider API is the
                daemon.
              </p>

              <ul className="space-y-4">
                {[
                  'Persistent connections to Slack, Discord, Mattermost, Telegram, WhatsApp, IRC, Matrix, Twilio, and Zulip',
                  'Native drivers for Claude Code and Codex, command driver for every other harness',
                  'Full conversation memory via local SQLite storage',
                  'Structured event stream for agent reasoning and tool-use',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="size-3 text-accent" />
                    </div>
                    <span className="text-content-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <Link href="/about" className="relative group">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/30 transition" />
                <div className="relative w-48 h-48 rounded-3xl border border-stroke bg-background-secondary/50 flex items-center justify-center group-hover:border-accent/50 transition-colors cursor-pointer">
                  <Logo className="size-24 text-accent animate-flip" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Project Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6">
                <Plug className="size-4 text-accent" />
                <span className="text-xs text-accent">Companion project</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-content mb-3">
                Give your harness tools too
              </h2>
              <p className="text-content-secondary">
                Pantalk plugs your harness into the platforms people talk on.{' '}
                <Link
                  href="https://mcpshim.dev"
                  className="text-accent hover:text-accent-secondary transition-colors"
                >
                  MCPShim
                </Link>{' '}
                plugs tools into the harness - exposing any MCP server as a
                standard CLI command. Together they form a complete agent
                infrastructure stack.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://mcpshim.dev"
                className="px-6 text-sm py-3 bg-accent hover:bg-accent-secondary text-black font-medium rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap"
              >
                Explore MCPShim
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://github.com/mcpshim/mcpshim"
                className="px-6 text-sm py-3 bg-background-secondary text-content-secondary hover:text-content border border-stroke rounded-full flex items-center justify-center gap-2 hover:bg-background-tertiary transition-all whitespace-nowrap"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Help & Support Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-content mb-4">
                Build with us
              </h2>
              <p className="text-content-secondary">
                Pantalk is open source. Follow development on GitHub, report
                issues, or contribute connectors and agent integrations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="https://github.com/pantalk/pantalk"
                className="h-12 px-6 text-sm bg-background-secondary border border-stroke text-content rounded-xl flex items-center gap-2 hover:bg-background-tertiary transition-all"
              >
                View on GitHub
              </Link>
              <Link
                href="https://github.com/pantalk/pantalk/issues"
                className="h-12 px-6 text-sm text-content-secondary hover:text-content rounded-xl flex items-center gap-2 transition border border-stroke hover:bg-background-secondary"
              >
                Report an Issue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.getLayout = function (children) {
  return (
    <>
      <Meta
        title="Pantalk - Any Agent, Any Chat"
        description="An open source daemon that puts the coding agent you already run - Claude Code, Codex, Copilot, Gemini CLI, Goose, OpenCode, Aider - into the chat apps your team already uses: Slack, Discord, Mattermost, Telegram, WhatsApp, IRC, Matrix, SMS, and Zulip. Nothing is welded together, so you can change either end later."
        keywords={[
          'pantalk',
          'agentic harness',
          'claude code in slack',
          'codex in slack',
          'ai agent chat',
          'agent infrastructure',
          'pantalk station',
          'chat automation',
          'daemon',
          'unix socket',
          'slack bot',
          'discord bot',
          'mattermost bot',
          'telegram bot',
          'whatsapp bot',
          'matrix bot',
          'zulip bot',
          'imessage bot',
          'agentic workflows',
          'llm tools',
          'go',
          'golang',
          'copilot',
          'claude',
          'gemini cli',
          'codex',
          'goose',
          'opencode',
          'aider',
          'mcpshim',
          'mcp',
          'model context protocol',
        ]}
        thisUrl="https://pantalk.dev"
      />
      <Navbar />
      <main className="pt-14">{children}</main>
    </>
  )
}
