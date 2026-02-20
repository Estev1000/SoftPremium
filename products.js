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
        id: 27,
        title: "GymRoutine Pro - Generador de Rutinas",
        category: "deportes",
        price: "Consultar",
        image: "Generador de Rutinas Pro/publicidad_gymroutine_pro.png",
        images: ["Generador de Rutinas Pro/publicidad_gymroutine_pro.png", "Generador de Rutinas Pro/1.png", "Generador de Rutinas Pro/2.png", "Generador de Rutinas Pro/3.png", "Generador de Rutinas Pro/4.png", "Generador de Rutinas Pro/5.png", "Generador de Rutinas Pro/6.png", "Generador de Rutinas Pro/7.png", "Generador de Rutinas Pro/8.png", "Generador de Rutinas Pro/9.png", "Generador de Rutinas Pro/10.png"],
        description: `GymRoutine Pro es una herramienta avanzada diseñada exclusivamente para entrenadores personales, instructores de gimnasio y profesionales del fitness que buscan elevar la calidad de su servicio. Este software permite crear, gestionar y entregar rutinas de entrenamiento con una estética premium y profesional en cuestión de segundos.

CARACTERÍSTICAS PRINCIPALES:

1. INTERFAZ PROFESIONAL Y MODERNA
Diseño minimalista con tecnología visual de vanguardia para una experiencia de usuario fluida y profesional.

2. BASE DE DATOS DE EJERCICIOS INTEGRADA
Incluye más de 40 ejercicios predefinidos organizados por grupos musculares (Pecho, Espalda, Piernas, Hombros, Brazos, Core). Además, permite añadir ejercicios personalizados de forma manual.

3. EXPORTACIÓN EN ALTA DEFINICIÓN
Genera imágenes profesionales (.png) de las rutinas completas, listas para imprimir o enviar. El sistema ajusta automáticamente el diseño para asegurar que incluso las rutinas más largas se vean perfectas.

4. INTEGRACIÓN CON WHATSAPP
Envío directo de rutinas vía WhatsApp con un formato de texto estructurado y fácil de leer para el alumno.

5. BASE DE DATOS DE ALUMNOS
Permite registrar alumnos y guardar múltiples rutinas para cada uno. Nunca más perderás el progreso de un cliente; busca por nombre y apellido para recuperar o modificar rutinas anteriores.

6. SEGURIDAD Y RESPALDOS
Funciones de Exportación e Importación de datos en formato JSON. Mantén toda tu base de datos de clientes a salvo en tu computadora o en la nube.

7. AUTOGUARDADO LOCAL
El sistema guarda los cambios automáticamente en el navegador, evitando la pérdida de información por cierres accidentales.

IDEAL PARA:
- Personal Trainers que quieren diferenciarse de la competencia.
- Dueños de Gimnasios que buscan estandarizar las rutinas de sus socios.
- Preparadores físicos que necesitan eficiencia y rapidez en la entrega de planes.

IMPORTANTE: Al comprar el programa, debes enviar por mensaje el nombre del gym y el logo para poder personalizarlo.`,
        features: ["40+ Ejercicios Predefinidos", "Exportar Rutina en PNG", "Envío por WhatsApp", "Base de Alumnos", "Autoguardado Local", "Sin Mensualidades"]
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
        title: "LibreriaFlow - Gestión para Librería y Papelería",
        category: "ventas",
        price: "Consultar",
        image: "Librería y Papelería/Imágen de la Web.png",
        images: ["Librería y Papelería/Imágen de la Web.png", "Librería y Papelería/1.png", "Librería y Papelería/2.png", "Librería y Papelería/3.png", "Librería y Papelería/4.png", "Librería y Papelería/5.png", "Librería y Papelería/6.png", "Librería y Papelería/7.png", "Librería y Papelería/8.png", "Librería y Papelería/9.png", "Librería y Papelería/10.png", "Librería y Papelería/11.png"],
        description: `LibreriaFlow es un sistema integral diseñado específicamente para la administración eficiente de librerías escolares, papelerías y comercios afines. Esta solución tecnológica le permite modernizar su negocio, optimizar el control de stock y agilizar el proceso de ventas mediante una interfaz intuitiva y profesional.

PRINCIPALES FUNCIONALIDADES:

1. PANEL DE CONTROL (DASHBOARD)
- Visualización inmediata del estado del negocio.
- Indicadores clave: Total de productos, ventas del día actual, acumulado de ventas del mes y alertas de stock bajo.
- Gráficos de rendimiento comparativos (vs. mes anterior).
- Listado de productos más vendidos (filtrable por día, semana o mes).
- Acceso directo a productos que requieren reposición.

2. GESTIÓN DE INVENTARIO
- Registro completo de productos con: Nombre, Código de Barras, Categoría, Precio, Stock y Descripción.
- Categorización predefinida: Cuadernos y Carpetas, Escritura, Mochilas, Arte y Dibujo, Oficina, entre otros.
- Buscador avanzado y filtros por estado de stock (Disponible, Bajo, Sin Stock).
- Exportación del inventario completo a Excel con un solo clic.

3. PUNTO DE VENTA (POS)
- Sistema ágil para realizar ventas.
- Búsqueda de productos por nombre o lectura de código de barras.
- Carrito de compras interactivo con cálculo automático de totales.
- Aplicación de descuentos porcentuales.
- Soporte para múltiples métodos de pago: Efectivo, Tarjeta de Crédito/Débito y Transferencia.
- Generación de tickets de venta.

4. HISTORIAL DE VENTAS
- Registro detallado de todas las operaciones realizadas.
- Filtros de búsqueda por rango de fechas y método de pago.
- Visualización de fecha, hora, número de venta, detalle de productos y montos.
- Exportación del historial a formato Excel para contabilidad.

5. REPORTES Y ESTADÍSTICAS
- Análisis de ventas por categoría para identificar los rubros más rentables.
- Gráficos de evolución de ventas diarias.
- Resumen financiero: Total de ventas mensuales, ticket promedio, producto estrella y categoría líder.
- Exportación de reportes gerenciales.

6. CONFIGURACIÓN Y SEGURIDAD DE DATOS
- Personalización de datos del comercio (Nombre, Teléfono, Dirección) para los comprobantes.
- Configuración de alertas de stock mínimo personalizable.
- Copias de seguridad (Backup) y restauración de datos.
- Importación y exportación total de la base de datos en formato JSON.

VENTAJAS DEL SISTEMA:
- Interfaz moderna, limpia y fácil de usar.
- No requiere internet para funcionar (sistema local).
- Compatible con cualquier PC con navegador web.
- Ideal para controlar el flujo de caja y evitar pérdidas de mercadería.

FORMATO DE ENTREGA:
- Envío digital inmediato.
- Software listo para usar y personalizado con el nombre y logo de su comercio.`,
        features: ["Dashboard en Tiempo Real", "Punto de Venta POS", "Control de Stock", "Códigos de Barras", "Exportar a Excel", "Reportes y Estadísticas"]
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
    },
    {
        id: 26,
        title: "Gestión de Farmacia Profesional",
        category: "salud",
        price: "Consultar",
        image: "farmacia/publicidad_gestion_farmacia.png",
        images: ["farmacia/publicidad_gestion_farmacia.png", "farmacia/1.png", "farmacia/2.png", "farmacia/3.png", "farmacia/4.png", "farmacia/5.png", "farmacia/6.png", "farmacia/7.png", "farmacia/8.png", "farmacia/9.png", "farmacia/10.png"],
        description: `Gestión de Farmacia - Versión Web y Ejecutable para PC

Resumen breve
Sistema completo para la gestión de farmacias en versión web y ejecutable para Windows. Permite controlar inventario con FIFO/FEFO, gestión de lotes y vencimientos, CODIGO DE BARRAS con pistola scanner, SISTEMA DE DISPENSA (registro de pacientes), registrar ventas, imprimir tickets, y realizar importación/exportación de catalogo en formato Excel. Incluye funciones avanzadas de edición de productos y sincronización para trabajar con múltiples cajas y sucursales. Ideal para farmacias que buscan una solución profesional, escalable y sin pagos mensuales.

Descripción detallada
Este software está diseñado para facilitar el control integral de stock y ventas en farmacias con características de nivel empresarial. Ofrece una interfaz clara basada en pestañas para manejar el inventario, realizar ventas ultra rápidas mediante scanner de código de barras, registrar dispensas de medicamentos a pacientes con trazabilidad completa, y generar tickets profesionales. La solución incluye sincronización inteligente entre múltiples terminales, permitiendo consolidar ventas de diversas cajas y mantener el inventario unificado en todas sus sucursales.

Funciones principal
- Gestión avanzada de productos: Crear y editar cada detalle del producto (nombre, droga, dosis, presentación, marca, laboratorio, temperatura de conservación, código de barras, precio y stock).
- Edición de productos: Permite modificar cualquier dato de productos ya existentes, incluyendo la corrección de lotes y fechas de vencimiento sin perder el historial.
- Control de salida de stock (FIFO/FEFO): Optimización automática de la salida de inventario priorizando el vencimiento más cercano (FEFO) o el primer ingreso (FIFO).
- Gestión por lotes y vencimientos: Registro detallado de lote y fecha de vencimiento en cada entrada. Alertas visuales de vencimiento y reportes de proximidad.
- Trazabilidad total: Histórico de movimientos por lote (entradas, salidas y ajustes) para auditoria y cumplimiento sanitario.

NUEVAS FUNCIONALIDADES - VERSION 4.0:

- SISTEMA MULTICAJA Y SUCURSALES (Sincronización Profesional):
  * Exportar Cierre: Genera un archivo unificado con todas las ventas e inventario del día.
  * Consolidar Ventas: Permite a una caja Central recibir las ventas de otras cajas, descontando el stock de forma automática y centralizada.
  * Actualizar Inventario: Sincroniza las cajas de sucursales con el inventario maestro de la central en segundos.
  * Distribución de Stock: Divide automáticamente el inventario en partes iguales entre varias cajas para evitar ventas duplicadas.
  * Trabajo Offline: Cada terminal puede trabajar sin internet y sincronizarse al final del día o mediante archivos compartidos.

- EDICION INTEGRAL DE PRODUCTOS:
  * Formulario de edición completa: Modifique nombre, principios activos, dosis, marcas y laboratorios de forma individual.
  * Gestión de almacenamiento: Clasifique productos por temperatura (Ambiente, Controlada, Cadena de Frio).
  * Corrección rápida: Botón de edición directa en la tabla de inventario para ajustes inmediatos.

- CODIGO DE BARRAS CON PISTOLA SCANNER:
  * Compatible con scanners USB y Bluetooth de cualquier marca (Honeywell, Zebra, etc.).
  * Búsqueda instantánea y venta ultra rápida (atención en menos de 2 segundos).
  * Plug and Play: No requiere instalación de drivers adicionales.

- SISTEMA DE DISPENSA PROFESIONAL:
  * Registro obligatorio u opcional de pacientes (nombre y documento/RUT) en cada transacción.
  * Historial completo de dispensas para auditoria de medicamentos controlados.
  * Cumplimiento riguroso de normativas sanitarias locales.

- Reportes Avanzados:
  * Valorización de stock: Conozca el valor real de su inventario en dinero.
  * Detalle de Dispensas: Reporte filtrable de que se entrego a cada paciente.
  * Alertas de Vencimiento: Listado de productos próximos a caducar para evitar pérdidas.

Beneficios para su negocio
- Sin mensualidades: Pago único por una herramienta de por vida.
- Escalabilidad: Empiece con una caja y crezca a múltiples sucursales con el sistema de sincronización incluido.
- Profesionalismo: Mejore la imagen de su farmacia con tickets detallados y registro de pacientes.
- Control total: Reduzca errores de stock y pérdidas por medicamentos vencidos mediante FEFO.
- Velocidad: Agilice la cola de clientes mediante el uso de códigos de barras.
- Seguridad de datos: Sus datos se quedan en su computadora, sin depender de servidores externos o la nube.

Requisitos técnicos
- Computadora con Windows 10 u 11 (recomendado).
- Navegador moderno (Chrome, Edge o Firefox).
- 2 GB de RAM (mínimo), 4 GB (recomendado).
- Compatible con cualquier impresora térmica (58mm/80mm) y scanners de códigos de barras estándar.

Que incluye la compra
- Software de Gestión de Farmacia V4 Completo.
- Manual de usuario profesional paso a paso.
- Manual especifico de Sincronización Multicaja.
- Plantilla Excel para carga masiva de productos.
- Soporte técnico post-venta por mensajería.
- Actualizaciones gratuitas.

Instalación
La instalación es inmediata y sencilla. Se entrega una carpeta lista para usar. No requiere configuraciones complejas de bases de datos. Simplemente abra el sistema y comience a cargar su inventario.

Garantía y Soporte
Ofrecemos 7 días de garantía total. Si el sistema no cumple con lo prometido, le devolvemos su dinero. El soporte técnico está disponible para ayudarlo en la puesta en marcha de sus sucursales.

Versión: 4.0 - Edición Profesional y Multi-Sucursal`,
        features: ["Control Stock FIFO/FEFO", "Vencimientos y Lotes", "Scanner Códigos Barra", "Trazabilidad Total", "Multicaja y Sucursales", "Sin Mensualidades"]
    },
];
