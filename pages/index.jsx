import Link from "next/link";

import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";

import {
  BellRing,
  Cable,
  Database,
  MessageSquareText,
  Send,
  Terminal,
  Workflow,
  Bot,
  Shield,
  Server,
  Download,
  ArrowRight,
  Check,
  Zap,
  Hash,
  Layers,
} from "lucide-react";

import {
  SiSlack,
  SiDiscord,
  SiMattermost,
  SiTelegram,
  SiClaude,
  SiGoogle,
  SiOpenai,
} from "react-icons/si";

const providers = [
  { name: "Slack", cmd: "slack", icon: SiSlack, color: "#E01E5A" },
  {
    name: "Discord",
    cmd: "discord",
    icon: SiDiscord,
    color: "#5865F2",
  },
  {
    name: "Mattermost",
    cmd: "mattermost",
    icon: SiMattermost,
    color: "#0058CC",
  },
  {
    name: "Telegram",
    cmd: "telegram",
    icon: SiTelegram,
    color: "#26A5E4",
  },
];

const agents = [
  { name: "Claude Code", icon: SiClaude, color: "#D97757" },
  { name: "OpenCode", icon: Terminal, color: "#22d3ee" },
  { name: "Codex CLI", icon: SiOpenai, color: "#ffffff" },
  { name: "Gemini CLI", icon: SiGoogle, color: "#4285F4" },
];

const features = [
  {
    icon: Terminal,
    title: "Chat in, CLI out",
    description:
      "Messages from Slack, Discord, Mattermost, and Telegram arrive as events you can read, pipe, and act on.",
  },
  {
    icon: Layers,
    title: "One daemon, all providers",
    description:
      "pantalkd holds persistent connections to every chat platform. One process. One Unix socket.",
  },
  {
    icon: Bot,
    title: "Made for agents",
    description:
      "DMs, @mentions, thread replies — your agent reads them as notifications and responds. No SDK.",
  },
  {
    icon: Database,
    title: "Everything in SQLite",
    description:
      "Every event persisted locally. History and notifications survive restarts and crashes.",
  },
  {
    icon: BellRing,
    title: "Smart notifications",
    description:
      "Knows when someone DMs your bot, mentions it, or replies in a thread it was in. Never miss a message.",
  },
  {
    icon: Shield,
    title: "Fails fast",
    description:
      "Unknown YAML keys, missing tokens, bad config — caught at startup, not at 3am.",
  },
];

const useCases = [
  {
    title: "AI agent inbox",
    description:
      "Someone messages your bot on Slack. Your LLM reads it, thinks, replies. All from the command line.",
    icon: Bot,
    example:
      "slack notifications --bot mybot --unseen | my-llm respond",
  },
  {
    title: "Chat-triggered automation",
    description:
      "People ask for deploys, status checks, or runbook actions in a channel. Your scripts pick it up and act.",
    icon: Workflow,
    example:
      "slack stream --bot ops --channel requests | handle-request",
  },
  {
    title: "One bot, every platform",
    description:
      "Same agent handles Slack, Discord, and Telegram. No separate integrations. Same interface.",
    icon: Server,
    example:
      "slack stream --bot support & discord stream --bot support",
  },
];

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center py-10 lg:py-40 mt-2">
        {/* <div className="hero-gradient absolute inset-0" /> */}
        <div className="grid-pattern absolute inset-0 opacity-50" />
        <img
          src="https://afterdark.so/_next/image?url=%2Fchill.png&w=3840&q=75&dpl=dpl_3bs9f1Vw8H3SwjbdfkDrhwegKDfM"
          alt="hero"
          className="absolute inset-0 object-cover w-full h-full opacity-10"
        />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-stroke bg-background-secondary/50 backdrop-blur-sm mb-8">
                <Terminal className="size-3 text-accent" />
                <span className="text-xs text-content-secondary font-mono">
                  Open source &middot; Written in Go
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
                <span className="text-content">Run local agents</span>
                <br />
                <span className="text-accent">through any chat</span>
                <br />
                <span className="text-content">from your terminal</span>
              </h1>

              <p className="text-lg md:text-xl text-content-secondary max-w-lg mb-10">
                A local daemon that connects Slack, Discord, Mattermost, and
                Telegram to your shell. No SDKs. Just Unix.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link
                  href="#installation"
                  className="h-12 px-8 text-base bg-accent hover:bg-accent-secondary text-black font-medium flex items-center gap-2 transition"
                >
                  <Download className="size-5" />
                  Install Pantalk
                </Link>
                <Link
                  href="https://github.com/pantalk/pantalk"
                  className="h-12 px-8 text-base text-content-secondary hover:text-content flex items-center gap-2 transition border border-stroke hover:border-stroke-secondary hover:bg-background-secondary"
                >
                  View on GitHub
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* <div className="mt-10 font-mono text-sm text-content-secondary">
                <span className="text-accent select-none">$ </span>
                <span>brew install pantalk</span>
              </div> */}
            </div>

            {/* Right: Terminal */}
            <div className="border border-stroke bg-background-secondary/50 backdrop-blur-sm overflow-hidden">
              {/* Tab bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-stroke/50 bg-background-tertiary/30">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 bg-red-500/60"
                    style={{ borderRadius: "50%" }}
                  />
                  <div
                    className="w-3 h-3 bg-yellow-500/60"
                    style={{ borderRadius: "50%" }}
                  />
                  <div
                    className="w-3 h-3 bg-green-500/60"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="flex items-center gap-1 ml-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 border border-accent/20 font-mono">
                    pantalk
                  </span>
                </div>
                <span className="text-content-secondary text-xs ml-auto hidden sm:inline font-mono">
                  macOS / Linux
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 md:p-6 font-mono text-left">
                <div className="space-y-4 text-xs md:text-sm">
                  <div>
                    <span className="text-content-secondary/50 italic">
                      # check unseen notifications
                    </span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-accent select-none">$</span>
                    <span className="text-content ml-2">
                      slack notifications --bot mybot --unseen
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="text-content-secondary/50 italic">
                      # pipe messages into your AI agent
                    </span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-accent select-none">$</span>
                    <span className="text-content ml-2">
                      slack stream --bot mybot | my-agent respond
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="text-content-secondary/50 italic">
                      # reply back to a thread
                    </span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-accent select-none">$</span>
                    <span className="text-content ml-2">
                      slack send --bot mybot --channel C0123 --text
                      &quot;done ✓&quot;
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="text-content-secondary/50 italic">
                      # same for Discord, Mattermost, Telegram
                    </span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-accent select-none">$</span>
                    <span className="text-content ml-2">
                      discord stream --bot ops | handle-requests
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Providers strip — instant recognition */}
      <section className="py-12 border-t border-stroke/50">
        <div className=" px-4">
          <p className="text-center text-content text-xs uppercase tracking-widest font-mono mb-8">
            Works with the chat apps you already use
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {providers.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 px-5 py-2.5 border border-stroke/50 bg-background-secondary/30 text-sm font-mono"
              >
                <p.icon className="size-4" style={{ color: p.color }} />
                <span className="text-content font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Bridge Section */}
      <section className="py-24 border-t border-stroke/50 overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Chat with any AI coding agent
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Message from Slack. Get a response from Claude Code. That&apos;s
              the idea.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Row 1: Chat platforms */}
            <div className="mb-2">
              <p className="text-xs uppercase tracking-widest font-mono text-content-secondary mb-3 text-center">
                Chat platforms
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {providers.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-center gap-2.5 p-3 border border-stroke/50 bg-background-secondary/30"
                  >
                    <p.icon
                      className="size-4 shrink-0"
                      style={{ color: p.color }}
                    />
                    <span className="text-content font-medium text-sm">
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center py-3">
              <div className="flex flex-col items-center gap-1 text-content-secondary/40">
                <div className="h-5 w-px bg-stroke" />
                <ArrowRight className="size-3 rotate-90" />
              </div>
            </div>

            {/* Row 2: Pantalk hub — wide bar */}
            <div className="relative mb-0">
              <div className="absolute -inset-x-8 -inset-y-4 bg-accent/5 blur-2xl" />
              <div className="relative border-2 border-accent/30 bg-background p-4 md:p-5 flex items-center justify-center gap-3">
                <Logo className="size-8 text-accent" />
                <div>
                  <span className="text-accent font-bold font-mono text-sm md:text-base">
                    pantalk
                  </span>
                  <span className="text-content-secondary text-xs md:text-sm ml-2 hidden sm:inline">
                    routes messages between any chat and any agent
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center py-3">
              <div className="flex flex-col items-center gap-1 text-content-secondary/40">
                <div className="h-5 w-px bg-stroke" />
                <ArrowRight className="size-3 rotate-90" />
              </div>
            </div>

            {/* Row 3: AI coding agents */}
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-content-secondary mb-3 text-center">
                AI coding agents
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {agents.map((a) => (
                  <div
                    key={a.name}
                    className="flex items-center justify-center gap-2.5 p-3 border border-stroke/50 bg-background-secondary/30"
                  >
                    <a.icon
                      className="size-4 shrink-0"
                      style={{ color: a.color }}
                    />
                    <span className="text-content font-medium text-sm">
                      {a.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example command below */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="border border-stroke bg-background-secondary/50 overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-2.5 border-b border-stroke/50 bg-background-tertiary/30">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 bg-red-500/60"
                      style={{ borderRadius: "50%" }}
                    />
                    <div
                      className="w-2.5 h-2.5 bg-yellow-500/60"
                      style={{ borderRadius: "50%" }}
                    />
                    <div
                      className="w-2.5 h-2.5 bg-green-500/60"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <span className="text-xs text-content-secondary font-mono">
                    example
                  </span>
                </div>
                <div className="p-4 md:p-5 font-mono text-xs md:text-sm space-y-3">
                  <div>
                    <span className="text-content-secondary/50 italic">
                      # Slack DM → Claude Code
                    </span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-accent select-none">$</span>
                    <span className="text-content ml-2">
                      slack stream --bot coder --notify | claude
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-content-secondary/50 italic">
                      # Discord thread → OpenCode
                    </span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-accent select-none">$</span>
                    <span className="text-content ml-2">
                      discord stream --bot helper --notify | opencode
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="p-6 border border-rose-300/50 bg-red-300/5 border-dashed">
              <ul className="space-y-3 text-content-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span> Import a
                  different SDK for every chat platform
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span> Handle
                  WebSocket reconnection, token refresh, rate limits
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span> Parse different
                  JSON event shapes per provider
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span> Can&apos;t pipe
                  chat messages to grep or your LLM
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span> New platform =
                  new integration from scratch
                </li>
              </ul>
            </div>

            <div className="p-6 border border-accent/20 bg-accent/5">
              <ul className="space-y-3 text-content-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span> One daemon, all
                  providers. Runs in the background.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span> Messages show up
                  in your terminal. That&apos;s it.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>{" "}
                  <code className="text-accent/80">stream</code>,{" "}
                  <code className="text-accent/80">notifications</code>,{" "}
                  <code className="text-accent/80">history</code>,{" "}
                  <code className="text-accent/80">send</code> — four commands.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span> Everything
                  stored in SQLite. Survives restarts and crashes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span> Pipe to grep,
                  jq, xargs, your LLM. Standard Unix.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              What it does
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Receives chat messages. Delivers them to your terminal. Lets you
              respond. That&apos;s it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 border border-stroke/50 bg-background-secondary/30 hover:bg-background-secondary/50 hover:border-stroke transition-all group"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
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

      {/* Architecture visual */}
      <section id="quick-start" className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              How it works
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Three things. That&apos;s the whole system.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Chat platforms row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {providers.map((p) => (
                <div
                  key={p.name}
                  className="p-4 border border-stroke/50 bg-background-secondary/30 text-center flex flex-col items-center gap-2"
                >
                  <p.icon className="size-5" style={{ color: p.color }} />
                  <span className="text-content font-medium text-sm">
                    {p.name}
                  </span>
                  <p className="text-content-secondary text-xs">
                    messages &amp; events
                  </p>
                </div>
              ))}
            </div>

            {/* Arrow: platforms → pantalkd */}
            <div className="flex justify-center my-4">
              <div className="flex flex-col items-center gap-1 text-content-secondary">
                <div className="h-6 w-px bg-stroke" />
                <span className="text-xs">messages flow in</span>
                <div className="h-6 w-px bg-stroke" />
                <ArrowRight className="size-3 rotate-90" />
              </div>
            </div>

            {/* pantalkd */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 items-center">
              <div className="md:col-start-2 p-6 border border-accent/30 bg-accent/5 text-center">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Logo className="size-7 text-accent" />
                </div>
                <h3 className="text-content font-semibold mb-1">pantalkd</h3>
                <p className="text-content-secondary text-xs">
                  Persistent sessions, SQLite storage, event routing
                </p>
              </div>
            </div>

            {/* Arrow: pantalkd → your tools */}
            <div className="flex justify-center my-4">
              <div className="flex flex-col items-center gap-1 text-content-secondary">
                <div className="h-6 w-px bg-stroke" />
                <span className="text-xs">Unix socket</span>
                <div className="h-6 w-px bg-stroke" />
                <ArrowRight className="size-3 rotate-90" />
              </div>
            </div>

            {/* Your tools */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 items-center">
              <div className="md:col-start-2 p-6 border border-stroke/50 bg-background-secondary/30 text-center">
                <Terminal className="size-10 text-accent mx-auto mb-3" />
                <h3 className="text-content font-semibold mb-1">
                  Your scripts &amp; agents
                </h3>
                <p className="text-content-secondary text-xs">
                  Shell scripts, AI agents, cron jobs, automation
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-step below architecture */}
          <div className="max-w-3xl mx-auto mt-20">
            <h3 className="text-4xl font-bold text-content mb-8 text-center">
              Get running in 3 steps
            </h3>
            <div className="space-y-14">
              {[
                {
                  step: "1",
                  title: "Add your bots",
                  desc: "Drop service names and bot tokens into a YAML file. Pantalk validates everything at startup.",
                  code: "pantalkctl setup --output pantalk.yaml",
                },
                {
                  step: "2",
                  title: "Run the daemon",
                  desc: "pantalkd connects to every chat platform and listens on a local Unix socket.",
                  code: "pantalkd --config pantalk.yaml",
                },
                {
                  step: "3",
                  title: "Read, respond, stream",
                  desc: "Messages arrive. Your agent or script handles them. Reply from the CLI.",
                  code: "slack stream --bot mybot --notify | my-agent respond",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="gap-4 items-center justify-center flex flex-col"
                >
                  <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-1 font-mono">
                    <span className="text-accent font-bold text-sm text-center">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <h4 className="text-lg font-semibold text-content mb-1 text-center">
                      {item.title}
                    </h4>
                    <p className="text-content-secondary text-sm mb-2 text-center">
                      {item.desc}
                    </p>
                    <p className="text-accent/80 text-xs font-mono bg-accent/5 px-3 py-1.5 border border-accent/10 text-center inline">
                      {item.code}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Install
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Go binaries. Install what you need.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                platform: "Daemon (required)",
                command:
                  "go install github.com/pantalk/pantalk/cmd/pantalkd@latest",
              },
              {
                platform: "Control CLI",
                command:
                  "go install github.com/pantalk/pantalk/cmd/pantalkctl@latest",
              },
              {
                platform: "Slack client",
                command:
                  "go install github.com/pantalk/pantalk/cmd/slack@latest",
              },
              {
                platform: "Discord client",
                command:
                  "go install github.com/pantalk/pantalk/cmd/discord@latest",
              },
              {
                platform: "Mattermost client",
                command:
                  "go install github.com/pantalk/pantalk/cmd/mattermost@latest",
              },
              {
                platform: "Telegram client",
                command:
                  "go install github.com/pantalk/pantalk/cmd/telegram@latest",
              },
            ].map((item) => (
              <div
                key={item.platform}
                className="border border-stroke bg-background-secondary/50 overflow-hidden"
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
          </div>

          <div className="text-center mt-12">
            <p className="text-content-secondary mb-4">
              Or clone the repo for all clients, sample configs, and source
            </p>
            <Link
              href="https://github.com/pantalk/pantalk"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors"
            >
              github.com/pantalk/pantalk
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

Index.getLayout = function (children) {
  return (
    <>
      <Meta
        title="Pantalk — Chat Messages In, Shell Commands Out"
        description="Open source daemon that pipes Slack, Discord, Mattermost, and Telegram messages to your local scripts and AI agents. No SDKs. Just Unix."
        keywords={[
          "pantalk",
          "chat cli",
          "chat terminal",
          "slack cli",
          "discord cli",
          "telegram cli",
          "mattermost cli",
          "chat bot automation",
          "ai agent chat",
          "unix daemon",
          "chat services",
          "devops chat",
          "chatbot toolkit",
          "go",
          "golang",
          "open source",
        ]}
        thisUrl="https://pantalk.dev"
      />
      <Navbar />
      <main className="pt-14">{children}</main>
      <Footer />
    </>
  );
};
