import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'INCLUSIA 2025',
  description: 'Colloque international pour un avenir durable et inclusif',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar /> {/* Affiche la navigation en haut de page */}

      <body>{children}</body>
    </>
  )
}