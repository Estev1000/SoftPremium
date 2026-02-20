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
        title: "RestoBar POS - Gestión de Mesas y Stock",
        category: "gastronomia",
        price: "Consultar",
        image: "RestoBar POS/promo_mozo_mobile.png",
        images: ["RestoBar POS/promo_mozo_mobile.png", "RestoBar POS/1.png", "RestoBar POS/2.png", "RestoBar POS/3.png", "RestoBar POS/4.png", "RestoBar POS/5.png", "RestoBar POS/6.png", "RestoBar POS/7.png", "RestoBar POS/8.png", "RestoBar POS/9.png"],
        description: `>>> ¡DEJA DE PAGAR ALQUILERES MENSUALES POR TU SISTEMA! <<<

¿Tienes un Bar, Restaurante, Cafetería o Food Truck?
RestoBar POS es la solución definitiva para gestionar tu negocio sin ataduras, sin internet obligatorio y SIN LETRA CHICA.

* LICENCIA DE POR VIDA: Lo compras una vez y es tuyo para siempre.
* NO TIENE ABONOS MENSUALES.
* NO REQUIERE INTERNET (Funciona 100% local en tu PC).

¿QUÉ PUEDES HACER CON ESTE SISTEMA?

1. GESTIÓN DE MESAS VISUAL:
Olvídate de los papelitos. Mira tu salón en tiempo real:
- Mesas Libres (Verdes) vs Mesas Ocupadas (Rojas).
- Control de tiempo: Mira hace cuántos minutos está ocupada una mesa.
- Total acumulado en cada mesa al instante.

2. AGILIDAD TOTAL: TOMA DE PEDIDOS DESDE LA MESA (MOZOS)
¡Tus mozos ya no necesitan libreta y papel!
- Pueden cargar el pedido desde su CELULAR o TABLET parados al lado de la mesa.
- Se terminó el "ir y venir" hasta la computadora central para cargar una gaseosa.
- Carga inmediata: El pedido impacta al instante en el sistema general.
- Ahorra tiempo y evita errores de lectura o comandas perdidas.

3. CONTROL DE STOCK INTELIGENTE:
- Carga tus productos (Hamburguesas, Cervezas, Gaseosas).
- Cada vez que vendes, el sistema DESCUENTA SOLO del inventario.
- Alerta visual de "BAJO STOCK" cuando te quedan pocas unidades.
- Si cancelas un pedido, el stock vuelve automáticamente.

4. REPORTES DE CAJA Y DINERO:
- Cierre de caja diario automático.
- Mira cuánto vendiste hoy y cuántas mesas cerraste.
- Historial completo de tickets con fecha y hora.

5. IMPRESIÓN DE TICKETS COMANDAS:
- Compatible con impresoras térmicas (58mm/80mm) y convencionales.
- Diseño de ticket profesional para entregar al cliente.

6. SEGURIDAD DE TUS DATOS:
- Función exclusiva de COPIA DE SEGURIDAD.
- Guarda tu base de datos en tu computadora con un click.
- Restaura tu negocio en cualquier otra PC en segundos.

MULTIPLATAFORMA Y LIVIANO:
- Funciona en PC, Notebook, Netbook, Tablets o Celulares.
- No instalas nada pesado: Se ejecuta directamente en el navegador (Chrome, Edge, etc.).
- Súper rápido: No se tilda ni en computadoras viejas.

ENTREGA INMEDIATA:
Al realizar la compra, te enviamos los archivos del sistema y una guía rápida de uso. Como es un archivo digital, lo recibes en el momento por chat de Mercado Libre o Email.`,
        features: ["Gestión de Mesas Visual", "Mozos desde Celular", "Control de Stock", "Cierre de Caja", "Tickets e Impresión", "Sin Mensualidades"]
    },
    {
        id: 3,
        title: "Taller Pro - Gestión de Órdenes y Service",
        category: "gestion",
        price: "Consultar",
        image: "Taller Pro/taller-pro-promo.png",
        images: ["Taller Pro/taller-pro-promo.png", "Taller Pro/1.png", "Taller Pro/2.png", "Taller Pro/3.png", "Taller Pro/4.png", "Taller Pro/5.png", "Taller Pro/6.png", "Taller Pro/7.png", "Taller Pro/8.png"],
        description: `SISTEMA DE GESTIÓN PARA TALLERES Y SERVICE POST-VENTA

Optimice su taller y profesionalice la atención a sus clientes con nuestra herramienta de gestión digital. Diseñada específicamente para servicios técnicos de electrónica, computación, talleres mecánicos, laboratorios de celulares y todo negocio que requiera seguimiento de reparaciones.

¿QUÉ ES TALLER PRO?
Es una aplicación web que funciona directamente en su navegador. No requiere instalaciones complejas, no paga suscripciones mensuales y funciona tanto en PC como en tablets.

FUNCIONALIDADES PRINCIPALES:

1. PANEL DE ADMINISTRACIÓN:
Registro rápido de nuevos ingresos, datos del cliente, equipo y falla reportada.

2. CONTROL DE ESTADOS:
Actualice el progreso con un solo clic (En Espera → En Taller → Esperando Repuestos → Listo para Retirar → Entregado).

3. GENERADOR DE TICKETS DIGITALES:
El sistema genera un enlace único para cada cliente. Usted lo comparte por WhatsApp y el cliente puede ver el avance desde su propio celular.

4. TARJETA DE ESTADO EN IMAGEN:
Descargue automáticamente una imagen profesional con el resumen del estado para enviar directamente por WhatsApp. Mejora la imagen de su marca y genera confianza.

5. BÚSQUEDA RÁPIDA:
Encuentre cualquier orden por nombre del cliente o modelo del equipo de forma instantánea.

VENTAJAS EXCLUSIVAS:
- SIN COSTOS MENSUALES: Realiza un único pago y la herramienta es suya de por vida.
- PRIVACIDAD TOTAL: Los datos se guardan de forma local en su navegador.
- COMPATIBILIDAD TOTAL: Funciona en Windows, Mac, Android e iOS en cualquier navegador moderno.

IDEAL PARA:
- Servicios técnicos de celulares y tablets.
- Reparación de computadoras y notebooks.
- Talleres mecánicos y de motos.
- Service de electrodomésticos.
- Cualquier negocio que trabaje con orden de ingreso.

PERSONALIZACIÓN: Al comprar, proporciónenos el nombre de su negocio para personalizar la interfaz con su marca.`,
        features: ["Órdenes de Reparación", "Control de Estados", "Ticket Digital por WhatsApp", "Imagen de Estado", "Búsqueda Rápida", "Sin Mensualidades"]
    },

    {
        id: 5,
        title: "Pizzería Pro POS - Gestión de Pedidos y Stock",
        category: "gastronomia",
        price: "Consultar",
        image: "Pizzería Pro Pos/portada_mercadolibre.png",
        images: ["Pizzería Pro Pos/portada_mercadolibre.png", "Pizzería Pro Pos/1.png", "Pizzería Pro Pos/2.png", "Pizzería Pro Pos/3.png", "Pizzería Pro Pos/4.png", "Pizzería Pro Pos/5.png", "Pizzería Pro Pos/6.png", "Pizzería Pro Pos/7.png"],
        description: `SISTEMA PIZZERIA PRO POS - GESTIÓN DE PEDIDOS Y STOCK
>>> ¡IDEAL PARA PIZZERÍAS, ROTISERÍAS Y DELIVERY! <<<

¿Tienes una Pizzería, Casa de Comidas o Food Truck?
Olvídate de pagar abonos mensuales. Pizzeria Pro es la solución definitiva para gestionar tus pedidos de mostrador y delivery de forma rápida, fácil y desde cualquier dispositivo.

MULTIPLATAFORMA TOTAL:
Úsalo donde quieras. El diseño se adapta automáticamente:
- PC / Notebook (Escritorio o Mostrador)
- CELULAR (Ideal para tomar pedidos en la vereda o delivery)
- TABLET

PRINCIPALES FUNCIONES:

1. GESTIÓN DE PEDIDOS "PARA LLEVAR" Y DELIVERY:
- Carga el NOMBRE DEL CLIENTE en cada pedido.
- Identifica rápidamente de quién es cada comanda en la pantalla principal.
- Ticket personalizado con el nombre del cliente para facilitar la entrega.

2. CONTROL DE STOCK Y PRECIOS FÁCIL:
- Carga tus Pizzas, Empanadas, Bebidas y Promociones.
- Edita PRECIOS y STOCK directamente desde la lista en segundos (¡Super rápido para actualizar precios por inflación!).
- Control visual: El sistema te avisa cuando queda poco stock.

3. TOMA DE PEDIDOS ÁGIL:
- Interfaz limpia y moderna (Modo Oscuro).
- Calcula el total automáticamente.
- Sistema de "Carrito" para agregar múltiples items (Pizzas, Fainá, Bebidas).

4. CAJA Y REPORTES:
- Mira cuánto vendiste en el día (Total en $$$).
- Cuenta la cantidad de pedidos despachados.
- Historial de transacciones con hora y detalle.

5. IMPRESIÓN DE TICKETS:
- Genera tickets profesionales para comandas o para el cliente.
- Compatible con impresoras térmicas y de hogar.

VENTAJAS CLAVE:
- UN SOLO PAGO: Licencia de por vida. No pagas mantenimientos ni alquileres mensuales.
- COPIA DE SEGURIDAD: Puedes guardar y restaurar tu base de datos fácilmente en cualquier momento.

IMPORTANTE: Una vez realizada la compra, nos tienen que proporcionar el nombre de su negocio y el logo para personalizar la web para su negocio.`,
        features: ["Pedidos Delivery", "Nombre del Cliente", "Control de Stock", "Edición Rápida de Precios", "Tickets Imprimibles", "Sin Mensualidades"]
    },
    {
        id: 28,
        title: "RestoBar Digital App - Menú QR con WhatsApp",
        category: "gastronomia",
        price: "Consultar",
        image: "RestoBar Digital App/Imagen publicitaria.png",
        images: ["RestoBar Digital App/Imagen publicitaria.png", "RestoBar Digital App/1.png", "RestoBar Digital App/2.png", "RestoBar Digital App/3.png", "RestoBar Digital App/4.png", "RestoBar Digital App/5.png", "RestoBar Digital App/6.png", "RestoBar Digital App/7.png", "RestoBar Digital App/8.png", "RestoBar Digital App/9.png"],
        description: `Sistema de Pedidos Gastronómico con Integración WhatsApp y Menú Digital

Modernice la gestión de pedidos de su restaurante, bar o cafetería con este sistema integral que combina una aplicación web de autogestión para clientes y un panel de control simple para la cocina.

FUNCIONAMIENTO DEL SISTEMA:

EL CLIENTE:
- Escanea un código QR en la mesa o accede mediante un enlace web.
- Visualiza el menú completo con fotos, descripciones y precios actualizados.
- Selecciona sus productos, agrega aclaraciones (ej: "sin cebolla") y confirma el pedido.
- El sistema genera automáticamente un mensaje de WhatsApp detallado y lo envía al número del comercio.

LA COCINA / MOZO:
- Recibe el pedido en WhatsApp de forma instantánea y legible.
- Puede confirmar la recepción con un solo clic.
- Si un producto no está disponible, la cocina puede responder directamente por WhatsApp informando al cliente y ofreciendo una alternativa.

CARACTERÍSTICAS PRINCIPALES:

1. Menú Digital Interactivo:
- Diseño profesional adaptable a cualquier celular (Android/iPhone).
- Categorías claras (Entradas, Platos, Bebidas, Postres).
- No requiere que el cliente instale ninguna aplicación.

2. Comunicación Directa y Flexible:
- Al utilizar WhatsApp como canal de pedido, se habilita un canal bidireccional.
- Permite informar faltantes de stock en tiempo real directamente al cliente.
- Facilita la confirmación de demoras o consultas sobre el punto de cocción.

3. Autogestión y Eficiencia:
- Reduce errores de comanda al estar escrito por el propio cliente.
- Libera a los mozos de la toma de pedidos, permitiéndoles enfocarse en el servicio y la entrega.

4. Cero Costo de Mantenimiento:
- Sistema basado en web estática.
- No requiere pagar servidores mensuales ni bases de datos complejas.
- Funciona 24/7 sin costos ocultos.

IDEAL PARA:
- Bares con alta rotación en mesas.
- Restaurantes que buscan digitalizar su carta.
- Servicios de comida rápida o Food Trucks.
- Hoteles (Room Service).

INCLUYE:
- Configuración inicial con su menú y precios.
- Guía de uso y puesta en marcha.
- App Android (Opcional).`,
        features: ["Menú Digital QR", "Pedidos por WhatsApp", "Sin App para el Cliente", "Carta con Fotos", "Sin Mensualidades", "App Android Opcional"]
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
        image: "Gestión de Preventistas/publicidad.png",
        images: ["Gestión de Preventistas/publicidad.png", "Gestión de Preventistas/1.png", "Gestión de Preventistas/2.png", "Gestión de Preventistas/3.png", "Gestión de Preventistas/4.png", "Gestión de Preventistas/5.png"],
        video: "Gestión de Preventistas/Video de Gestión de Preventistas.mp4",
        description: `¡Optimiza la Gestión de Preventistas con Nuestra Web App Personalizada!

¿Qué ofrecemos?
Transforma la gestión de tus preventistas con una aplicación web y móvil diseñada para facilitar el control de clientes, productos y pedidos. Lleva tu negocio al siguiente nivel con herramientas digitales profesionales.

Características Principales:

Gestión de clientes, productos y pedidos en tiempo real.
Registro de clientes con datos clave (nombre, dirección, etc.).
Control de productos con precios y categorías.
Registro y seguimiento de pedidos con opciones de exportación (JSON, Excel).
Reportes detallados para análisis de ventas.
Interfaz intuitiva y fácil de usar.
Funciona sin conexión a internet (modo offline).
Soporte técnico incluido.
Beneficios para tu negocio:

Ahorra tiempo en la gestión diaria.
Reduce errores en el registro de pedidos.
Mejora la atención al cliente con información organizada.
Toma decisiones basadas en datos reales.
Acceso desde cualquier dispositivo móvil o computadora.
Incluye:

Aplicación Web.
Versión ejecutable para PC (Windows).
Panel web de administración.
Capacitación inicial para tu equipo.
Manual de usuario detallado.
Soporte técnico por 30 días.
¿Cómo funciona?

Nos cuentas las necesidades específicas de tus preventistas.
Personalizamos la aplicación con tu marca y requerimientos.
Te entregamos la app lista para usar.
Capacitamos a tu personal para que aprovechen al máximo la herramienta.
¿Por qué elegirnos?

Solución 100% personalizable.
Sin costos ocultos.
Actualizaciones periódicas incluidas.
Soporte técnico especializado.
Precio accesible para emprendedores.
Términos del Servicio:

El precio incluye instalación y configuración inicial.
Compatible con dispositivos Android 8.0 o superior.
Se requiere conexión a internet para sincronización de datos.
Tiempo de desarrollo: 3-5 días hábiles.
¡Haz crecer tu negocio con tecnología profesional!
Contáctanos para más información y una cotización personalizada.

Esta versión está optimizada para destacar las ventajas y características clave de la aplicación, enfocándose en las necesidades de los preventistas.`,
        features: ["Clientes y Pedidos", "Modo Offline", "Exportar JSON/Excel", "Reportes", "Web y PC", "Personalizable"]
    },
    {
        id: 20,
        title: "Gestión Clínica",
        category: "salud",
        price: "Consultar",
        image: "Gestión de Clinica/Imágen de gestión de clínica.jpg",
        images: ["Gestión de Clinica/Imágen de gestión de clínica.jpg", "Gestión de Clinica/1.png", "Gestión de Clinica/2.png", "Gestión de Clinica/3.png", "Gestión de Clinica/4.png", "Gestión de Clinica/5.png", "Gestión de Clinica/6.png", "Gestión de Clinica/7.png", "Gestión de Clinica/8.png", "Gestión de Clinica/9.png", "Gestión de Clinica/10.png"],
        description: `¡Gestiona tu clínica con facilidad desde cualquier dispositivo!

APLICACIÓN WEB RESPONSIVE - Accede desde PC, Celular y Tablet
Sistema de gestión de clínica es una aplicación web moderna, intuitiva y completa para la gestión de tu clínica. Funciona en cualquier navegador web (Chrome, Firefox, Safari, Edge) y se adapta perfectamente a cualquier dispositivo: computadora de escritorio, laptop, celular o tablet.

Olvídate de las hojas de cálculo y los archivos desordenados, con Sistema de gestión de clínica tendrás todo lo que necesitas para optimizar tu trabajo y brindar una atención médica de calidad, estés donde estés.

Sistema de gestión de clínica te ofrece:

Gestión de pacientes: Registra información personal, historial clínico, diagnósticos, tratamientos y observaciones de forma rápida y eficiente.
Control de citas: Agenda turnos, gestiona la disponibilidad de los médicos y envía recordatorios a tus pacientes.
Historial clínico: Accede a la información médica de tus pacientes de forma segura y organizada.
Facturación: Genera facturas y recibos de forma automatizada.
Reportes: Obtén estadísticas e informes sobre la actividad de tu clínica.
Sistema de gestión de clínica es la solución ideal para:

Clínicas médicas
Consultorios
Hospitales
Centros de salud
Beneficios:

Mayor eficiencia: Simplifica la gestión de tu clínica y libera tiempo para dedicarte a tus pacientes.
Mejor organización: Organiza la información médica de tus pacientes de forma segura y accesible.
Atención personalizada: Brinda una atención médica más personalizada y eficiente.
Toma de decisiones informada: Accede a estadísticas e informes para tomar decisiones estratégicas.

PERSONALIZACIÓN INCLUIDA:

Después de tu compra, necesitaremos que nos proporciones:
Nombre de tu clínica o nombre profesional
Logo de tu clínica (formato PNG, JPG o similar)

Con esta información personalizaremos completamente la aplicación web para que luzca con la identidad de tu negocio. ¡Tu clínica tendrá su propia aplicación profesional y personalizada!`,
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
    {
        id: 29,
        title: "RepuestosPOS - Sistema para Casas de Repuestos",
        category: "ventas",
        price: "Consultar",
        image: "RepuestosPOS/repuestos_pos_promo.png",
        images: ["RepuestosPOS/repuestos_pos_promo.png", "RepuestosPOS/1.png", "RepuestosPOS/2.png", "RepuestosPOS/3.png", "RepuestosPOS/4.png", "RepuestosPOS/5.png", "RepuestosPOS/6.png", "RepuestosPOS/7.png", "RepuestosPOS/8.png", "RepuestosPOS/9.png"],
        description: `REPUESTOSPOS - SISTEMA INTEGRAL PARA CASAS DE REPUESTOS

Potencie la gestión de su negocio con RepuestosPOS, una solución de punto de venta (POS) diseñada específicamente para las necesidades del sector automotriz. Este software permite un control absoluto sobre el stock, las ventas y la relación con clientes y talleres, todo desde una interfaz moderna, rápida y segura.

MÓDULOS PRINCIPALES DEL SISTEMA:

1. GESTIÓN DE INVENTARIO INTELIGENTE:
Administración detallada de repuestos incluyendo código SKU, marca, categoría y precios. El sistema cuenta con alertas visuales de stock bajo y crítico, permitiendo anticipar la reposición de mercadería y evitar faltantes.

2. PUNTO DE VENTA (POS) ÁGIL:
Interfaz de venta optimizada para operaciones rápidas. Permite la selección de productos con un clic, búsqueda por código o nombre, y gestión de carrito de compras con actualización de stock en tiempo real al finalizar la transacción.

3. SISTEMA DE PAGOS Y VENTAS "A CUENTA":
Ideal para el trabajo con mecánicos y talleres. El sistema permite registrar ventas con pago diferido (A Cuenta), facilitando el seguimiento de saldos pendientes. Soporta además efectivo, tarjeta y transferencia.

4. PANEL DE CLIENTES Y TALLERES:
Base de datos completa de clientes con CUIT/DNI y datos de contacto. Incluye una función exclusiva para asociar ventas a un "Cliente Final" dentro de la cuenta del taller, permitiendo un ordenamiento superior en el despacho de piezas.

5. REPORTES Y EXPORTACIÓN DE DATOS:
Visualización de estadísticas de ventas diarias, promedio por ticket e historial completo de transacciones. El sistema permite realizar backups completos en formato Excel y JSON, permitiendo además importar datos desde archivos externos para una migración sin problemas.

CARACTERÍSTICAS TÉCNICAS:
- Interfaz Responsiva: Totalmente compatible con computadoras, tablets y celulares.
- Diseño Glassmorphism: Estética moderna de alto impacto visual para una experiencia de usuario premium.
- Sin Instalaciones Complejas: El sistema funciona directamente desde el navegador.
- Persistencia Local: Los datos se guardan de forma segura en el almacenamiento del navegador.
- Privacidad Total: La información del negocio permanece en el equipo del usuario.

ADQUISICIÓN DEL PRODUCTO:
La compra incluye el acceso completo al sistema listo para ser configurado con el nombre y marca de su comercio desde el panel de ajustes. No requiere abonos mensuales.`,
        features: ["Inventario con SKU", "POS Ágil", "Ventas A Cuenta", "Panel de Talleres", "Exportar Excel/JSON", "Sin Mensualidades"]
    },
];
