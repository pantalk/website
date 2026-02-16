import Link from 'next/link'

import Footer from '@/components/Footer'
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'

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
  Check
} from 'lucide-react'

const features = [
  {
    icon: Cable,
    title: 'Single daemon architecture',
    description: 'pantalkd keeps provider sessions alive in one local process and exposes a clean Unix socket interface.',
  },
  {
    icon: MessageSquareText,
    title: 'Multi-service connectors',
    description: 'Run Slack, Discord, Mattermost, and Telegram bots from the same local workflow.',
  },
  {
    icon: Terminal,
    title: 'Unix-native CLI workflows',
    description: 'Use simple commands that compose with grep, jq, xargs, and your existing shell automation.',
  },
  {
    icon: Database,
    title: 'Persistent local history',
    description: 'All events are persisted in SQLite so history and notifications survive process restarts.',
  },
  {
    icon: BellRing,
    title: 'Agent-friendly notifications',
    description: 'Read unseen, mention, DM, and route-aware events without dropping into service-specific SDKs.',
  },
  {
    icon: Shield,
    title: 'Strict config validation',
    description: 'Unknown keys and missing required fields fail fast to keep bot routing predictable and safe.',
  },
]

const useCases = [
  {
    title: 'Agent inbox automation',
    description: 'Pipe Pantalk notifications into AI agents to triage inbound messages and trigger workflows.',
    icon: Bot,
  },
  {
    title: 'Ops incident response',
    description: 'Stream channels and threads to local tooling for routing incidents and posting automated updates.',
    icon: Workflow,
  },
  {
    title: 'Service bridge for teams',
    description: 'Standardize how bots send, receive, and track conversations across multiple chat providers.',
    icon: Server,
  },
]

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
              <span className="text-xs text-content-secondary">Open source • Go • Unix socket protocol</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-content">Pantalk</span>
              <br />
              <span className="text-accent text-glow">chat services</span>
              <br />
              <span className="text-content-secondary">through one local daemon</span>
            </h1>
            
            <p className="text-lg md:text-xl text-content-secondary max-w-xl mb-8">
              <span className="text-content font-medium">Pantalk</span> is a Unix-style client-server toolkit that keeps upstream chat sessions persistent and gives bots, scripts, and agents a simple local interface.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="#installation"
                className="h-12 px-6 text-base bg-accent hover:bg-accent-secondary text-black font-medium rounded-xl flex items-center gap-2 transition glow"
              >
                <Download className="size-5" />
                Install from Source
              </Link>
              <Link
                href="https://github.com/chatbotkit/pantalk"
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
              Built for chat automation
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              One local control plane for multi-platform bot messaging, streaming, and agent-driven workflows.
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
                <h3 className="text-lg font-semibold text-content mb-2">{feature.title}</h3>
                <p className="text-content-secondary text-sm leading-relaxed">{feature.description}</p>
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
                Pantalk centralizes provider SDK complexity in one daemon so your tools can communicate through a stable local protocol.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Define services and bots', description: 'Configure Slack, Discord, Mattermost, or Telegram bots in a strict YAML file.' },
                  { step: '02', title: 'Run pantalkd locally', description: 'Start the daemon to keep provider sessions persistent over one Unix socket.' },
                  { step: '03', title: 'Send, read, and stream', description: 'Use pantalk clients and pantalkctl for history, notifications, and routing.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-content mb-1">{item.title}</h3>
                      <p className="text-content-secondary text-sm">{item.description}</p>
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
                  <span className="text-content-secondary text-xs ml-2">terminal</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">cp configs/pantalk.example.yaml configs/pantalk.yaml</span>
                  </div>
                  <div className="text-content-secondary">
                    ✓ config ready
                  </div>
                  <div className="text-content-secondary">
                    ✓ services: slack, discord, mattermost, telegram
                  </div>
                  <div className="mt-4">
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">go run ./cmd/pantalkd --config ./configs/pantalk.yaml</span>
                  </div>
                  <div className="text-content-secondary">
                    ▸ daemon listening on /tmp/pantalk.sock
                  </div>
                  <div className="mt-4">
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">go run ./cmd/pantalk-slack stream --bot team-a --notify</span>
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
              Built for your workflow
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Whether you&apos;re running AI agents, handling support queues, or orchestrating team bots, Pantalk fits into your existing CLI stack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-8 rounded-2xl border border-stroke/50 bg-background-secondary/30 hover:bg-background-secondary/50 transition-all"
              >
                <useCase.icon className="size-10 text-accent mb-6" />
                <h3 className="text-xl font-semibold text-content mb-3">{useCase.title}</h3>
                <p className="text-content-secondary leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Get started in seconds
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Install the core daemon and CLI clients directly from the Pantalk source repository.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { platform: 'Daemon', command: 'go install github.com/chatbotkit/pantalk/cmd/pantalkd@latest' },
              { platform: 'Control CLI', command: 'go install github.com/chatbotkit/pantalk/cmd/pantalkctl@latest' },
              { platform: 'Service Clients', command: 'go install github.com/chatbotkit/pantalk/cmd/pantalk-slack@latest' },
            ].map((item) => (
              <div key={item.platform} className="rounded-xl border border-stroke bg-background-secondary/50 overflow-hidden">
                <div className="px-4 py-2 border-b border-stroke/50 bg-background-tertiary/30">
                  <span className="text-sm text-content-secondary">{item.platform}</span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <code className="text-accent">{item.command}</code>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-content-secondary mb-4">
              Clone the repo to run all service clients and sample configs
            </p>
            <Link
              href="https://github.com/chatbotkit/pantalk"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors"
            >
              Open repository
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6">
                <Send className="size-4 text-accent" />
                <span className="text-xs text-accent">Provider SDK abstraction</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-content mb-6">
                One protocol, many chat services
              </h2>
              <p className="text-content-secondary text-lg mb-8">
                Pantalk keeps chat provider complexity behind a stable local server so your agents and scripts can focus on routing logic.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Persistent connectors for Slack, Discord, Mattermost, and Telegram',
                  'Local SQLite-backed history and notification persistence',
                  'Route-aware send and stream APIs for bots and agents',
                  'Composable CLI interface for shell-driven automation',
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
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                <div className="relative w-48 h-48 rounded-3xl border border-stroke bg-background-secondary/50 flex items-center justify-center">
                  <Logo className="size-24 text-accent" />
                </div>
              </div>
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
                Need help?
              </h2>
              <p className="text-content-secondary">
                Follow development on GitHub and join the community for support, updates, and integration ideas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="https://discord.gg/2aC9sDArcm"
                className="h-12 px-6 text-sm bg-background-secondary border border-stroke text-content rounded-xl flex items-center gap-2 hover:bg-background-tertiary transition-all"
              >
                Join Discord Community
              </Link>
              <Link
                href="https://github.com/chatbotkit/pantalk/issues"
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
        title="Pantalk - Open Source Chat Services Daemon"
        description="Pantalk is an open source Unix-style daemon and CLI toolkit for Slack, Discord, Mattermost, and Telegram bot workflows."
        keywords={[
          'pantalk',
          'chat services',
          'chatbot automation',
          'daemon',
          'unix socket',
          'slack bot',
          'discord bot',
          'mattermost bot',
          'telegram bot',
          'sqlite history',
          'automation',
          'cli',
          'go',
          'golang',
        ]}
        thisUrl="https://pantalk.chatbotkit.com"
      />
      <Navbar />
      <main className="pt-14">{children}</main>
      <Footer />
    </>
  )
}
