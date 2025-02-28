import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <header>
        <Link href="/">
        <h1>StoryTeller AI</h1>
        <div>
            <h2>
                Bringing your stories to life with AI
            </h2>
        </div>
        </Link>
    </header>
  )
}

export default Header