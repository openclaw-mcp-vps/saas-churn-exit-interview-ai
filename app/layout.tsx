import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnIQ — AI Exit Interviews for SaaS',
  description: 'Automatically email churning customers with AI-generated exit interview questions and analyze responses to reduce churn.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="beee82ca-3403-4839-a701-e6562edfed15"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
