import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Truck,
  Package,
  Clock,
  Shield,
  MapPin,
  ChevronDown,
  Phone,
  Mail,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('bg-white', 'shadow-lg');
          navbar.classList.remove('bg-transparent');
        } else {
          navbar.classList.remove('bg-white', 'shadow-lg');
          navbar.classList.add('bg-transparent');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: 'Entregas Confiables',
      description:
        'Conectamos transportistas verificados con clientes para entregas seguras y puntuales.',
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: 'Todo Tipo de Carga',
      description:
        'Desde paquetes pequeños hasta cargas completas, manejamos todo tipo de envíos.',
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: 'Tiempo Real',
      description:
        'Seguimiento en vivo de tus envíos con actualizaciones instantáneas.',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'Seguridad Garantizada',
      description:
        'Transportistas verificados y seguro de carga para tu tranquilidad.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav
        id="navbar"
        className="fixed w-full z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className=" h-10 text-primary" />
              <span className="ml-3 text-2xl font-bold text-gray-800 sr-only">
                Telocargamos
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Características
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Cómo Funciona
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Contacto
              </a>
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
                Descargar App
              </button>
            </div>

            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4"
            >
              <a href="#features" className="block py-2 text-gray-600">
                Características
              </a>
              <a href="#how-it-works" className="block py-2 text-gray-600">
                Cómo Funciona
              </a>
              <a href="#contact" className="block py-2 text-gray-600">
                Contacto
              </a>
              <button className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-full">
                Descargar App
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="container mx-auto px-6 py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Tu Carga, Nuestro Compromiso
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Conectamos transportistas confiables con personas que necesitan
                mover su carga. Simple, seguro y eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors">
                  Comenzar Ahora
                </button>
                <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
                  Saber Más
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Freight Delivery"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-0 left-0 right-0 flex justify-center pb-8"
        >
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por Qué Elegirnos
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones de transporte diseñadas para ti
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cómo Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Simple y efectivo en tres pasos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Solicita un Envío',
                description:
                  'Ingresa los detalles de tu carga y la ruta deseada',
              },
              {
                step: '2',
                title: 'Encuentra un Transportista',
                description:
                  'Conecta con transportistas verificados cerca de ti',
              },
              {
                step: '3',
                title: 'Rastrea tu Envío',
                description: 'Sigue tu carga en tiempo real hasta su destino',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Contáctanos
              </h2>
              <p className="text-xl text-gray-600">
                Estamos aquí para ayudarte
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary mr-4" />
                    <span className="text-gray-600">+1 (829) 770-1598</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary mr-4" />
                    <span className="text-gray-600">
                      contacto@telocargamos.com
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    rows={4}
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                  Enviar Mensaje
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="/logo_dark.png"
                  alt="Logo"
                  className=" h-10 text-primary"
                />
                <span className="ml-3 text-xl font-bold sr-only">
                  Telocargamos
                </span>
              </div>
              <p className="text-gray-400">
                Conectando cargas con transportistas confiables.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Características
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cómo Funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contactanos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Telocargamos. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
