const products = [
    {
        id: 1,
        title: "Gestión para Kioscos",
        category: "ventas",
        price: "Consultar",
        image: "kiosco/1.png",
        description: "Sistema completo para control de stock, caja diaria y ventas rápidas. Ideal para kioscos, drugstores y minimercados.",
        features: ["Control de Stock", "Caja Diaria", "Lectura de Códigos de Barras", "Reportes de Ventas"]
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
        image: "gimnasio/1.png",
        description: "Control de acceso, vencimiento de cuotas y rutinas personalizadas para tus socios.",
        features: ["Control de Acceso", "Rutinas Digitales", "Pagos Recurrentes", "Ficha de Socio"]
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
        title: "Gestión Verdulería",
        category: "ventas",
        price: "Consultar",
        image: "img/verdura.jpg",
        description: "Venta rápida por peso y unidad. Control de mermas y ofertas diarias.",
        features: ["Balanza", "Control Mermas", "Ofertas del Día", "Cierre Caja"]
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
