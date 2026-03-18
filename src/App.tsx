function App() {
  const estudiantes = [
    {
      nombre: "Nicoll Dayann Aguirre Ussa",
      rol: "Estudiante"
    },
    {
      nombre: "Edilberto Moreno Valencia",
      rol: "Estudiante"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-md border-b border-white/10 flex-shrink-0">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">UM</span>
            </div>
            <h1 className="text-white text-xl font-semibold">Universidad de Manizales</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyecto de Actividades
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Desarrollo de habilidades en DevOps
          </p>
        </div>

        {/* Estudiantes Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-10">
            Integrantes del Proyecto
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {estudiantes.map((estudiante, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-slate-900 text-2xl font-bold">
                    {estudiante.nombre.charAt(0)}
                  </span>
                </div>
                <h4 className="text-white text-xl font-semibold mb-2">
                  {estudiante.nombre}
                </h4>
                <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">
                  {estudiante.rol}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Universidad Info */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-blue-200">Universidad de Manizales</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/5 border-t border-white/10 py-6 flex-shrink-0">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-blue-300/60 text-sm">
            © 2026 - Actividad 1 DevOps - Universidad de Manizales
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
