import Link from 'next/link'

import Logo from '@/components/Logo'
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'

import {
  ArrowRight,
  Cable,
  Heart,
  MessageSquareText,
  Plug,
  Radio,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150" />
                <Logo className="size-28 text-accent relative animate-flip" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-content">Hi, I&apos;m </span>
              <span className="text-accent text-glow">Pantalk</span>
            </h1>

            <p className="text-lg md:text-xl text-content-secondary max-w-2xl mx-auto">
              I put the coding agent you already run into the chat apps your
              team already uses - and I don&apos;t weld the two together, so you
              can change either one later.
            </p>
          </div>
        </div>
      </section>

      {/* Story: Why I Exist */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-8 text-lg leading-relaxed">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5">
              <Sparkles className="size-4 text-accent" />
              <span className="text-xs text-accent">My story</span>
            </div>

            <p className="text-content-secondary">
              <span className="text-content font-medium">
                Let me tell you why I was built.
              </span>{' '}
              Agentic harnesses are getting better every month. Claude Code,
              Codex, Copilot, Gemini CLI, Goose, OpenCode, Aider - they reason,
              plan, search, code, and make decisions. But when it comes to
              actually <em>talking</em> to people? They hit a wall.
            </p>

            <p className="text-content-secondary">
              Plenty of people have noticed. A Claude tag will put Claude in
              Slack. Block&apos;s Buzz will put Block&apos;s agents in
              Block&apos;s workspace. Both are good. Both also make the decision
              for you: one harness, welded to one platform. If you change
              harnesses - and you will - you start over.
            </p>

            <p className="text-content-secondary">
              And the platform side is no easier. Slack has one API. Discord has
              another. Mattermost, Telegram, WhatsApp, IRC, XMPP/Jabber, Twitch,
              Nostr, Matrix, Twilio, Zulip, iMessage - each one speaks a
              different language with different auth flows, different event
              models, and different threading semantics. An agent that wants to
              monitor a Slack channel, reply in an XMPP room, and post to a
              Nostr group has to juggle three SDKs, three connection lifecycles,
              and three completely different data shapes.
            </p>

            <p className="text-content-secondary">
              <span className="text-content font-medium">
                That&apos;s where I come in.
              </span>{' '}
              I sit in the middle and I refuse to pair anything. Harnesses
              attach to me on one side through drivers. Platforms attach on the
              other through connectors. I keep the connections alive, normalize
              the events, and store the history - and neither side ever learns
              anything about the other.
            </p>

            <blockquote className="border-l-2 border-accent pl-6 py-2 text-content italic">
              &ldquo;Any agent, any chat.&rdquo;
            </blockquote>

            <p className="text-content-secondary">
              Your harness doesn&apos;t need to know it&apos;s talking to Slack
              or Discord. Slack doesn&apos;t need to know it&apos;s talking to
              Claude Code. Both just talk to me, and I handle the rest. Simple
              CLI commands, Unix socket protocol, JSON in and out. The way tools
              should work.
            </p>
          </div>
        </div>
      </section>

      {/* How I Think */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-12">
              How I think about things
            </h2>

            <div className="space-y-12">
              {[
                {
                  icon: Plug,
                  title: 'Nothing gets welded together',
                  body: "A harness is a driver line. A platform is a type line. Neither is allowed to know about the other, so replacing one never costs you the other. That is not a feature I added later - it's the shape of the whole thing.",
                },
                {
                  icon: Cable,
                  title: 'Connections are my job, not yours',
                  body: 'I keep persistent sessions to every chat platform so your harness never has to worry about reconnecting, refreshing tokens, or handling websocket drops. That complexity lives inside me.',
                },
                {
                  icon: Terminal,
                  title: "If it can't be piped, it's broken",
                  body: "Every action I expose is a CLI command that outputs clean, parseable data. Your harness can call me as a tool, pipe my output through jq, or chain me into any shell workflow. I'm designed to be composed.",
                },
                {
                  icon: MessageSquareText,
                  title: "Memory shouldn't be optional",
                  body: 'I persist every message and event to a local SQLite database, with sessions isolated per bot, channel, and thread. Your harness can read history, poll for notifications, and pick up exactly where it left off - even after a restart on either side.',
                },
                {
                  icon: Radio,
                  title: 'Real-time when you need it',
                  body: "Sometimes polling isn't enough. I offer real-time event streaming so your harness can react instantly to mentions, DMs, and messages as they arrive across any platform.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <item.icon className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-content mb-2">
                      {item.title}
                    </h3>
                    <p className="text-content-secondary leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Made Of */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-8 text-lg leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              What I&apos;m made of
            </h2>

            <p className="text-content-secondary">
              I&apos;m written in{' '}
              <span className="text-content font-medium">Go</span> - fast,
              statically typed, and easy to deploy as a single binary. No
              runtimes, no containers required (though you can use them if you
              want).
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Language', value: 'Go' },
                { label: 'Protocol', value: 'Unix socket + JSON' },
                { label: 'Storage', value: 'SQLite' },
                { label: 'License', value: 'Open source' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl border border-stroke/50 bg-background-secondary/30"
                >
                  <p className="text-xs text-content-secondary mb-1">
                    {item.label}
                  </p>
                  <p className="text-content font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <p className="text-content-secondary">
              My architecture is simple on purpose. One daemon process (
              <span className="text-accent font-mono text-base">pantalkd</span>)
              manages all the connections. CLI clients talk to it over a Unix
              socket. Everything is local, fast, and private.
            </p>
          </div>
        </div>
      </section>

      {/* Who I'm For */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-8 text-lg leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Who I&apos;m for
            </h2>

            <p className="text-content-secondary">
              I was built for{' '}
              <span className="text-content font-medium">
                agentic harnesses
              </span>{' '}
              and the people who run them. If you want your harness to:
            </p>

            <ul className="space-y-3">
              {[
                'Open PRs and fix failing tests in the thread that asked for it',
                'Triage incidents in-channel, or over SMS to a phone with no app on it',
                'Serve your whole team from one Claude or Codex seat, not one each',
                'Be reachable by people who will never install anything',
                'Survive you replacing it with a better harness six months from now',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Zap className="size-4 text-accent mt-1.5 shrink-0" />
                  <span className="text-content-secondary">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-content-secondary">
              &hellip;then I&apos;m your infrastructure. You focus on the
              reasoning. I&apos;ll handle the talking.
            </p>

            <p className="text-content-secondary">
              If you&apos;d rather see it than read about it, my siblings built{' '}
              <Link
                href="https://github.com/pantalk/ghost"
                className="text-accent hover:text-accent-secondary transition-colors"
              >
                Pantalk Ghost
              </Link>{' '}
              - an always-on agent computer in the same broad category as
              OpenClaw and Hermes, but with one important difference: Ghost
              does not invent another agent runtime. It supplies the persistent
              Linux workspace, desktop, credentials, and chat reach, while
              Codex, Claude Code, Goose, or another harness remains the agent.
              The current image includes Codex, Claude Code, and Kimi Code, plus
              one-command deployments that connect the same environment to a
              real Mattermost or IRC server.
            </p>
          </div>
        </div>
      </section>

      {/* Built By */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Heart className="size-8 text-accent mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-content">
              Built with care
            </h2>
            <p className="text-content-secondary text-lg max-w-xl mx-auto">
              I&apos;m an open source project by{' '}
              <Link
                href="https://cbk.ai"
                className="text-accent hover:text-accent-secondary transition-colors"
              >
                CBK AI
              </Link>
              . You can explore my code, report issues, or contribute on GitHub.
            </p>
            <p className="text-content-secondary text-base max-w-xl mx-auto mt-4">
              Also check out{' '}
              <Link
                href="https://mcpshim.dev"
                className="text-mcpshim hover:text-mcpshim-secondary transition-colors"
              >
                MCPShim
              </Link>{' '}
              - my sibling project that exposes any MCP server as a standard CLI
              command for AI agents.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link
                href="https://github.com/pantalk/pantalk"
                className="h-12 px-6 text-base bg-accent hover:bg-accent-secondary text-black font-medium rounded-xl flex items-center gap-2 transition glow"
              >
                View on GitHub
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/"
                className="h-12 px-6 text-base text-content-secondary hover:text-content rounded-xl flex items-center gap-2 transition border border-stroke hover:border-stroke-secondary hover:bg-background-secondary"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/** @param {import('react').ReactNode} children */
About.getLayout = function (children) {
  return (
    <>
      <Meta
        title="About Pantalk - Any Agent, Any Chat"
        description="Pantalk is an open source daemon that puts the coding agent you already run - Claude Code, Codex, Copilot, Gemini CLI, Goose, OpenCode, Aider - into the chat apps your team already uses, without welding the two together. Here's why it exists."
        keywords={[
          'pantalk',
          'about',
          'agentic harness',
          'ai agent',
          'chat infrastructure',
          'pantalk ghost',
          'open source',
          'daemon',
          'unix socket',
          'go',
        ]}
        thisUrl="https://pantalk.dev/about"
      />
      <Navbar />
      <main className="pt-14">{children}</main>
    </>
  )
}
