const products = [
    {
        id: 1,
        title: "Gestión para Kioscos",
        category: "ventas",
        price: "Consultar",
        image: "kiosco/Publicidad KioscoFlow.png",
        images: ["kiosco/Publicidad KioscoFlow.png", "kiosco/1.png", "kiosco/2.png", "kiosco/3.png", "kiosco/4.png", "kiosco/5.png", "kiosco/6.png", "kiosco/7.png", "kiosco/8.png", "kiosco/9.png", "kiosco/10.png"],
        description: `Gestión para Kioscos KioscoFlow - La Solución Moderna para tu Negocio.

Optimiza la gestión de tu kiosco, despensa o polirubro con KioscoFlow, el software mas intuitivo y visual del mercado. Olvídate de las planillas de calculo complejas y los sistemas antiguos; nuestro sistema esta diseñado para ser fácil de usar, rápido y eficiente, adaptándose a cualquier dispositivo.

CARACTERISTICAS PRINCIPALES:
- Interfaz Visual Premium: Diseño moderno tipo "Glassmorphism" con modo oscuro, fácil de leer y agradable a la vista.
- Lector de Códigos de Barras: Compatible con lectores USB, Bluetooth, etc. Escanea y vende al instante.
- Sistema de Caja Rápida (POS): Vende seleccionando productos visualmente o con buscador inteligente.
- Gestión de Inventario: Controla tu stock en tiempo real y recibe alertas de stock bajo.
- Gestión de Clientes: Registra clientes, historial de compras y promociones personalizadas.
- Compras Fiadas (Cuenta Corriente): Gestiona deudas de clientes y pagos parciales fácilmente.
- Historial de Ventas Detallado: Registro completo de operaciones y tipos de pago.
- Exportación e Importación de Datos: Respalda tu información en Excel y JSON.
- Impresión de Tickets: Genera comprobantes de venta con un clic.
- 100% Responsivo: Funciona en PC, Notebooks, Tablets y Celulares.
- Privacidad Total: Datos guardados en tu dispositivo, sin depender de la nube.`,
        features: ["Control de Stock", "Caja Diaria", "Lectura de Códigos de Barras", "Reportes de Ventas", "Cuentas Corrientes", "Impresión de Tickets"]
    },
    {
        id: 2,
        title: "RestoBar Digital",
        category: "gastronomia",
        price: "Consultar",
        image: "img/restobar.jpg",
        description: "Moderniza tu bar o restaurante con comandas digitales, control de mesas y gestión de cocina en tiempo real.",
        features: ["Mapa de Mesas", "Comandas a Cocina", "Control de Mozos", "Stock de Insumos"]
    },
    {
        id: 3,
        title: "Taller Pro",
        category: "gestion",
        price: "Consultar",
        image: "img/taller.jpg",
        description: "Software especializado para talleres mecánicos. Historial de vehículos, órdenes de reparación y presupuestos.",
        features: ["Historial por Patente", "Órdenes de Trabajo", "Presupuestos en PDF", "Alertas de Service"]
    },
    {
        id: 4,
        title: "Sistema Farmacia",
        category: "salud",
        price: "Consultar",
        image: "img/farmacia.jpg",
        description: "Control preciso de medicamentos, vencimientos y trazabilidad. Adaptado a las necesidades de farmacias pequeñas y medianas.",
        features: ["Control de Vencimientos", "Vademécum", "Obras Sociales", "Stock Crítico"]
    },
    {
        id: 5,
        title: "Pizzería Pro POS",
        category: "gastronomia",
        price: "Consultar",
        image: "img/pizza.jpg",
        description: "Agiliza los pedidos de delivery y mostrador. Control de gustos, tamaños y demoras en cocina.",
        features: ["Caller ID para Delivery", "Gestión de Repartidores", "Combos y Promociones", "Cierre de Caja"]
    },
    {
        id: 6,
        title: "Gestión de Gimnasios",
        category: "deportes",
        price: "Consultar",
        image: "gimnasio/Gym_Software_Ad.png",
        images: ["gimnasio/Gym_Software_Ad.png", "gimnasio/1.png", "gimnasio/2.png", "gimnasio/3.png", "gimnasio/4.png", "gimnasio/5.png", "gimnasio/6.png", "gimnasio/7.png", "gimnasio/8.png", "gimnasio/9.png", "gimnasio/10.png", "gimnasio/11.png"],
        description: `SOFTWARE INTEGRAL "FITPRO ELITE" - VERSION COMPLETA (SIN MENSUALIDADES)

Optimice la administración de su gimnasio con esta solución definitiva. Adquiere el software completo con un único pago. Sin suscripciones ni costos ocultos.

NOVEDAD EXCLUSIVA: SISTEMA DE CONTROL DE ACCESO CON TECLADO NUMERICO
Convierta cualquier PC o Tablet en un "Torno Digital". El socio ingresa su DNI y el sistema valida su cuota con alertas visuales y sonoras (Verde: Bienvenido / Rojo: Acceso Denegado).

FUNCIONES PRINCIPALES:
1. Gestión de Socios Ilimitada: Alta, baja, modificación e historial de actividad.
2. Control de Caja y Finanzas: Registro de cuotas, matrículas y ventas de productos. Reportes de ingresos detallados.
3. Interfaz Moderna: Diseño limpio y profesional, fácil de usar en cualquier PC o navegador.
4. Reportes y Exportación: Exporta listados a Excel/JSON para seguridad.

VENTAJAS:
- PAGO UNICO: Sin mensualidades.
- INSTALACION SENCILLA: Guía paso a paso incluida.
- SOPORTE POST-VENTA: Asistencia en la puesta en marcha.

IDEAL PARA: Gimnasios, Crossfits, Escuelas de Danza, Dojos y centros deportivos.`,
        features: ["Control de Acceso", "Rutinas Digitales", "Pagos Recurrentes", "Ficha de Socio", "Teclado Numérico", "Sin Mensualidades"]
    },
    {
        id: 7,
        title: "HotelPOS",
        category: "turismo",
        price: "Consultar",
        image: "img/hotel.jpg",
        description: "Gestión de reservas, check-in/check-out y consumo de huéspedes para pequeños hoteles y cabañas.",
        features: ["Grilla de Reservas", "Housekeeping", "Consumos Frigobar", "Facturación"]
    },
    {
        id: 8,
        title: "Inventario Ferretería",
        category: "ventas",
        price: "Consultar",
        image: "img/ferreteria.jpg",
        description: "Maneja miles de artículos, listas de precios y stock crítico con facilidad. Soporte para venta a granel.",
        features: ["Listas de Precios Múltiples", "Acopio", "Presupuestos Rápidos", "Códigos de Barras"]
    },
    {
        id: 9,
        title: "Gestión de Librería",
        category: "ventas",
        price: "Consultar",
        image: "img/libreria.jpg",
        description: "Software para librerías y papelerías. Temporada escolar, listas de precios y etiquetado.",
        features: ["Importación de Listas", "Etiquetas de Precios", "Combos Escolares", "Cuentas Corrientes"]
    },
    {
        id: 10,
        title: "Agenda de Turnos",
        category: "servicios",
        price: "Consultar",
        image: "img/turnos.jpg",
        description: "Organiza tu tiempo. Ideal para peluquerías, consultorios, spa y centros de estética.",
        features: ["Recordatorios por WhatsApp", "Historia Clínica/Ficha", "Control de Profesionales", "Señas"]
    },
    {
        id: 11,
        title: "Tienda de Ropa System",
        category: "ventas",
        price: "Consultar",
        image: "img/ropa.jpg",
        description: "Control de talles y colores. Gestión de cambios, devoluciones y stock de indumentaria.",
        features: ["Matriz Talle/Color", "Impresión de Etiquetas", "Cambios y Devoluciones", "Fidelización"]
    },
    {
        id: 12,
        title: "Gestión de Panadería",
        category: "gastronomia",
        price: "Consultar",
        image: "img/panaderia.jpg",
        description: "Control de producción, recetas y venta rápida en mostrador para panaderías y confiterías.",
        features: ["Gestión MP", "Costos de Recetas", "Venta Táctil Rápida", "Balanza"]
    },
    {
        id: 13,
        title: "Web App Remises",
        category: "transporte",
        price: "Consultar",
        image: "img/remis.jpg",
        description: "Despacho de viajes, control de choferes y cuentas corrientes para empresas de remises y taxis.",
        features: ["Geolocalización", "Cta. Cte. Empresas", "Liquidación Choferes", "Reservas"]
    },
    {
        id: 14,
        title: "Gestión de Propiedades",
        category: "servicios",
        price: "Consultar",
        image: "img/inmobiliaria.jpg",
        description: "Software para inmobiliarias. Administración de alquileres, contratos y agenda de visitas.",
        features: ["Liquidación Alquileres", "Vencimiento Contratos", "Publicación Web", "Agenda"]
    },
    {
        id: 15,
        title: "Carnicería POS",
        category: "gastronomia",
        price: "Consultar",
        image: "img/carne.jpg",
        description: "Control de desposte, rendimiento de la media res y venta rápida por peso.",
        features: ["Rendimiento Desposte", "Conexión Balanza", "Ofertas x Kilo", "Caja"]
    },
    {
        id: 16,
        title: "Presupuestos Albañilería",
        category: "construccion",
        price: "Consultar",
        image: "img/construccion.jpg",
        description: "Generador profesional de presupuestos de obra. Cálculo de materiales y mano de obra.",
        features: ["Base de Precios", "Cálculo de Materiales", "PDF Profesional", "Acopio"]
    },
    {
        id: 17,
        title: "Gestor de Celulares",
        category: "tecnologia",
        price: "Consultar",
        image: "img/celular.jpg",
        description: "Servicio técnico y venta de accesorios. Seguimiento de reparaciones por IMEI.",
        features: ["Orden de Reparación", "Consulta Online Estado", "Garantías", "Stock Repuestos"]
    },
    {
        id: 18,
        title: "Auto Lavado App",
        category: "servicios",
        price: "Consultar",
        image: "img/lavado.jpg",
        description: "Gestión de turnos y servicios para lavaderos de autos. Control de adicionales y personal.",
        features: ["Tipos de Lavado", "Comisiones Lavadores", "Caja Diaria", "Fidelización"]
    },
    {
        id: 19,
        title: "Gestión de Preventistas",
        category: "ventas",
        price: "Consultar",
        image: "img/preventista.jpg",
        description: "App móvil para tomar pedidos en la calle. Sincronización con central y rutas de visita.",
        features: ["Modo Offline", "Catálogo Digital", "Rutas GPS", "Cuenta Corriente"]
    },
    {
        id: 20,
        title: "Gestión Clínica",
        category: "salud",
        price: "Consultar",
        image: "img/clinica.jpg",
        description: "Historia clínica digital, turnos y facturación para consultorios médicos y policonsultorios.",
        features: ["Historia Clínica", "Turnos Online", "Liquidación Médicos", "Obras Sociales"]
    },
    {
        id: 21,
        title: "VerduExpress POS",
        category: "ventas",
        price: "Consultar",
        image: "verduleria/1.png",
        images: ["verduleria/1.png", "verduleria/2.png", "verduleria/3.png", "verduleria/4.png", "verduleria/5.png", "verduleria/6.png"],
        description: `VerduExpress POS – Ventas e inventario para verdulería (local)

Descripción:
App simple que corre en el navegador. Cargás productos, vendés rápido, cobrás en efectivo con vuelto automático, imprimís ticket y ves reportes básicos. Datos guardados en tu PC. Ofrecemos la versión para PC, versión web para PC, celular y tablet.

Funcionalidades Principales:
- Inventario: nombre, categoría, precio, cantidad.
- Ventas: carrito, total, efectivo y vuelto.
- Ofertas rápidas: botones con nombre, detalle y precio. Modo “solo ofertas”.
- Venta libre: ítems fuera del inventario.
- Ticket imprimible.
- Reportes y exportar/importar (JSON).

Modo de uso:
- Inventario: cargá productos.
- Ventas: agregá al carrito, ingresá efectivo y finalizá venta (imprime ticket).
- Reportes: consultá totales y exportá/importá.

Requisitos:
- Navegador moderno. Internet solo para estilos al cargar. Operación local.`,
        features: ["Inventario Simple", "Ventas Rápidas", "Ofertas", "Ticket Imprimible", "Reportes Básicos", "Exportar JSON"]
    },
    {
        id: 22,
        title: "Planificador de Bodas",
        category: "eventos",
        price: "Consultar",
        image: "img/boda.jpg",
        description: "Organización integral de eventos. Proveedores, presupuesto, lista de invitados y mesas.",
        features: ["Checklist", "Presupuesto", "Invitados", "Diagrama Mesas"]
    },
    {
        id: 23,
        title: "Organizador Cumpleaños",
        category: "eventos",
        price: "Consultar",
        image: "img/cumple.jpg",
        description: "Gestión de salones de eventos infantiles. Reservas, señas, adicionales y animación.",
        features: ["Calendario Reservas", "Adicionales", "Contratos", "Recordatorios"]
    },
    {
        id: 24,
        title: "Generador de Exámenes",
        category: "educacion",
        price: "Consultar",
        image: "img/examen.jpg",
        description: "Herramienta para docentes. Crea evaluaciones aleatorias, multiple choice y corrección automática.",
        features: ["Banco de Preguntas", "Exámenes PDF", "Corrección Automática", "Estadísticas"]
    },
    {
        id: 25,
        title: "Gestión Podología",
        category: "salud",
        price: "Consultar",
        image: "img/podologia.jpg",
        description: "Ficha de paciente con podograma interactivo. Turnos y control de tratamientos.",
        features: ["Podograma Digital", "Historia Clínica", "Turnos", "Tratamientos"]
    }
];
