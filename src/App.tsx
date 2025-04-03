// import React from 'react';
import {
  Accessibility,
  Users,
  Heart,
  Globe,
  ArrowRight,
  ChevronDown,
  Menu,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the launch date (e.g., 14 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="assets/vid.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="assets/logo.svg" className="h-10 w-15 mr-2 text-yellow-400" />
              <span className="text-xl font-bold">MFCToken</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="hover:text-yellow-400 transition-colors"
              >
                Acerca de
              </a>
              <a
                href="#mission"
                className="hover:text-yellow-400 transition-colors"
              >
                Misión
              </a>
              <a
                href="#tokenomics"
                className="hover:text-yellow-400 transition-colors"
              >
                Tokenomics
              </a>
              <a
                href="#roadmap"
                className="hover:text-yellow-400 transition-colors"
              >
                Hoja de Ruta
              </a>
              <a href="#team" className="hover:text-yellow-400 transition-colors">
                Equipo
              </a>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6" />
            </div>
            <div className="hidden md:block">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-2 px-6 rounded-full transition-colors">
                Join Presale
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">
              Token MadreFajonaCorp
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              Empoderando la Diversidad a través de Blockchain
            </h3>
            <p className="text-base mb-8 text-indigo-200">
              MFCToken es la primera criptomoneda dedicada a financiar
              iniciativas que promueven la diversidad funcional e inclusión
              en todo el mundo.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center">
                Comprar Tokens <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open('assets/mfc whitepaper.pdf', '_blank')}
                className="border-2 border-indigo-300 hover:border-white text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center"
              >
                Leer Whitepaper
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur opacity-75"></div>
              <div className="relative bg-indigo-800 p-8 rounded-full">
                <Accessibility className="h-32 w-32 text-yellow-400" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="bg-indigo-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">$2.5M</p>
              <p className="text-indigo-200">Recaudados hasta ahora</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">12,000+</p>
              <p className="text-indigo-200">Poseedores de Tokens</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">25+</p>
              <p className="text-indigo-200">ONGs Asociadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Acerca de MFCToken
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Heart className="h-6 w-6 mr-2 text-pink-400" />
              Nuestro Propósito
            </h3>
            <p className="text-indigo-200 mb-6">
              El Token MadreFajonaCorp (MFC) fue creado para cerrar la brecha
              entre la tecnología blockchain y el impacto social. Creemos en el
              poder de las finanzas descentralizadas para crear cambios
              significativos para personas con diversas capacidades funcionales.
            </p>
            <p className="text-indigo-200">
              Al tokenizar el apoyo a iniciativas de diversidad funcional,
              creamos un sistema transparente, eficiente y global para financiar
              programas críticos que mejoran la accesibilidad y la inclusión.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Globe className="h-6 w-6 mr-2 text-blue-400" />
              Impacto Global
            </h3>
            <p className="text-indigo-200 mb-6">
              Nuestro token opera a escala global, permitiendo que cualquier
              persona, en cualquier lugar, contribuya a iniciativas de
              diversidad funcional. Ya hemos establecido asociaciones con
              organizaciones en 15 países de 5 continentes.
            </p>
            <p className="text-indigo-200">
              Cada transacción incluye una pequeña contribución a nuestro Fondo
              de Impacto, que se distribuye trimestralmente a ONGs verificadas
              que trabajan en accesibilidad, educación, empleo y tecnología para
              personas con diversas capacidades.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-indigo-800 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Misión</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-700 p-8 rounded-lg hover:transform hover:scale-105 transition-transform">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Inclusión</h3>
              <p className="text-indigo-200">
                Crear oportunidades económicas y sistemas de apoyo para personas
                con diversas capacidades funcionales a través de la tecnología
                blockchain.
              </p>
            </div>
            <div className="bg-indigo-700 p-8 rounded-lg hover:transform hover:scale-105 transition-transform">
              <div className="bg-pink-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Concientización</h3>
              <p className="text-indigo-200">
                Aumentar la conciencia global sobre la diversidad funcional y
                romper estigmas a través de la educación y el compromiso
                comunitario.
              </p>
            </div>
            <div className="bg-indigo-700 p-8 rounded-lg hover:transform hover:scale-105 transition-transform">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Apoyo</h3>
              <p className="text-indigo-200">
                Priorizar la ayuda y el cuidado de las familias de personas con
                diversidad funcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Distribución de Tokens</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Comunidad y Preventa (40%)</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-indigo-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Asociaciones con ONGs (25%)</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-indigo-700 rounded-full h-2">
                  <div className="bg-pink-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Desarrollo y Operaciones (20%)</span>
                  <span>20%</span>
                </div>
                <div className="w-full bg-indigo-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Equipo y Asesores (10%)</span>
                  <span>10%</span>
                </div>
                <div className="w-full bg-indigo-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Pool de Liquidez (5%)</span>
                  <span>5%</span>
                </div>
                <div className="w-full bg-indigo-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Detalles del Token</h3>
            <div className="bg-indigo-800 rounded-lg p-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between">
                  <span className="text-indigo-200">Nombre del Token:</span>
                  <span className="font-bold">MFCToken</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-200">Símbolo:</span>
                  <span className="font-bold">MFC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-200">Suministro Total:</span>
                  <span className="font-bold">1,000,000,000 MFCS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-200">Blockchain:</span>
                  <span className="font-bold">Solana (SPL-20)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-200">Precio Inicial:</span>
                  <span className="font-bold">$0.015 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-200">Comisión de Impacto:</span>
                  <span className="font-bold">2% de transacciones</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-indigo-200">
                El 2% de cada transacción se dirige automáticamente a nuestro Fondo de Impacto,
                que apoya a ONGs e iniciativas enfocadas en la diversidad funcional alrededor del mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="bg-indigo-800 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoja de Ruta</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-600"></div>

            {/* Roadmap items */}
            <div className="space-y-12 relative">
              {/* Q2 2025 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Q2 2025</h3>
                  <div className="bg-indigo-700 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">Expansión Global</h4>
                    <p className="text-indigo-200">
                      Expandir a más de 50 países y 100+ asociaciones con ONGs. 
                      Lanzamiento de MFCDAO (fundación) para gobernanza comunitaria.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="bg-yellow-400 rounded-full h-6 w-6"></div>
                </div>
              </div>

              {/* Q4 2024 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Q3 2025</h3>
                  <div className="bg-indigo-700 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">Programa de Subvenciones MFC</h4>
                    <p className="text-indigo-200">
                      Lanzamiento de nuestro programa de subvenciones para startups 
                      y innovaciones en accesibilidad. Inicio de informes trimestrales de impacto.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="bg-yellow-400 rounded-full h-6 w-6"></div>
                </div>
              </div>

              {/* Q3 2024 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Q3 2025</h3>
                  <div className="bg-indigo-700 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">Listado en Exchanges</h4>
                    <p className="text-indigo-200">
                      Listado en exchanges principales. Lanzamiento de MFCWallet con 
                      características de accesibilidad. Inicio de distribución de fondos a ONGs.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="bg-yellow-400 rounded-full h-6 w-6"></div>
                </div>
              </div>

              {/* Q2 2024 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Q4 2025</h3>
                  <div className="bg-indigo-700 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">Lanzamiento del Token</h4>
                    <p className="text-indigo-200">
                      Venta pública de tokens. Listado en DEX. Construcción de comunidad 
                      y establecimiento de asociaciones iniciales con ONGs.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="bg-pink-500 rounded-full h-8 w-8 animate-pulse">
                    <div className="flex items-center justify-center h-full">
                      <span className="text-xs font-bold">AHORA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-800 rounded-lg overflow-hidden">
            <img
              src="assets/img1.png"
              alt="CEO"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Liderando el Bien</h3>
              <p className="text-indigo-300 mb-4"></p>
              <p className="text-indigo-200 mb-4">
                Madre Fajona Corp está formada por una junta de madres 
                con hijos con discapacidad y personas con discapacidad.
              </p>
            </div>
          </div>

          <div className="bg-indigo-800 rounded-lg overflow-hidden">
            <img
              src="assets/img2.png"
              alt="CTO"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Apoyando el Bien</h3>
              <p className="text-indigo-300 mb-4"></p>
              <p className="text-indigo-200 mb-4">
                Cada vez más personas se unen para apoyar y "Hacer la Diferencia"
              </p>
            </div>
          </div>

          <div className="bg-indigo-800 rounded-lg overflow-hidden">
            <img
              src="assets/img3.png"
              alt="COO"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Comprometidos con el Bien</h3>
              <p className="text-indigo-300 mb-4"></p>
              <p className="text-indigo-200 mb-4">
                A través de las plataformas de YouTube y Facebook hemos 
                alcanzado cerca de #182 programas orientados a guiar y educar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Presale Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Únete a Nuestra Preventa de Tokens
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Sé parte de un movimiento que utiliza la tecnología blockchain para crear un
            mundo más inclusivo. Los primeros participantes reciben un bono del 20% en sus
            compras de tokens.
          </p>
          <div className="bg-indigo-800 p-8 rounded-lg max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Progreso de la Preventa</span>
                <span>65% Completado</span>
              </div>
              <div className="w-full bg-indigo-700 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-pink-500 h-4 rounded-full"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-indigo-300 mb-1">Recaudado Hasta Ahora</p>
                <p className="text-2xl font-bold">$1,625,000 / $2,500,000</p>
              </div>
              <div>
                <p className="text-indigo-300 mb-1">Lanzamiento en</p>
                <p className="text-2xl font-bold">
                  {countdown.days}d : {countdown.hours}h : {countdown.minutes}m : {countdown.seconds}s
                </p>
              </div>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-full transition-colors w-full">
              Conectar Billetera para Participar
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <button className="flex justify-between items-center w-full bg-indigo-800 p-4 rounded-lg text-left">
              <span className="font-bold">¿Qué es MFCToken?</span>
              <ChevronDown className="h-5 w-5" />
            </button>
            <div className="bg-indigo-700 p-4 rounded-b-lg mt-1">
              <p className="text-indigo-200">
                MadreFajonaCorp (MFC) Token es una criptomoneda diseñada para financiar 
                iniciativas que promueven la diversidad funcional e inclusión en todo el mundo. 
                Opera en la blockchain de Solana como un token ERC-20 e incluye una tarifa de 
                impacto que apoya directamente a ONGs que trabajan en este espacio.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <button className="flex justify-between items-center w-full bg-indigo-800 p-4 rounded-lg text-left">
              <span className="font-bold">
                ¿Cómo apoya MFCToken la diversidad funcional?
              </span>
              <ChevronDown className="h-5 w-5" />
            </button>
            <div className="bg-indigo-700 p-4 rounded-b-lg mt-1">
              <p className="text-indigo-200">
                El 2% de cada transacción se dirige automáticamente a nuestro Fondo de Impacto. 
                Estos fondos se distribuyen trimestralmente a ONGs verificadas que trabajan en 
                accesibilidad, educación, empleo y tecnología para personas con diversas capacidades 
                funcionales. Además, el 25% del suministro total de tokens se asigna directamente 
                a asociaciones con ONGs.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <button className="flex justify-between items-center w-full bg-indigo-800 p-4 rounded-lg text-left">
              <span className="font-bold">
                ¿Cómo puedo participar en la preventa?
              </span>
              <ChevronDown className="h-5 w-5" />
            </button>
            <div className="bg-indigo-700 p-4 rounded-b-lg mt-1">
              <p className="text-indigo-200">
                Para participar en la preventa, necesitas una billetera (como Phantom). 
                Haz clic en el botón "Conectar Billetera" arriba, sigue las instrucciones 
                para conectar tu billetera y especifica la cantidad de tokens MFC que deseas 
                comprar. La contribución mínima es de 10 SOL.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <button className="flex justify-between items-center w-full bg-indigo-800 p-4 rounded-lg text-left">
              <span className="font-bold">
                ¿Cuándo se distribuirán los tokens?
              </span>
              <ChevronDown className="h-5 w-5" />
            </button>
            <div className="bg-indigo-700 p-4 rounded-b-lg mt-1">
              <p className="text-indigo-200">
                Los tokens se distribuirán inmediatamente después de que termine la preventa. 
                Podrás reclamar tus tokens a través de nuestro sitio web conectando la misma 
                billetera que utilizaste para la contribución. También enviaremos notificaciones 
                por correo electrónico a todos los participantes.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <button className="flex justify-between items-center w-full bg-indigo-800 p-4 rounded-lg text-left">
              <span className="font-bold">
                ¿Cómo puedo verificar la legitimidad del proyecto?
              </span>
              <ChevronDown className="h-5 w-5" />
            </button>
            <div className="bg-indigo-700 p-4 rounded-b-lg mt-1">
              <p className="text-indigo-200">
                Nuestros contratos inteligentes están completamente auditados por CertiK y Quantstamp, 
                con informes disponibles en nuestro GitHub. También hemos establecido asociaciones con 
                ONGs reconocidas en el espacio de la diversidad funcional, cuyos avales se pueden encontrar 
                en nuestro sitio web. Las identidades de los miembros de nuestro equipo son públicas y 
                realizamos AMAs regularmente en nuestros canales sociales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-indigo-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Mantente Informado</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-200">
            Únete a nuestro boletín para recibir actualizaciones sobre el lanzamiento 
            de nuestro token, asociaciones e iniciativas de impacto.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 mb-2 sm:mb-0 sm:mr-2 rounded-lg focus:outline-none text-indigo-900"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-6 rounded-lg transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="assets/logo.svg" className="h-10 w-10 mr-2 text-yellow-400" />
                <span className="text-lg font-bold">MFCToken</span>
              </div>
              <p className="text-indigo-300 mb-4">
                Empowering diversity through blockchain technology.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/madrefajona" className="text-indigo-300 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/madrefajonapr" className="text-indigo-300 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@madrefajona1324" className="text-indigo-300 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-indigo-300 hover:text-white">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a
                    href="#mission"
                    className="text-indigo-300 hover:text-white"
                  >
                    Misión
                  </a>
                </li>
                <li>
                  <a
                    href="#tokenomics"
                    className="text-indigo-300 hover:text-white"
                  >
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="text-indigo-300 hover:text-white"
                  >
                    Hoja de Ruta
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-indigo-300 hover:text-white">
                    Equipo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-indigo-300 hover:text-white">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-300 hover:text-white">
                    Smart Contract
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-300 hover:text-white">
                    Audit Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-300 hover:text-white">
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-300 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-indigo-300">info@madrefajonacorp.org</li>
                <li className="text-indigo-300">Support: help@madrefajonacorp.org</li>
                <li className="text-indigo-300">
                  Partnerships: partners@madrefajonacorp.org
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-400">
            <p>&copy; 2025 MFCToken. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
