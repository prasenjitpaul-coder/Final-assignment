import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">LOGO</a>

        <button
          className={`nav-toggle ${isOpen ? 'opened' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <button className="nav-cta">Create Account</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar