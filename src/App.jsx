function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header / Navegación */}
      <header className="bg-white shadow">
        <nav className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Tu Nombre</h1>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hola, soy [Tu Nombre]
          </h2>
          <p className="text-xl text-gray-600">
            Estudiante de [tu carrera] | Desarrollador Web
          </p>
        </section>

        {/* Sección de prueba Tailwind */}
        <section className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Tailwind CSS funcionando correctamente
          </h3>
          <p className="text-gray-600">
            Si ves este recuadro con estilos, tu entorno está listo.
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition">
            Botón de prueba
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2025 Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
