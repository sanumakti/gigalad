"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Check } from "lucide-react"

export default function ChadiusPage() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0x00b74d0a899f7135b0430999ff83a2feb5cc578b"

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/images/chadius-mascot-clean-new.png"
              alt="CHADIUS Mascot"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold text-white">CHADIUS</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#tokenomics" className="hover:text-blue-400 transition-colors">
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-blue-400 transition-colors">
            Roadmap
          </a>
          <a href="#chart" className="hover:text-blue-400 transition-colors">
            Chart
          </a>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">Buy Now</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-white">
            <img
              src="/images/chadius-mascot-clean-new.png"
              alt="CHADIUS Mascot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          CHADIUS
        </h1>

        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Born from pure sigma energy and financial chaos, CHADIUS emerges as the ultimate internet legend. This isn't
          just another token — it's a cultural movement that laughs at FUD, roasts the market, and thrives on Base
          Network where true on-chain warriors belong.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="bg-blue-900/50 text-blue-400 border-blue-500">
            0% TAX
          </Badge>
          <Badge variant="outline" className="bg-slate-900/50 text-white border-slate-500">
            LP LOCKED
          </Badge>
          <Badge variant="outline" className="bg-black/50 text-gray-300 border-gray-500">
            CONTRACT RENOUNCED
          </Badge>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8">Buy CHADIUS</Button>
          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent">
            View Chart
          </Button>
        </div>

        {/* Contract Address */}
        <Card className="mt-12 bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Contract Address</h3>
            <div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-4">
              <code className="text-blue-400 text-sm break-all mr-4">{contractAddress}</code>
              <Button size="sm" variant="ghost" onClick={copyToClipboard} className="text-blue-400 hover:text-blue-300">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Join Revolution Banner */}
      <section className="text-center py-8">
        <Badge className="bg-blue-600 text-white px-6 py-2 text-lg font-semibold">Join the $CHADIUS Revolution</Badge>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-blue-400">Tokenomics</h2>
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
                  stroke="#3b82f6"
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
                  stroke="#ffffff"
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
                  stroke="#000000"
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
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="font-semibold">Liquidity Pool</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-400">85%</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span className="font-semibold">Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">10%</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-black rounded-full border border-gray-500"></div>
                <span className="font-semibold">Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-300">5%</span>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Total Supply</h3>
                <div className="text-3xl font-bold text-blue-400">1,000,000,000 $CHADIUS</div>
                <div className="text-sm text-gray-400 mt-2">LP Locked • Contract Renounced</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-blue-400">Roadmap</h2>
          <p className="text-gray-300 text-lg">Our journey to the moon and beyond</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-white to-black"></div>

          {/* Phase 1 */}
          <div className="relative mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                LAUNCH
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Phase 1: Launch</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> Token Launch
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> Website Live
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> Social Media Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> Initial Marketing
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
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-sm font-bold text-black">
                GROW
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div></div>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Phase 2: Growth</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> Community Building
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> Partnerships
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> CEX Listings
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> Influencer Outreach
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-black border-2 border-white rounded-full flex items-center justify-center text-sm font-bold text-white">
                EXPAND
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-300 mb-4">Phase 3: Expansion</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> Major Exchange Listings
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> Mobile App
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> NFT Collection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span> Governance
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div></div>
            </div>
          </div>

          {/* Beyond */}
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 text-lg">
              And Beyond...
            </Badge>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About $CHADIUS
          </h2>
          <p className="text-gray-300 text-lg">The story behind the memecoin</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="text-center">
              <img
                src="/images/chadius-mascot-fullbody.png"
                alt="CHADIUS Mascot"
                className="w-full max-w-md mx-auto h-auto object-contain"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Legend speaks of CHADIUS, forged in the depths of internet culture where sigma energy meets financial
              rebellion. Rising from the ashes of market crashes and meme wars, this blue titan found his home on Base
              Network — the ultimate battlefield for on-chain degenerates and diamond hands alike.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              While paper hands panic and FUD spreads like wildfire, CHADIUS stands unmoved — a beacon of chaos in the
              crypto storm. This isn't just another pump and dump; it's a movement that turns market fear into meme
              fuel. Watch as CHADIUS makes his grand debut on Ape.Store, ready to flip the script on traditional
              finance.
            </p>

            <div className="mt-8 p-6 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <p className="text-blue-400 text-xl font-bold text-center">
                "Built on Base, launched on Ape.Store, powered by pure meme energy — welcome to the CHADIUS revolution."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Join the Community
        </h2>
        <p className="text-gray-300 text-lg mb-12">Be part of the $CHADIUS family</p>

        <div className="flex justify-center gap-6">
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg border border-gray-600"
            onClick={() => window.open("https://x.com/Basedchadius", "_blank")}
          >
            <span className="mr-2 font-bold">X</span>Twitter
          </Button>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
            <span className="mr-2 font-bold">TG</span>
            Telegram
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-slate-700">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-4">
            Made with love by <span className="text-blue-400">ApeLaunch</span>
          </p>
          <p className="text-sm text-gray-500">2025 $CHADIUS. To the moon!</p>
        </div>
      </footer>
    </div>
  )
}
