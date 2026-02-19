import Link from 'next/link'

import Logo from '@/components/Logo'
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'

import {
  ArrowRight,
  Cable,
  Heart,
  MessageSquareText,
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
              I exist so AI agents can talk to humans on the platforms they
              already use - without the mess.
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
              AI agents are getting smarter every day. They can reason, plan,
              search, code, and make decisions. But when it comes to actually{' '}
              <em>talking</em> to people? They hit a wall.
            </p>

            <p className="text-content-secondary">
              Slack has one API. Discord has another. Mattermost, Telegram,
              WhatsApp -
              each one speaks a different language with different auth flows,
              different event models, different threading semantics. An agent
              that wants to monitor a Slack channel, reply in a Discord thread,
              and post an update to Telegram has to juggle three SDKs, three
              connection lifecycles, and three completely different data shapes.
            </p>

            <p className="text-content-secondary">
              <span className="text-content font-medium">
                That&apos;s where I come in.
              </span>{' '}
              I sit between your AI agent and all those platforms. I keep the
              connections alive. I normalize the events. I store the history.
              And I give your agent one simple, clean interface to do
              everything: send messages, read conversations, stream events,
              check notifications.
            </p>

            <blockquote className="border-l-2 border-accent pl-6 py-2 text-content italic">
              &ldquo;One daemon. One protocol. Every platform.&rdquo;
            </blockquote>

            <p className="text-content-secondary">
              Your agent doesn&apos;t need to know it&apos;s talking to Slack or
              Discord. It just talks to me, and I handle the rest. Simple CLI
              commands, Unix socket protocol, JSON in and out. The way tools
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
                  icon: Cable,
                  title: 'Connections are my job, not yours',
                  body: 'I keep persistent sessions to every chat platform so your agent never has to worry about reconnecting, refreshing tokens, or handling websocket drops. That complexity lives inside me.',
                },
                {
                  icon: Terminal,
                  title: "If it can't be piped, it's broken",
                  body: "Every action I expose is a CLI command that outputs clean, parseable data. Your agent can call me as a tool, pipe my output through jq, or chain me into any shell workflow. I'm designed to be composed.",
                },
                {
                  icon: MessageSquareText,
                  title: "Memory shouldn't be optional",
                  body: 'I persist every message and event to a local SQLite database. Your agent can read conversation history, poll for new notifications, and pick up exactly where it left off - even after a restart.',
                },
                {
                  icon: Radio,
                  title: 'Real-time when you need it',
                  body: "Sometimes polling isn't enough. I offer real-time event streaming so your agent can react instantly to mentions, DMs, and messages as they arrive across any platform.",
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
              <span className="text-content font-medium">AI agents</span> and
              the people who build them. If you&apos;re creating an agent that
              needs to:
            </p>

            <ul className="space-y-3">
              {[
                'Monitor Slack channels for support requests and triage them',
                'Post incident updates across Discord and Mattermost simultaneously',
                'Stream real-time messages for sentiment analysis or keyword detection',
                'Maintain multi-turn conversations across platforms with full context',
                'Run as a background service on a server, headless and autonomous',
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

About.getLayout = function (children) {
  return (
    <>
      <Meta
        title="About Pantalk - Chat Infrastructure for AI Agents"
        description="Pantalk is an open source daemon that gives AI agents a single local interface to communicate across Slack, Discord, Mattermost, Telegram, and WhatsApp. Here's why it exists."
        keywords={[
          'pantalk',
          'about',
          'ai agent',
          'chat infrastructure',
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
