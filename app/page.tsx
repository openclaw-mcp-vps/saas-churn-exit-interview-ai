export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Churn Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Find out exactly why customers leave —{" "}
          <span className="text-[#58a6ff]">before it's too late</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          ChurnIQ detects cancellations via webhook, instantly sends AI-crafted exit interview emails, and surfaces actionable insights so you can fix what's broken.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $16/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["Webhook churn detection", "OpenAI-generated questions", "Automated email campaigns", "Response analytics", "Supabase persistence", "Lemon Squeezy billing"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Single Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$16<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-8">Everything you need to stop churn</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited churn webhooks",
              "AI exit interview generation",
              "Automated email delivery",
              "Response sentiment analysis",
              "Dashboard with churn insights",
              "Supabase data storage",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does churn detection work?</h3>
            <p className="text-sm text-[#8b949e]">ChurnIQ listens to webhooks from your billing provider (e.g. Stripe or Lemon Squeezy). When a cancellation event fires, we immediately trigger the exit interview flow — no manual work needed.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What AI model powers the interviews?</h3>
            <p className="text-sm text-[#8b949e]">We use OpenAI GPT-4o to craft personalized exit interview questions based on the customer's usage history and subscription tier, making responses far more insightful than generic surveys.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I customize the email templates?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Your dashboard lets you edit the email subject, tone, and follow-up cadence. The AI adapts its questions within your template, so your brand voice stays consistent.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChurnIQ. Built for SaaS founders.
      </footer>
    </main>
  )
}
