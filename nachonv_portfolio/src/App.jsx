import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      {/* Header con año */}
      <div className="header-section">
        <div className="decorative-circle"></div>
        <div className="metadata-box">
          <span>2025</span>
        </div>
      </div>

      {/* Título principal con efectos de desenfoque */}
      <div className="title-section">
        <h1 className="main-title">
          PORTFOLIO
        </h1>
        <div className="blur-overlay blur-1"></div>
        <div className="blur-overlay blur-2"></div>
      </div>

      {/* Footer con nombre */}
      <div className="footer-section">
        <div className="decorative-dot"></div>
        <div className="name-box">
          <span>Ignacio Nuñez Valcarce</span>
        </div>
      </div>
    </div>
  )
}

export default App
