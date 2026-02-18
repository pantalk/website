import React from 'react'

import Link from 'next/link'

import Logo from './Logo'

import { ArrowRight, Github, MessageCircle, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <section className="relative py-20 border-t border-stroke/50">
        <div className="container relative z-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-content mb-3">
                Ready to unify your chat workflows?
              </h2>
              <p className="text-content-secondary">
                Install Pantalk and start routing bot conversations through one
                local daemon.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="#installation"
                className="px-6 text-sm py-3 bg-accent hover:bg-accent-secondary text-black font-medium rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap"
              >
                Install Pantalk
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://github.com/pantalk/pantalk"
                className="px-6 text-sm py-3 bg-background-secondary text-content-secondary hover:text-content border border-stroke rounded-full flex items-center justify-center gap-2 hover:bg-background-tertiary transition-all whitespace-nowrap"
              >
                <Github className="size-4" />
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-stroke/50">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
            <div className="col-span-2 lg:col-span-1">
              <Link
                href="/"
                className="text-2xl font-medium flex items-center gap-2"
              >
                <Logo className="text-accent" />
                <span className="font-bold tracking-tight">pantalk</span>
              </Link>
              <p className="text-content-secondary text-sm mt-4 max-w-xs">
                Open source daemon + CLI toolkit for chat services. Built with
                Go and designed for Unix-style workflows.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <Link
                  href="https://github.com/pantalk/pantalk"
                  className="text-content-secondary hover:text-accent transition-colors"
                >
                  <Github className="size-5" />
                </Link>
                <Link
                  href="https://x.com/ChatBotKit"
                  className="text-content-secondary hover:text-accent transition-colors"
                >
                  <Twitter className="size-5" />
                </Link>
                <Link
                  href="https://discord.gg/2aC9sDArcm"
                  className="text-content-secondary hover:text-accent transition-colors"
                >
                  <MessageCircle className="size-5" />
                </Link>
              </div>
            </div>

            {[
              {
                title: 'Product',
                links: [
                  { name: 'Features', href: '#features' },
                  { name: 'Quick Start', href: '#quick-start' },
                  { name: 'Installation', href: '#installation' },
                  {
                    name: 'README',
                    href: 'https://github.com/pantalk/pantalk#readme',
                  },
                ],
              },
              {
                title: 'Connectors',
                links: [
                  {
                    name: 'Slack',
                    href: 'https://github.com/pantalk/pantalk#quick-start',
                  },
                  {
                    name: 'Discord',
                    href: 'https://github.com/pantalk/pantalk#quick-start',
                  },
                  {
                    name: 'Mattermost',
                    href: 'https://github.com/pantalk/pantalk#quick-start',
                  },
                  {
                    name: 'Telegram',
                    href: 'https://github.com/pantalk/pantalk#quick-start',
                  },
                ],
              },
              {
                title: 'Resources',
                links: [
                  {
                    name: 'GitHub',
                    href: 'https://github.com/pantalk/pantalk',
                  },
                  {
                    name: 'Issues',
                    href: 'https://github.com/pantalk/pantalk/issues',
                  },
                  { name: 'Discord', href: 'https://discord.gg/2aC9sDArcm' },
                  { name: 'About', href: 'https://cbk.ai/about' },
                ],
              },
              {
                title: 'Legal',
                links: [
                  { name: 'Privacy', href: 'https://cbk.ai/privacy' },
                  { name: 'Terms', href: 'https://cbk.ai/terms' },
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-medium text-content mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-content-secondary hover:text-content text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-stroke/50 mt-12 pt-8">
            <p className="text-sm text-content-secondary text-center">
              © {new Date().getFullYear()} ChatBotKit, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
