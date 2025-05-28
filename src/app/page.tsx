import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            deCampoaCampo Platform
          </h1>
          <p className="text-xl text-gray-600">
            Plataforma de análisis crediticio para el sector agrícola
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Buscar Productor
              </h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Ingrese CUIT o Razón Social"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Análisis Agrícola',
              description: 'Información detallada sobre cultivos y rendimientos',
              icon: '🌾'
            },
            {
              title: 'Análisis Ganadero',
              description: 'Datos sobre el stock y composición del rodeo',
              icon: '🐄'
            },
            {
              title: 'Flujo de Caja',
              description: 'Análisis completo de ingresos y egresos',
              icon: '💰'
            },
            {
              title: 'Simulador de Créditos',
              description: 'Calcule diferentes escenarios crediticios',
              icon: '🏦'
            },
            {
              title: 'Scoring Crediticio',
              description: 'Evaluación integral del perfil crediticio',
              icon: '📊'
            },
            {
              title: 'Integración con Drive',
              description: 'Acceso directo a documentación',
              icon: '📁'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
