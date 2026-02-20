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
  List,
  MessageSquareText,
  Plug,
  Radio,
  Send,
  Server,
  Settings,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Built for AI agents',
    description:
      'Designed from the ground up to be used by AI agents - structured output, agent-native notifications, and skill definitions your agent can consume.',
  },
  {
    icon: MessageSquareText,
    title: 'Multi-platform presence',
    description:
      'Give your AI agent a voice on Slack, Discord, Mattermost, and Telegram from one unified interface. No per-platform code.',
  },
  {
    icon: Cable,
    title: 'Single daemon, all providers',
    description:
      'pantalkd manages all chat provider sessions in one process - auth, reconnects, rate limits - so your agent can focus on conversations.',
  },
  {
    icon: Database,
    title: 'Persistent conversation memory',
    description:
      'All messages and events are stored in SQLite so your agent retains full conversation context across restarts.',
  },
  {
    icon: BellRing,
    title: 'Smart notification routing',
    description:
      'Surface only the events that matter - mentions, DMs, and threads your agent is part of - as structured events ready for reasoning.',
  },
  {
    icon: Terminal,
    title: 'Unix-composable interface',
    description:
      'Simple CLI commands that compose with pipes, jq, and shell scripts - works with any language, framework, or orchestration tool.',
  },
]

const skills = [
  {
    icon: Send,
    name: 'pantalk-send-message',
    title: 'Send Message',
    description:
      'Send messages to any channel or thread across Slack, Discord, Mattermost, and Telegram.',
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
    name: 'GitHub Copilot',
    description:
      'Give Copilot the ability to send updates, triage issues, and notify your team across every chat platform.',
  },
  {
    name: 'Claude',
    description:
      'Let Claude monitor conversations, respond to mentions, and manage multi-platform threads autonomously.',
  },
  {
    name: 'Gemini',
    description:
      'Connect Gemini to your team channels so it can stream events, summarize discussions, and take action.',
  },
  {
    name: 'Codex',
    description:
      'Equip Codex with chat skills to report build results, post code reviews, and answer questions in real time.',
  },
  {
    name: 'OpenClaw',
    description:
      'Give OpenClaw agents persistent chat presence with full conversation memory and notification handling.',
  },
  {
    name: 'Any Agent',
    description:
      'Pantalk is agent-agnostic. Any AI that can call a CLI command or read from a Unix socket gets instant chat abilities.',
  },
]

const useCases = [
  {
    title: 'Agentic inbox triage',
    description:
      'Let your AI agent monitor multiple chat platforms, prioritize incoming messages, and respond or escalate autonomously.',
    icon: Bot,
  },
  {
    title: 'Autonomous incident response',
    description:
      'Stream alerts and threads into your agent for automated triage, runbook execution, and status updates across channels.',
    icon: Workflow,
  },
  {
    title: 'Multi-platform agent deployment',
    description:
      'Deploy one AI agent across Slack, Discord, Mattermost, and Telegram without writing provider-specific code.',
    icon: Server,
  },
]

function InstallationSection() {
  const [tab, setTab] = useState('agent')

  return (
    <section id="installation" className="py-24 border-t border-stroke/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
            Get your agent online in seconds
          </h2>
          <p className="text-content-secondary text-lg max-w-2xl mx-auto">
            Let your AI agent install Pantalk itself, or do it manually.
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
                        https://raw.githubusercontent.com/pantalk/skills/refs/heads/master/pantalk-install/SKILL.md
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
                Open source • Go • Built for AI agents
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-content">Pantalk</span>
              <br />
              <span className="text-accent text-glow">chat for AI agents</span>
            </h1>

            <p className="text-lg md:text-xl text-content-secondary max-w-xl mb-8">
              Give your AI agent a voice on every chat platform.
              <span className="text-content font-medium"> Pantalk</span> lets
              agents send, receive, and stream messages across Slack, Discord,
              Mattermost, and Telegram through a single interface.
            </p>

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
              Everything your agent needs to communicate
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              A complete agent communication layer - from sending messages to
              streaming events to managing multi-platform presence.
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
                Pantalk abstracts away provider SDK complexity so your AI agent
                talks to one stable local protocol instead of four different
                APIs.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: "Configure your agent's channels",
                    description:
                      'Define which Slack, Discord, Mattermost, or Telegram channels your agent should monitor and respond in.',
                  },
                  {
                    step: '02',
                    title: 'Start the daemon',
                    description:
                      'Run pantalkd to keep all provider sessions alive over a single Unix socket.',
                  },
                  {
                    step: '03',
                    title: 'Connect your agent',
                    description:
                      'Your AI agent sends, reads, and streams messages through pantalk or the socket protocol.',
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
                    terminal
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">pantalk setup</span>
                  </div>
                  <div className="text-content-secondary">
                    ✓ config ready (~/.config/pantalk/config.yaml)
                  </div>
                  <div className="text-content-secondary">
                    ✓ bots: slack, discord, mattermost, telegram
                  </div>
                  <div className="mt-4">
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">pantalkd &</span>
                  </div>
                  <div className="text-content-secondary">
                    ▸ daemon listening on pantalk.sock
                  </div>
                  <div className="mt-4">
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">
                      pantalk stream --bot my-bot --notify
                    </span>
                  </div>
                  <div className="text-content-secondary">
                    ▸ streaming inbound notifications...
                  </div>
                </div>
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
              What agents can do with Pantalk
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              From autonomous support agents to incident responders, Pantalk
              gives your AI the chat infrastructure it needs to operate
              independently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-8 rounded-2xl border border-stroke/50 bg-background-secondary/30 hover:bg-background-secondary/50 transition-all"
              >
                <useCase.icon className="size-10 text-accent mb-6" />
                <h3 className="text-xl font-semibold text-content mb-3">
                  {useCase.title}
                </h3>
                <p className="text-content-secondary leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6">
              <Plug className="size-4 text-accent" />
              <span className="text-xs text-accent">
                Universal compatibility
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Works with every AI agent
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Copilot, Claude, Gemini, Codex, OpenClaw - it doesn&apos;t matter.
              If your agent can run a command, it can talk to every chat
              platform. It simply works.
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
                  <h3 className="text-lg font-semibold text-content">
                    {agent.name}
                  </h3>
                </div>
                <p className="text-content-secondary text-sm leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-content-secondary text-sm">
              Pantalk exposes chat as composable CLI skills. Any AI agent that
              supports tool-use, function calling, or shell execution can pick
              them up instantly - zero custom integration code required.
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
              Built-in skills for every agent
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Pantalk ships with composable skills your AI agent can use as
              tools - each one maps to a single CLI command.
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
                Your agent doesn&apos;t need to know Slack from Discord. Pantalk
                normalizes everything behind a single local protocol so the
                agent can focus on reasoning and action.
              </p>

              <ul className="space-y-4">
                {[
                  'Persistent connections to Slack, Discord, Mattermost, and Telegram',
                  'Full conversation memory via local SQLite storage',
                  'Structured event stream for agent reasoning and tool-use',
                  'Composable CLI designed for LLM tool integration',
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
        title="Pantalk - Chat Infrastructure for AI Agents"
        description="Pantalk is an open source daemon that gives AI agents a single local interface to communicate across Slack, Discord, Mattermost, and Telegram."
        keywords={[
          'pantalk',
          'ai agent',
          'ai agent chat',
          'agent infrastructure',
          'chat automation',
          'daemon',
          'unix socket',
          'slack bot',
          'discord bot',
          'mattermost bot',
          'telegram bot',
          'agentic workflows',
          'llm tools',
          'go',
          'golang',
          'copilot',
          'claude',
          'gemini',
          'codex',
          'openclaw',
        ]}
        thisUrl="https://pantalk.dev"
      />
      <Navbar />
      <main className="pt-14">{children}</main>
    </>
  )
}
