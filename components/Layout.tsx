import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className="bg-yellow-100 flex flex-col leading-normal min-h-screen">
      <header className="bg-white border-b p-4">
        <div className="container mx-auto w-full">
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <a href="#!" className="font-medium text-blue-700">
                nextjs-starter
              </a>
            </Link>
          </div>
          <div></div>
        </div>
      </header>
      <main className="flex-auto p-4">
        <div className="container mx-auto w-full">{children}</div>
      </main>
      <footer className="bg-white border-t p-4">
        <div className="container mx-auto w-full">
          <p className="text-center">
            <span>Created by </span>
            <a
              href="https://twitter.com/durancristhian"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700"
            >
              @durancristhian
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
