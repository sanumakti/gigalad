"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Check } from "lucide-react"

export default function LadTokenPage() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "H57gd4TRhsehgSbrTe2bygibAKp2btvS1uEStolrpump"

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <span className="text-lg font-bold">L</span>
          </div>
          <span className="text-xl font-bold">Lad Token</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-green-400 transition-colors">
            About
          </a>
          <a href="#tokenomics" className="hover:text-green-400 transition-colors">
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-green-400 transition-colors">
            Roadmap
          </a>
          <a href="#chart" className="hover:text-green-400 transition-colors">
            Chart
          </a>
          <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">Buy Now</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
              <div className="text-4xl">👨‍🦲</div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Lad Token
        </h1>

        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Lad coin isn't just a coin — it's a cultural movement disguised as financial chaos. Built on pure internet
          energy, fueled by memes, and carried by a community that laughs louder than the market crashes, Lad coin
          proves you don't need utility when you've got virality. No promises, no guarantees, just moon-or-bust vibes
          with a side of chaos. Welcome to the world's funniest, most unserious serious investment.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="bg-green-900/50 text-green-400 border-green-500">
            0% TAX
          </Badge>
          <Badge variant="outline" className="bg-blue-900/50 text-blue-400 border-blue-500">
            LP LOCKED
          </Badge>
          <Badge variant="outline" className="bg-purple-900/50 text-purple-400 border-purple-500">
            CONTRACT RENOUNCED
          </Badge>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8">💰 Buy LAD</Button>
          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent">
            📊 View Chart
          </Button>
        </div>

        {/* Contract Address */}
        <Card className="mt-12 bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Contract Address</h3>
            <div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-4">
              <code className="text-green-400 text-sm break-all mr-4">{contractAddress}</code>
              <Button
                size="sm"
                variant="ghost"
                onClick={copyToClipboard}
                className="text-green-400 hover:text-green-300"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Join Revolution Banner */}
      <section className="text-center py-8">
        <Badge className="bg-yellow-600 text-black px-6 py-2 text-lg font-semibold">☀️ Join the $LAD Revolution ☀️</Badge>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-green-400">Tokenomics</h2>
          <p className="text-gray-300 text-lg">Fair distribution for the community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                {/* Liquidity Pool - 85% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="40"
                  strokeDasharray="425.6 75.4"
                  strokeDashoffset="0"
                />
                {/* Marketing - 10% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="40"
                  strokeDasharray="50.24 450.76"
                  strokeDashoffset="-425.6"
                />
                {/* Team - 5% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="40"
                  strokeDasharray="25.12 475.88"
                  strokeDashoffset="-475.84"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">85%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="font-semibold">Liquidity Pool</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-400">85%</span>
                <span className="text-blue-400">💧</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="font-semibold">Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-yellow-400">10%</span>
                <span className="text-red-400">📈</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="font-semibold">Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-purple-400">5%</span>
                <span className="text-yellow-400">🔒</span>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Total Supply</h3>
                <div className="text-3xl font-bold text-green-400">1,000,000,000 $LAD</div>
                <div className="text-sm text-gray-400 mt-2">🔒 LP Locked • 📋 Contract Renounced</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-orange-400">Roadmap</h2>
          <p className="text-gray-300 text-lg">Our journey to the moon and beyond</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-yellow-500 to-orange-500"></div>

          {/* Phase 1 */}
          <div className="relative mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl">🚀</div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Phase 1: Launch</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Token Launch
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Website Live
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Social Media Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Initial Marketing
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div></div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-2xl">💰</div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div></div>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Phase 2: Growth</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Community Building
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Partnerships
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> CEX Listings
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Influencer Outreach
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl">⭐</div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">Phase 3: Expansion</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Major Exchange Listings
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Mobile App
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> NFT Collection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> Governance
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div></div>
            </div>
          </div>

          {/* Beyond */}
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-lg">
              🚀 And Beyond... 🚀
            </Badge>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
            About $LAD
          </h2>
          <p className="text-gray-300 text-lg">The story behind the memecoin</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 border-0 p-2">
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-8xl mb-4">👨‍🦲</div>
                <div className="absolute top-4 right-4 text-2xl">💎</div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Lad coin isn't just a coin — it's a cultural movement disguised as financial chaos. Built on pure internet
              energy, fueled by memes, and carried by a community that laughs louder than the market crashes, Lad coin
              proves you don't need utility when you've got virality.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              No promises, no guarantees, just moon-or-bust vibes with a side of chaos. Welcome to the world's funniest,
              most unserious serious investment.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-purple-900/30 border-purple-500/50 text-center p-4">
                <div className="text-2xl mb-2">🏆</div>
                <div className="font-semibold text-purple-400">Community First</div>
              </Card>
              <Card className="bg-green-900/30 border-green-500/50 text-center p-4">
                <div className="text-2xl mb-2">🌍</div>
                <div className="font-semibold text-green-400">Global Movement</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Join the Community
        </h2>
        <p className="text-gray-300 text-lg mb-12">Be part of the $LAD family</p>

        <div className="flex justify-center gap-6">
          <Button size="lg" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-6 text-lg">
            <span className="mr-2">𝕏</span>X
          </Button>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
            <span className="mr-2">✈️</span>
            Telegram
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-slate-700">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-4">
            Made with ❤️ <span className="text-yellow-400">ApeLaunch</span>
          </p>
          <p className="text-sm text-gray-500">2025 $LAD. To the moon! 🚀</p>
        </div>
      </footer>
    </div>
  )
}
