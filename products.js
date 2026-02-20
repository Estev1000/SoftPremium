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
        image: "HotelPOS/publicidad_hotelpos.png",
        images: ["HotelPOS/publicidad_hotelpos.png", "HotelPOS/1.png", "HotelPOS/2.png", "HotelPOS/3.png", "HotelPOS/4.png", "HotelPOS/5.png", "HotelPOS/6.png", "HotelPOS/7.png", "HotelPOS/8.png", "HotelPOS/9.png", "HotelPOS/10.png"],
        description: `Hotel_POS - SISTEMA DE GESTIÓN HOTELERA PREMIUM

Transforma la administración de tu hotel, posada o departamento temporal con una herramienta moderna, veloz y elegante. Diseñada para ofrecer una experiencia de usuario única con estética "Glassmorphism" (Efecto Cristal) y modo oscuro de alto rendimiento.

¡IDEAL PARA HOTELES BOUTIQUE, HOSTALES Y PERSONAS QUE BUSCAN SIMPLICIDAD SIN PERDER EL PODER!

---

CARACTERÍSTICAS PRINCIPALES:

DASHBOARD INTELIGENTE
Visualiza el estado de tu negocio al instante. Control de ingresos mensuales, habitaciones ocupadas y reservas activas desde una sola pantalla con gráficas limpias.

GESTIÓN DE HABITACIONES
Organiza tu inventario por tipos, capacidades y precios. Mantén un control estricto de la disponibilidad en tiempo real.

CONTROL DE RESERVAS DINÁMICO
Registra clientes, asigna habitaciones y gestiona el ciclo del huésped (Check-in, Confirmada, Cancelada). ¡Nunca más pierdas una reserva!

FACTURACIÓN Y TICKETS TÉRMICOS
Genera facturas detalladas y realiza impresiones profesionales. Optimizado específicamente para impresoras térmicas (80mm), perfecto para entregar comprobantes rápidamente.

---

¿POR QUÉ ELEGIR Hotel POS?

- VERSION PC Y WEB: Se entrega versión ejecutable para escritorio (Windows) y versión web.
- TRABAJO SIN INTERNET: La versión de PC funciona de forma totalmente offline, sin depender de una conexión.
- PERSONALIZACION INCLUIDA: Nos compartes el logo y nombre de tu hotel y nosotros personalizamos el sistema por ti.
- SIN PAGOS MENSUALES: El sistema es tuyo para siempre con un único pago. Olvídate de suscripciones costosas.
- PRIVACIDAD TOTAL: Los datos se guardan localmente. Tú tienes el control absoluto de tu información.
- DISEÑO PREMIUM: Una interfaz que "enamora" a la vista. Moderniza la imagen de tu recepción.
- PESO PLUMA: Corre velozmente y sin instalaciones complicadas.

---

ESPECIFICACIONES TÉCNICAS:
- Tecnología: HTML5, CSS3 (Modern UI), JavaScript.
- Almacenamiento: LocalStorage persistente.
- Compatibilidad: Windows (PC), Chrome, Edge, Safari, Firefox.
- Impresión: Soporte para tickets de 80mm.

¿QUÉ INCLUYE TU COMPRA?
- Archivos de la versión Web.
- Instalador / Ejecutable para PC (Windows).
- Personalización con tu Logo y Nombre de Hotel.
- Soporte para configuración inicial.

¡Lleva tu gestión al siguiente nivel con Hotel POS! Respondemos todas tus dudas en la sección de preguntas.`,
        features: ["Reservas", "Habitaciones", "Facturación", "Tickets 80mm", "PC y Web", "Sin Mensualidades"]
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
        category: "agenda",
        price: "Consultar",
        image: "Agenda de Turnos/Screenshot_20250703-065310.png",
        images: ["Agenda de Turnos/Screenshot_20250703-065310.png", "Agenda de Turnos/Screenshot_20250703-065319.png", "Agenda de Turnos/Screenshot_20250703-065333.png", "Agenda de Turnos/Screenshot_20250703-065420.png", "Agenda de Turnos/Screenshot_20250703-071407.png"],
        description: `Agenda de Turnos para Comercios y Profesionales – Tu App Personalizada para Android

¿Cansado de perder turnos o anotar en papel? Con esta app web exclusiva para Android podrás gestionar todos tus turnos de manera simple, rápida y desde tu celular.

CARACTERÍSTICAS PRINCIPALES:
- Agrega Turnos: Con nombre, fecha, hora y teléfono del cliente.
- Visualiza y Busca: Encuentra turnos fácilmente por nombre o fecha.
- Elimina Turnos: Con confirmación para evitar errores.
- Exporta a Excel/CSV: Mantén respaldo de tus turnos en tu computadora.
- Importa Turnos: Desde archivos CSV para no perder datos.
- Almacenamiento Local: Todos los datos quedan guardados en tu teléfono.
- Interfaz Clara y Rápida: Diseñada especialmente para pantallas de celular.
- Historial de Turnos: Acceso a todos tus registros anteriores.

IDEAL PARA:
- Peluquerías, barberías, centros de estética.
- Consultorios médicos, odontológicos, psicólogos.
- Talleres, servicios técnicos, profesionales independientes.
- Cualquier comercio que necesite organizar turnos.

¿CÓMO FUNCIONA?
1. Recibe tu app personalizada con el nombre de tu comercio.
2. Ábrela en tu celular Android (puedes agregarla a la pantalla de inicio como una app).
3. Empieza a cargar y gestionar tus turnos.
4. Olvídate del papel y lleva tu agenda siempre con vos.`,
        features: ["Agrega Turnos", "Busca por Nombre/Fecha", "Exporta a Excel/CSV", "Importa Turnos", "Almacenamiento Local", "Interfaz Mobile-Friendly"]
    },
    {
        id: 11,
        title: "Tienda de Ropa System",
        category: "ventas",
        price: "Consultar",
        image: "Tienda de Ropa/1.png",
        images: ["Tienda de Ropa/1.png", "Tienda de Ropa/2.png", "Tienda de Ropa/3.png", "Tienda de Ropa/4.png", "Tienda de Ropa/5.png", "Tienda de Ropa/6.png", "Tienda de Ropa/7.png", "Tienda de Ropa/8.png"],
        description: `Sistema de Gestión para Tienda de Ropa - Control Integral de tu Negocio de Indumentaria

Administra tu tienda de ropa de manera profesional y sencilla. Control completo de talles, colores, stock y ventas en un solo lugar.

CARACTERÍSTICAS PRINCIPALES:
- Matriz Talle/Color: Gestiona todas las variantes de tus prendas en una interfaz clara e intuitiva.
- Control de Stock en Tiempo Real: Sabe exactamente qué tienes disponible por talle y color.
- Gestión de Cambios y Devoluciones: Registra cambios y devoluciones fácilmente con historial completo.
- Sistema de Ventas (POS): Caja rápida y eficiente para atender a tus clientes.
- Impresión de Etiquetas: Genera etiquetas de precio y código de barras automáticamente.
- Historial de Ventas: Reportes detallados por fecha, producto y cliente.
- Gestión de Clientes: Registra datos de clientes y su historial de compras.
- Sistema de Fidelización: Seguimiento de clientes frecuentes y promociones.
- 100% Responsivo: Funciona en PC, Tablets y Celulares.
- Sin Dependencia de Internet: Todos tus datos guardados localmente en tu dispositivo.`,
        features: ["Matriz Talle/Color", "Control de Stock", "Impresión de Etiquetas", "Cambios y Devoluciones", "Sistema POS", "Fidelización de Clientes", "Reportes de Ventas"]
    },
    {
        id: 12,
        title: "Gestión de Panadería",
        category: "gastronomia",
        price: "Consultar",
        image: "Gestión de Panadería/Imágen de publicidad.png",
        images: ["Gestión de Panadería/Imágen de publicidad.png", "Gestión de Panadería/1.png", "Gestión de Panadería/2.png", "Gestión de Panadería/3.png", "Gestión de Panadería/4.png"],
        description: `Descripción
Aplicación de Gestión para Panaderías - ¡Tu Panadería en la Nube!¿Qué ofrecemos?
Desarrollo de una aplicación móvil y web personalizada para la gestión completa de tu panadería. Convierte tu negocio tradicional en una panadería digital con herramientas profesionales de administración.

Características Principales:
Gestión de Inventario en tiempo real
Control de Ventas con tickets digitales
Registro de Productos con precios y categorías
Reportes de Ventas diarios, semanales y mensuales
Interfaz intuitiva y fácil de usar
Funciona sin internet (modo offline)
Soporte técnico incluido
Beneficios para tu Negocio:
Ahorra tiempo en la gestión diaria
Reduce errores en el inventario
Mejora la atención al cliente
Toma decisiones basadas en datos reales
Acceso desde cualquier dispositivo móvil
Incluye:
Aplicación móvil para Android
Panel web de administración
Capacitación inicial
Manual de usuario
Soporte técnico por 30 días
¿Cómo funciona?
Nos cuentas las necesidades de tu panadería
Personalizamos la aplicación con tu marca
Te entregamos la app lista para usar
Capacitamos a tu personal
¡Comienzas a gestionar tu negocio de forma profesional!
¿Por qué elegirnos?
Solución 100% personalizable
Sin costos ocultos
Actualizaciones periódicas
Soporte técnico especializado
Precio accesible para emprendedores
Contáctanos:
¡Haz crecer tu panadería con tecnología profesional! Escríbenos para más información y cotización personalizada.

Nota: Las imágenes mostradas son ilustrativas. La aplicación se personalizará con el nombre y la identidad de tu panadería.

¡Convierte tu panadería tradicional en un negocio digital exitoso!

Términos del Servicio:

El precio incluye instalación y configuración inicial
Se requiere conexión a internet para la sincronización de datos
Compatible con dispositivos Android 8.0 en adelante
El tiempo de desarrollo aproximado es de 3-5 días hábiles
¿Listo para modernizar tu panadería? ¡Contáctanos hoy mismo!

Sin garantía`,
        features: ["Inventario", "Ventas", "Productos", "Reportes", "Modo Offline", "Personalizable"]
    },
    {
        id: 13,
        title: "Web App para Remises",
        category: "transporte",
        price: "Consultar",
        image: "Web App para remises/1.png",
        images: ["Web App para remises/1.png", "Web App para remises/2.png", "Web App para remises/3.png", "Web App para remises/4.png", "Web App para remises/5.png", "Web App para remises/6.png"],
        description: `Web App de Remises "San Luis Rides" - Plataforma Moderna para Servicios de Transporte

Optimiza tu servicio de remises con una Web App moderna y lista para usar. Permite a tus clientes reservar viajes, conocer tus servicios y pagar fácilmente mediante Mercado Pago desde el celular o la computadora.

¿QUÉ ES?

- Web App responsive para remiseros y agencias, disponible 24/7
- Construida con React y Tailwind CSS para una experiencia rápida y moderna
- Totalmente adaptable a móviles y computadoras
- Marca personalizable con tu logo y nombre

CARACTERÍSTICAS PRINCIPALES:

RESERVAS Y SERVICIOS:
- Botón destacado "Reservar Ahora" en la portada
- Listado de servicios: Viajes Urbanos, Traslados Especiales, Servicio VIP
- Multi-conductor: lista de remiseros con nombre, alias y reputación visible
- Interfaz intuitiva y navegación con scroll suave

SISTEMA DE PAGOS:
- Integración con Mercado Pago
- Selección de remisero desde lista
- Ingreso del monto a pagar
- Copia automática del alias del remisero
- Apertura automática de Mercado Pago (app o web según el dispositivo)

SECCIONES INCLUIDAS:
- Home/Hero: Mensaje claro y botones de acción
- Servicios: Descripción de tipos de viajes
- Pagos: Formulario de selección y pago
- Contacto: Formulario de consultas
- Footer: Datos de contacto, ubicación y horarios

BENEFICIOS:
- Reservas más simples para tus clientes
- Pagos rápidos y seguros con Mercado Pago
- Experiencia premium con diseño elegante
- Disponible 24/7 en cualquier dispositivo
- Carga rápida optimizada para móviles

QUÉ INCLUYE:

- Código fuente HTML auto-contenido
- UI moderna en Tailwind CSS
- Lógica con React (via CDN)
- Listado de remiseros editable
- Flujo de pago completamente funcional
- Todas las secciones: Inicio, Servicios, Pagar y Contacto
- Arquitectura lista para personalizar

PERSONALIZACIONES OPCIONALES:

- Cambio de nombre, logo y colores
- Alta/baja y edición de remiseros
- Integración de WhatsApp y redes sociales
- Formulario de contacto conectado a email/WhatsApp
- Dominio y hosting (servicios adicionales)

REQUISITOS TÉCNICOS:

- Se entrega como archivo HTML auto-contenido
- Usa CDNs para estilos y librerías
- Opcional: hosting estático (Netlify, GitHub Pages, etc.)
- No requiere backend

SOPORTE Y ENTREGA:

- Entrega digital inmediata del archivo HTML
- Guía para editar remiseros, textos y contactos
- Soporte para instalación y publicación básica`,
        features: ["Reservas Online", "Sistema de Pagos Mercado Pago", "Multi-conductor", "100% Responsivo", "Personalizable", "Integración WhatsApp"]
    },
    {
        id: 14,
        title: "TasApp Pro - Gestión de Propiedades",
        category: "servicios",
        price: "Consultar",
        image: "Gestión de Propiedades/Screenshot_20250609-030435.png",
        images: ["Gestión de Propiedades/Screenshot_20250609-030435.png", "Gestión de Propiedades/Screenshot_20250609-030448.png", "Gestión de Propiedades/Screenshot_20250609-030457.png"],
        description: `TasApp Pro - Sistema Profesional de Tasaciones Inmobiliarias

Solución integral desarrollada con React y Tailwind CSS para profesionales tasadores inmobiliarios, inmobiliarias y brokers. Gestiona tasaciones, propiedades y genera informes profesionales en PDF de forma rápida y eficiente.

CARACTERÍSTICAS PRINCIPALES:

- Registro de Datos del Tasador: Almacena nombre, matrícula profesional y datos de contacto (guardados automáticamente).
- Registro de Cliente: Información del cliente y fecha de la tasación.
- Gestión Completa de Propiedades:
  * Dirección y ubicación
  * Tipo de propiedad (Casa, Departamento, Terreno, Comercial)
  * Superficie en m²
  * Valor estimado
  * Antigüedad de la construcción
  * Estado de la propiedad (Excelente, Muy bueno, Bueno, Regular, Malo)
  * Destino (Vivienda, Comercial, Industrial)
  * Descripción detallada
  * Observaciones especiales
  * Foto de la propiedad (almacenada en base64)

- Informes PDF Profesionales: Genera documentos listos para imprimir con:
  * Encabezado con datos del tasador y matrícula
  * Datos del cliente y fecha
  * Detalles completos de la propiedad
  * Foto adjunta
  * Espacio para firma del tasador
  * Nota legal de disclaimer

- Exportación de Datos:
  * Exportar a JSON (respaldo completo)
  * Exportar a Excel/CSV (para análisis en hojas de cálculo)
  * Importar JSON (recuperar datos previamente guardados)

- Almacenamiento Seguro: Todos los datos se guardan localmente en el navegador (localStorage).
- 100% Responsivo: Funciona perfectamente en PC, tablets y celulares.
- Interfaz Intuitiva: Diseño moderno con gradientes y sombras profesionales.

IDEAL PARA:

- Tasadores inmobiliarios independientes
- Inmobiliarias y brokers
- Empresas de valuación de propiedades
- Profesionales del sector inmobiliario

BENEFICIOS:

- Genera informes profesionales en segundos
- Ahorra tiempo en documentación
- Mantén registro organizado de todas las tasaciones
- Exporta datos para análisis
- Sin suscripciones mensuales
- Datos privados y seguros en tu dispositivo`,
        features: ["Registro de Propiedades", "Datos de Tasador", "Informes PDF", "Exportar JSON/CSV", "Importar Datos", "Almacenamiento Local", "100% Responsivo"]
    },
    {
        id: 17,
        title: "Gestor de Celulares",
        category: "tecnologia",
        price: "Consultar",
        image: "Gestor de celulares/Screenshot_20250611-083156.png",
        images: ["Gestor de celulares/Screenshot_20250611-083156.png", "Gestor de celulares/Screenshot_20250611-083202.png", "Gestor de celulares/Screenshot_20250611-083209.png", "Gestor de celulares/Screenshot_20250611-083339.png", "Gestor de celulares/Screenshot_20250611-083352.png", "Gestor de celulares/Screenshot_20250611-083449.png"],
        description: `Gestor de Celulares - Sistema de Administración para Vendedores

¡Optimiza la gestión de tu negocio de celulares con nuestra aplicación web profesional! Diseñada específicamente para vendedores de Mercado Libre y tiendas de tecnología.

CARACTERÍSTICAS PRINCIPALES:
- Panel Intuitivo: Gestiona tu inventario de celulares de manera simple y visual.
- Catálogo Dinámico: Agregar nuevos modelos con imágenes, precios y características.
- Búsqueda Rápida: Encuentra productos al instante.
- Actualización en Tiempo Real: Modifica precios, stock y características al momento.
- Especificaciones Completas: Registra RAM, almacenamiento, color y más detalles.
- Gestión de Stock: Control preciso de inventario disponible.
- Carga de Imágenes: Sube fotos directamente desde URL.
- Diseño Responsive: Funciona perfectamente en PC, tablets y celulares.
- Almacenamiento Seguro: Datos guardados localmente en tu dispositivo.
- Interfaz Moderna: Animaciones, notificaciones y experiencia de usuario profesional.

IDEAL PARA:
- Vendedores de celulares en Mercado Libre
- Tiendas de tecnología
- Comerciantes independientes
- Emprendedores del sector móvil

BENEFICIOS:
- Ahorra tiempo en la gestión de inventario
- Mantén tu catálogo siempre actualizado
- Mejora la presentación de tus productos
- Interfaz profesional y fácil de usar
- 100% Responsivo en todos los dispositivos`,
        features: ["Gestión de Inventario", "Búsqueda Rápida de Productos", "Especificaciones Técnicas", "Carga de Imágenes", "Gestión de Precios", "Control de Stock"]
    },
    {
        id: 18,
        title: "Auto Lavado App",
        category: "servicios",
        price: "Consultar",
        image: "Web App de lavadero de autos/1.png",
        images: ["Web App de lavadero de autos/1.png", "Web App de lavadero de autos/2.png", "Web App de lavadero de autos/3.png"],
        description: `Web App de Lavadero de Autos - Contacto por WhatsApp

Web responsive para lavaderos de autos que permite chatear al instante por WhatsApp de forma profesional y organizada.

CARACTERÍSTICAS PRINCIPALES:

- Botón Flotante de WhatsApp: Acceso instantáneo para los clientes.
- Formulario Inteligente: Arma automáticamente el mensaje con motivo, detalle, nombre del cliente.
- Chips de Respuestas Rápidas: Preguntas frecuentes que se agregan/quitan del mensaje al instante.
- Marcador de URGENCIA: Para servicios prioritarios o emergencias.
- Geolocalización: Opción de adjuntar ubicación del cliente automáticamente.
- Almacenamiento Local: Guarda número de WhatsApp del lavadero y nombre del cliente para uso repetido.
- Módulo "Emergencia Familiar": Agenda de contactos y envío secuencial por WhatsApp.
- Importar/Exportar Contactos: Respaldo y gestión de tus clientes.
- API Opcional: Si tienes API Key, integración avanzada de envío.
- 100% Responsivo: Funciona perfectamente en PC, tablets y celulares.
- Pago Único: Sin suscripciones mensuales.

BENEFICIOS PARA TU LAVADERO:

- Atención rápida y profesional por WhatsApp
- Mensajes claros y estructurados que evitan malentendidos
- Más clientes gracias a la facilidad de contacto
- Funciona en celular, tablet y computadora
- Compartible fácilmente en redes sociales y biografías

¿CÓMO FUNCIONA?

1. El cliente accede a tu web desde el link compartido
2. Completa el formulario con sus datos y detalles del servicio
3. El mensaje se arma automáticamente
4. Toca "Abrir WhatsApp" y conversan al instante
5. Tú respondes desde tu WhatsApp normal`,
        features: ["Contacto por WhatsApp", "Formulario Inteligente", "Geolocalización", "Agenda de Contactos", "100% Responsivo", "Pago Único"]
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
        id: 25,
        title: "Gestión Podología",
        category: "salud",
        price: "Consultar",
        image: "Gestión de podología/Publicidad_Podologia_Premium.png",
        images: ["Gestión de podología/Publicidad_Podologia_Premium.png", "Gestión de podología/1.png", "Gestión de podología/2.png", "Gestión de podología/3.png", "Gestión de podología/4.png", "Gestión de podología/5.png", "Gestión de podología/6.png", "Gestión de podología/7.png", "Gestión de podología/8.png", "Gestión de podología/9.png", "Gestión de podología/10.png", "Gestión de podología/11.png"],
        description: `GESTION DE PODOLOGIA PREMIUM - SOFTWARE PROFESIONAL

Optimice la administración de su consultorio con una herramienta diseñada específicamente para profesionales de la podología. Este sistema permite un control integral de pacientes, turnos e historias clínicas de forma rápida, segura y sin costos de mantenimiento.

CARACTERISTICAS PRINCIPALES

GESTION DE PACIENTES
- Registro completo de datos personales y de contacto.
- Campos especializados: Tipo de pie, talla de calzado e indicadores visuales de pacientes con diabetes.
- Buscador integrado para localización rápida de registros.

CONTROL DE TURNOS
- Agenda organizada por fecha y hora.
- Visualización de turnos diarios en el tablero principal (Dashboard).
- Gestión sencilla de estados de atención.

HISTORIAL CLINICO CON SEGUIMIENTO FOTOGRAFICO
- Registro detallado de diagnósticos, tratamientos y observaciones.
- Sistema de fotografía de precisión: Cargue hasta 3 fotos del estado inicial (Antes) y 3 fotos del estado final (Después) por cada consulta.
- Visor comparativo profesional: Visualice las fotografías de forma vertical y secuencial, permitiendo una comparación directa de la evolución del tratamiento.

SEGURIDAD Y PRIVACIDAD DE DATOS
- Privacidad total: Los datos se almacenan localmente en su dispositivo, garantizando que la información sensible no salga de su consultorio.
- No requiere suscripciones: Pago único de por vida, sin cuotas mensuales ni cargos ocultos.
- Copias de seguridad: Función de exportación e importación para respaldar toda su información o migrarla a otro equipo fácilmente.

VENTAJAS TECNICAS
- No requiere instalación: Funciona directamente desde su navegador web (Chrome, Edge, Firefox, etc.).
- Compatible con múltiples dispositivos: Puede utilizarse en PC, Notebooks, Tablets y celulares.
- Interfaz moderna y profesional: Diseño optimizado para una experiencia de usuario fluida y estética.

PERSONALIZACION Y ENTREGA
Al ser una versión Premium, el software se entrega personalizado. Una vez realizada la compra, deberá proporcionarnos por la mensajería privada:
1. Nombre de la clínica o del profesional.
2. Logotipo para el encabezado del sistema.

Se envía un archivo listo para ejecutar, sin complicaciones técnicas.
https://www.mercadolibre.com.ar/gestion-de-podologia-premium/up/MLAU3730526775?pdp_filters=item_id:MLA1647064035`,
        features: ["Pacientes", "Turnos", "Historial con Fotos", "Backups", "Privacidad Local", "Sin Mensualidades"]
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
        id: 30,
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
    {
        id: 31,
        title: "Gestión para Heladería",
        category: "ventas",
        price: "Consultar",
        image: "HeladeriaApp/publicidad_heladeria.png",
        images: ["HeladeriaApp/publicidad_heladeria.png", "HeladeriaApp/1.png", "HeladeriaApp/2.png", "HeladeriaApp/3.png", "HeladeriaApp/4.png", "HeladeriaApp/5.png", "HeladeriaApp/6.png", "HeladeriaApp/7.png", "HeladeriaApp/8.png", "HeladeriaApp/9.png"],
        description: `Heladería Avanzada: El Software de Gestión Integral para Tu Negocio de Helados
¿Estás buscando una herramienta eficiente y fácil de usar para gestionar tu heladería? ¡Nuestro programa es la solución perfecta para ti!
Características Principales:
Gestión de Precios: Configura y actualiza fácilmente los precios de tus helados por gusto, por peso o por tamaño de pote.
Administración de Sabores: Agrega, elimina y gestiona tus sabores favoritos de manera sencilla.
CONTROL DE STOCK E INVENTARIO 📦: Sistema doble de inventario. Controla el stock de "Productos Envasados/Kiosco" (helados de marca, postres) y también el stock de "Insumos de Mostrador" (cucuruchos, potes vacíos), con descuento automático por venta.
MODO KIOSCO / PRODUCTOS ENVASADOS: Nueva sección para vender productos de reventa (palitos, bombones, postres helados) con precios y stock independientes.
IMPRESIÓN INTELIGENTE DE TICKETS 🖨️: Genera tickets profesionales. Incluye función de "Reimpresión de Última Venta" por si olvidaste imprimirlo, y botón de impresión directa al finalizar la compra.
Resumen de Compras: Genera un resumen detallado de cada compra, incluyendo productos, precios y totales.
Ventas Totales: Accede fácilmente al registro de tus ventas totales acumuladas.
Importar/Exportar Ventas: Exporta e importa el historial de ventas y registros (items, fecha y totales) en formato Excel (.xlsx) o archivo para contabilidad y respaldo.
Interfaz Intuitiva: Nuestra interfaz es fácil de navegar y utilizar, incluso para aquellos sin experiencia en tecnología.
Beneficios para Tu Negocio:
Ahorro de Tiempo: Automatiza tareas administrativas y reduce el tiempo dedicado a la gestión.
CONTROL TOTAL DE AGOTADOS: Evita quedarte sin cucuruchos o productos clave gracias al monitoreo de stock en tiempo real.
Mayor Precisión: Reduce los errores humanos en la gestión de precios, sabores y ventas.
Mejora la Experiencia del Cliente: Ofrece una experiencia de compra más eficiente y agradable para tus clientes.
Qué incluye: Versión Web y versión PC en formato ejecutable.
¿Qué Esperas? ¡Descarga Nuestro Programa Hoy Mismo y Transforma la Gestión de Tu Heladería!`,
        features: ["Precios por Peso/Tamaño", "Sabores", "Stock Doble", "Modo Kiosco", "Tickets", "Exportar Excel"]
    },
    {
        id: 32,
        title: "Escritorio para Abogados",
        category: "gestion",
        price: "Consultar",
        image: "Escritorio para abogados/1.png",
        images: ["Escritorio para abogados/1.png", "Escritorio para abogados/2.png", "Escritorio para abogados/3.png", "Escritorio para abogados/4.png", "Escritorio para abogados/5.png", "Escritorio para abogados/6.png"],
        description: `Escritorio del Abogado – Versión Pro | Gestión Integral para Estudios Jurídicos

Optimiza la administración de tu estudio jurídico con esta herramienta digital avanzada. El Escritorio del Abogado – Versión Pro te permite gestionar casos, tareas, documentos y calendarios de manera sencilla y eficiente, todo desde una interfaz moderna y fácil de usar.

Características principales:

- Panel de control con indicadores clave (casos, tareas, documentos).
- Gestión de casos: registra, visualiza y organiza todos tus expedientes.
- Tareas y recordatorios: crea tareas, asigna fechas y prioridades.
- Documentos: almacena y accede rápidamente a tus archivos legales.
- Calendario integrado: visualiza plazos y eventos importantes.
- Exporta e importa tus datos en formato JSON para respaldo o migración.
- Interfaz responsiva y diseño profesional con Tailwind CSS y FullCalendar.
- Ideal para abogados independientes, estudios jurídicos y equipos legales que buscan digitalizar y simplificar su trabajo diario.

¡Lleva la gestión de tu estudio al siguiente nivel!`,
        features: ["Gestión de Casos", "Tareas y Recordatorios", "Gestión de Documentos", "Calendario", "Exportar JSON", "Interfaz Responsiva"]
    },
    {
        id: 33,
        title: "RepoMaster - Gestión para Repositores",
        category: "gestion",
        price: "Consultar",
        image: "RepoMaster/publicidad_repomaster.png",
        images: ["RepoMaster/publicidad_repomaster.png", "RepoMaster/1.png", "RepoMaster/2.png", "RepoMaster/3.png", "RepoMaster/4.png", "RepoMaster/5.png"],
        description: `Software De Gestión Para Repositores - Control De Vencimientos Y Faltantes

Optimice su trabajo en góndola con RepoMaster

Presentamos la herramienta definitiva diseñada específicamente para el personal de reposición en supermercados y autoservicios. Esta aplicación web estática es una solución ágil, liviana y eficiente para resolver los problemas cotidianos de la gestión de stock y el control de productos.

FUNCIONES PRINCIPALES:

1. CONTROL DE VENCIMIENTOS (SISTEMA FEFO)
Permite registrar productos y sus fechas de caducidad. El sistema utiliza un código de colores inteligente para priorizar la rotación:
- Alerta Roja: Productos que vencen en menos de 3 días.
- Alerta Amarilla: Productos que vencen en menos de 7 días.
- Indicador Verde: Productos con margen de tiempo suficiente.

2. GESTIÓN DE QUIEBRES Y FALTANTES
Anota rápidamente los productos agotados en góndola. Una vez finalizado el recorrido, la herramienta permite enviar la lista completa directamente a un número de WhatsApp preconfigurado (encargado de depósito, jefe de compras o proveedor), evitando errores de transcripción y ahorrando tiempo valioso.

3. CALCULADORA DE FRENTES
Módulo especializado para calcular cuántas unidades de un producto caben en un estante según las medidas del mismo. Optimice el espacio de exposición de forma precisa y profesional.

CARACTERÍSTICAS TÉCNICAS:

- Compatibilidad Total: Funciona a la perfección en teléfonos celulares, tablets y computadoras de escritorio.
- Diseño de Alta Visibilidad: Interfaz en modo oscuro diseñada para reducir la fatiga visual y ahorrar batería en dispositivos móviles.
- Configurable: El vendedor puede entregar la herramienta personalizada con el nombre y logo del comercio solicitado.
- Multiplataforma: Acceda desde cualquier navegador sin necesidad de descargas complejas.

VENTAJAS PARA EL COMPRADOR:

- Reducción de mermas por productos vencidos.
- Comunicación instantánea y profesional de faltantes.
- Mayor velocidad en la reposición diaria.
- No requiere pagos mensuales ni suscripciones; el software es suyo para siempre.

Ideal para repositores externos, personal de planta y supervisores de sector. Potencie la eficiencia de sus góndolas con una herramienta profesional.`,
        features: ["Control de Vencimientos FEFO", "Gestión de Faltantes", "Envío por WhatsApp", "Calculadora de Frentes", "Modo Oscuro", "Multiplataforma"]
    },
    {
        id: 35,
        title: "Carnicería POS - Sistema de Punto de Venta",
        category: "gastronomia",
        price: "Consultar",
        image: "Carnicería/1.png",
        images: ["Carnicería/1.png", "Carnicería/2.png", "Carnicería/3.png", "Carnicería/4.png"],
        shortDescription: "Control de desposte, rendimiento de la media res y venta rápida por peso.",
        description: `SISTEMA PROFESIONAL DE PUNTO DE VENTA PARA CARNICERÍAS

¿Cansado de usar calculadora manual para tus ventas? ¡Aquí está la solución!

Esta es una aplicación web moderna, rápida y fácil de usar diseñada específicamente para carnicerías, verdulerías y negocios de venta por peso.

CARACTERÍSTICAS PRINCIPALES:

CALCULADORA DE PRECIOS INTELIGENTE
- Selecciona productos de tu catálogo
- Ingresa peso o cantidad automáticamente
- Calcula el precio total al instante
- Modo manual para productos especiales
- Soporte para unidades: Kg, Docenas, Unidades

PUNTO DE VENTA COMPLETO
- Interfaz intuitiva y rápida
- Botones de acceso rápido a productos
- Carrito de compras en tiempo real
- Cálculo automático de totales
- Función "Cobrar" para finalizar ventas

HISTORIAL Y ESTADÍSTICAS
- Registro automático de todas las ventas
- Visualización de historial completo con fecha y hora
- Estadísticas en tiempo real (total, cantidad, promedio)
- Eliminar ventas individuales o limpiar historial

ADMINISTRACIÓN DE PRODUCTOS
- Agregar productos ilimitados
- Editar precios fácilmente
- Exportar/Importar productos en JSON
- Restablecer productos por defecto

ALMACENAMIENTO LOCAL
- Todos los datos se guardan en tu navegador
- No requiere conexión a internet después de cargar
- Datos persistentes (no se pierden al cerrar)
- Privacidad total - sin servidores externos

PANELES REDIMENSIONABLES
- 3 paneles independientes
- Ajusta el tamaño con el mouse
- Personaliza tu espacio de trabajo

COMPATIBLE CON TODOS LOS DISPOSITIVOS
- Funciona en PC, Laptop, Tablet
- Interfaz adaptable a cualquier resolución
- Optimizado para cualquier tamaño de pantalla

PRODUCTOS INCLUIDOS POR DEFECTO:
- Bife Chorizo - $2.500/Kg
- Carne Picada - $1.800/Kg
- Milanesas - $2.100/Kg
- Pollo Entero - $1.200/Kg
- Asado - $2.300/Kg
- Chorizos - $1.500/Docena

¡Todos personalizables - puedes cambiar nombres y precios!

IDEAL PARA:
- Carnicerías y Pollerías
- Verdulerías y Fruterías
- Pescaderías
- Negocios de venta por peso
- Restaurantes y Bares

VENTAJAS:
- Sin suscripciones mensuales
- Carga instantánea, sin lag
- Interfaz intuitiva, sin capacitación
- Datos privados y seguros
- Código transparente y auditable`,
        features: ["Calculadora Inteligente", "POS Completo", "Historial de Ventas", "Admin de Productos", "Almacenamiento Local", "Paneles Redimensionables"]
    },
    {
        id: 36,
        title: "Inventario Ferretería",
        category: "gestion",
        price: "Consultar",
        image: "Inventario Ferretería/1.png",
        images: ["Inventario Ferretería/1.png", "Inventario Ferretería/2.png", "Inventario Ferretería/Screenshot_20250704-021042.png", "Inventario Ferretería/Screenshot_20250704-021100.png", "Inventario Ferretería/Screenshot_20250704-021117.png", "Inventario Ferretería/Screenshot_20250704-021123.png", "Inventario Ferretería/Screenshot_20250704-021325.png", "Inventario Ferretería/Screenshot_20250704-021332.png", "Inventario Ferretería/Screenshot_20250704-021338.png", "Inventario Ferretería/Screenshot_20250704-021353.png"],
        shortDescription: "Gestión de inventario para ferreterías con exportación/importación Excel y alertas de stock bajo.",
        description: `¡Optimiza tu ferretería con la mejor app de inventario!

Gestiona fácilmente todos tus productos, herramientas, materiales de construcción, pinturas, artículos de jardinería y más. Nuestra solución está disponible en diferentes plataformas:
- App Android: gestión completa de inventario y Ventas en el teléfono. Actualmente SIN exportación/importación de Excel.
- Versión Web (navegador) y PC Windows ejecutable: incluye exportación e importación de Excel/CSV.

FUNCIONALIDADES PRINCIPALES:

- Agregar, editar y eliminar productos de forma rápida.
- Visualizar el stock disponible y recibir alertas de bajo inventario.
- Cargar un catálogo demo con cientos de productos reales de ferretería.
- Interfaz moderna, intuitiva y en español.
- Ideal para ferreterías, corralones, pinturerías y comercios de materiales.

¿CÓMO DESCUENTA EL STOCK?

- Usa el botón "Vender" en la tabla de productos. La app te pedirá la cantidad a vender y descontará automáticamente del stock.
- Si intentas vender más de lo disponible, puedes optar por dejar el stock en 0.
- Los productos con stock bajo (≤ 3 unidades) se resaltan y aparece una alerta visual.

¿SE PUEDE EXPORTAR/IMPORTAR EL STOCK CON EXCEL?

- Web y PC Windows: Sí. Puedes exportar todo el inventario a un archivo Excel (.xlsx) con las columnas: Nombre, Categoría y Stock.
- También puedes importar desde Excel o CSV. Edita el archivo (por ejemplo, ajustando stock o categorías) y vuelve a subirlo.
- La importación reconoce encabezados comunes (Nombre/Name, Categoria/Category, Stock/Quantity/Cantidad) y:
  • Si el nombre ya existe, actualiza ese producto.
  • Si el nombre no existe, agrega un producto nuevo.
- App Android: por ahora NO incluye exportación/importación de Excel.

ACCESOS RÁPIDOS (WEB/PC):

- "Exportar a Excel": descarga el inventario actual.
- "Importar desde Excel": selecciona tu archivo para actualizar/agregar productos.

Incluye manual de uso y soporte personalizado. ¡Haz crecer tu ferretería con tecnología!`,
        features: ["Gestión de Inventario", "Alertas de Stock Bajo", "Exportar/Importar Excel", "App Android", "Versión Web y PC", "Catálogo Demo"]
    },
    {
        id: 29,
        title: "Pack Web para Gasistas",
        category: "herramientas",
        price: "Consultar",
        image: "Pack Web para Gasistas/Screenshot_20250926-223152.png",
        images: ["Pack Web para Gasistas/Screenshot_20250926-223152.png", "Pack Web para Gasistas/Screenshot_20250926-223202.png", "Pack Web para Gasistas/Screenshot_20250926-223344.png", "Pack Web para Gasistas/Screenshot_20250926-223457.png", "Pack Web para Gasistas/Screenshot_20250926-223503.png"],
        video: "Pack Web para Gasistas/Video de Pack Web para Gasistas.mp4",
        description: `Pack Web para Gasistas – Contacto por WhatsApp + Presupuestos con PDF

Ofrecemos un pack de 2 páginas web listas para usar, diseñadas especialmente para gasistas matriculados. Con estas herramientas podrás atender consultas por WhatsApp de forma profesional y generar presupuestos claros en minutos.

INCLUYE:

1. Web de Contacto por WhatsApp:
- Botón para chatear al instante por WhatsApp
- Formulario para armar el mensaje: motivo de consulta, detalle, nombre del cliente
- Chips de "toques rápidos" con preguntas frecuentes (se agregan/quitan al mensaje)
- Marcador de URGENCIA y opción de adjuntar ubicación del cliente automáticamente
- Guarda el número de WhatsApp del gasista y nombre del cliente (uso repetido más rápido)
- Módulo de "emergencia familiar" con agenda de contactos
- Envío secuencial por WhatsApp
- Importar/exportar contactos
- Optimizado para móvil y escritorio

2. Web de Presupuestos:
- Carga tus datos de gasista (nombre, matrícula, teléfono)
- Registra cliente, descripción del trabajo e ítems con precio
- Cálculo automático del total
- Guarda los presupuestos en tu dispositivo para reutilizarlos o editarlos
- Imprime con un clic o descarga en PDF con formato limpio y profesional
- Ideal para enviar por WhatsApp, mail o entregar en papel

BENEFICIOS:
- Atención rápida y profesional por WhatsApp con mensajes claros
- Más oportunidades y cierres gracias a la ubicación adjunta y marca de urgencia
- Presupuestos prolijos en minutos, con totales y PDF descargable
- Funciona en celular y PC
- 100% Personalizable con tu nombre, matrícula y teléfono
- Compartible en redes sociales y biografías

EXTRAS:
- Personalización básica incluida
- Instrucciones simples para mantenerlas
- Opción: publicar en tu propio dominio (servicio adicional)`,
        features: ["Web de Contacto WhatsApp", "Web de Presupuestos", "PDF Descargable", "Geolocalización", "Agenda de Contactos", "100% Responsivo"]
    }
];
