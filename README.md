## ESTRUCTURA GENERAL DEL PROYECTO

Es una aplicación React con Redux para gestionar servicios de asistencia vial, donde los proveedores pueden ver y actualizar el estado de los servicios asignados.

## ARCHIVOS DE CONFIGURACIÓN Y ENTRADA

### src/index.js
- Punto de entrada de la aplicación
- Importa estilos de Ant Design
- Renderiza el componente App en el DOM

### src/App.js
- Componente raíz
- Envuelve la aplicación con Redux Provider
- Renderiza las rutas

## SISTEMA DE RUTAS

### src/routes/Routes.js
- **Función principal**: Configurar el enrutamiento
- **Acciones iniciales**:
  - Carga catálogos de estatus y motivos al iniciar
  - Muestra logo de la empresa
  - Define 2 rutas principales:
    - `/` → Lista de servicios
    - `/detalle/:folioAsignacion` → Detalle de un servicio

### src/routes/PrivateRoute.js y PublicRoute.js
- Componentes para proteger rutas (aunque actualmente todas están hardcodeadas como autenticadas)

## GESTIÓN DE ESTADO (Redux)

### src/context/store/store.js
- Crea el store de Redux con redux-thunk para acciones asíncronas

### src/context/types/types.js
- Define todos los tipos de acciones Redux:
  - `storeEstatus`: Guardar catálogo de estatus
  - `storeMotivos`: Guardar catálogo de motivos
  - `storeServicios`: Guardar lista de servicios
  - `storeServicio`: Guardar detalle de un servicio
  - `setLoadingPage`: Control de loading
  - `setLastCheck`: Última verificación

### REDUCERS

#### estatusReducer.js
- Maneja el catálogo de estatus posibles y el estatus seleccionado para filtrar

#### motivosReducer.js
- Almacena el catálogo de motivos para cambios de estado

#### serviciosReducer.js
- Estado principal:
  - `servicios[]`: Lista de servicios
  - `servicio{}`: Detalle del servicio actual

#### loadingReducer.js
- Controla el estado de carga de la página

#### lastCheckReducer.js
- Guarda la última vez que se verificaron los servicios

### ACTIONS

#### estatusActions.js
- `startLoadEstatus()`: Carga catálogo de estatus desde API
- `setEstatusSelected()`: Selecciona estatus para filtrar

#### motivosActions.js
- `startLoadMotivos()`: Carga catálogo de motivos desde API

#### serviciosActions.js
- `startLoadServiciosByEstatus(status)`: Carga servicios filtrados por estatus
- `startLoadServicio(folioAsignacion)`: Carga detalle de un servicio específico

#### postActions.js
- `startPostServicio(data)`: Actualiza el estado de un servicio y recarga su detalle

## COMPONENTES REUTILIZABLES

### components/titulo/Titulo.js
- Muestra títulos con estilo naranja corporativo

### components/boton/BotonSimple.js
- Botón estilizado con hover effect

### components/inputValue/InputValue.js
- Campo de entrada con label

### components/inputValue/TextareaValue.js
- Textarea con label

### components/select/SelectSimple.js
- Select básico de Ant Design

### components/select/MotivosSelect.js
- Select especializado que filtra motivos según el estatus del servicio

## VISTAS PRINCIPALES

### VISTA DE SERVICIOS (Lista)

#### src/views/servicios/Servicios.js
- Contenedor principal que renderiza Filtro y Tabla

#### src/views/servicios/_Filtro.js
- Título de la página
- Select para filtrar por estatus
- Muestra última verificación
- Al cambiar estatus, dispara carga de servicios filtrados

#### src/views/servicios/_Tabla.js
- Tabla de Ant Design con servicios
- Columnas: Fecha, Folio, Póliza, Reportante, Especial, VIP, Acción (ver detalle)

#### src/views/servicios/useColums.js
- Hook personalizado que define las columnas de la tabla
- Maneja navegación al detalle al hacer clic en el ícono de ojo

### VISTA DE DETALLE

#### src/views/detalle/Detalle.js
- Layout en 2 columnas:
  - Izquierda (16/24): Datos del servicio
  - Derecha (8/24): Acciones disponibles
- Carga el servicio por folioAsignacion

#### src/views/detalle/_Datos.js
- Botón para regresar a la lista
- Renderiza el componente Cuerpo con la información

#### src/views/detalle/_Cuerpo.js
- Muestra toda la información del servicio en secciones:
  - Datos generales
  - Vehículo
  - Ubicación origen
  - Ubicación destino

#### src/views/detalle/_Campo.js
- Componente para mostrar un campo label-valor

#### src/views/detalle/_Estatus.js
- Círculo visual que muestra el estatus actual con color correspondiente

#### src/views/detalle/_Acciones.js
- Contenedor de estatus y botones de acción

#### src/views/detalle/_BotonAcciones.js
- Lógica que determina qué botón mostrar según el estatus:
  - ASIGNADO → Botón Confirmar
  - CONFIRMADO → Botón En Atención
  - EN_ATENCION → Botón Arribo
  - ARRIBO → Botón Terminado

#### Botones de Acción
- _BotonConfirmar.js
- _BotonEnAtencion.js
- _BotonArribo.js
- _BotonTerminado.js

Formularios para cambiar el estado del servicio con:
- Campos comunes: nombre/teléfono proveedor, motivo
- Campos específicos según el estado
- Al confirmar: envían POST con nuevo estado

## UTILIDADES

### src/constants/url.js
- URLs de APIs
- Endpoints para catálogos y servicios

### src/constants/cons.js
- Constantes de la aplicación
- Definición de estatus con colores

### src/utils/fetch.js
- Funciones GET y POST con axios
- Configuran headers con API key

### src/utils/dateUnixHora.js y dateUnixToDDMMYYYY.js
- Formateo de fechas Unix a formato legible

### src/utils/getEstatusOpciones.js
- Transforma array de estatus a formato para Select

## FLUJOS PRINCIPALES

### 1. FLUJO DE INICIO
```
1. App.js se carga
2. Routes.js ejecuta:
   - startLoadEstatus() → Carga catálogo de estatus
   - startLoadMotivos() → Carga catálogo de motivos
3. Usuario llega a "/" (Servicios.js)
```

### 2. FLUJO DE LISTA DE SERVICIOS
```
1. Usuario selecciona un estatus en el filtro
2. _Filtro.js dispara:
   - setEstatusSelected(valor)
   - startLoadServiciosByEstatus(valor)
3. Se hace GET a /Servicio/GetServiciosByEstatus/{status}
4. Redux actualiza servicios[]
5. _Tabla.js re-renderiza con nuevos datos
```

### 3. FLUJO DE DETALLE
```
1. Usuario hace clic en ícono de ojo
2. Navega a /detalle/{folioAsignacion}
3. Detalle.js dispara startLoadServicio(folioAsignacion)
4. GET a /Servicio/GetDetalleServicioVial/{folio}
5. Redux actualiza servicio{}
6. Se renderiza información y botón de acción según estatus
```

### 4. FLUJO DE CAMBIO DE ESTADO
```
1. Usuario llena formulario en botón de acción
2. Al confirmar se ejecuta startPostServicio() con:
   - folioAsignacion
   - fechaHoraEstatus (timestamp)
   - estatusActual (nuevo estado)
   - Datos del formulario
3. POST a /Servicio/PostActualizacionAsistenciaVial
4. Si exitoso, recarga el detalle del servicio
5. UI se actualiza con nuevo estado
```

### 5. FLUJO DE ESTADOS DEL SERVICIO
```
ASIGNADO → CONFIRMADO → EN_ATENCION → ARRIBO → TERMINADO
         ↓            ↓              ↓         ↓
      CANCELADO   CANCELADO     CANCELADO  CANCELADO
```

## ARQUITECTURA DE LA APLICACIÓN

### Tecnologías principales
- React (Componentes funcionales con hooks)
- Redux + Redux Thunk (Gestión de estado)
- React Router (Navegación)
- Ant Design (Componentes UI)
- Axios (Peticiones HTTP)
- Moment.js (Manejo de fechas)

### Patrón de arquitectura
- Separación de responsabilidades con carpetas específicas
- Componentes presentacionales vs contenedores
- Actions asíncronas con thunk
- Estado centralizado en Redux

### Convenciones de código
- Archivos privados de vistas comienzan con `_`
- Actions asíncronas comienzan con `start`
- Reducers devuelven nuevo estado inmutable
- Componentes en PascalCase

## ENDPOINTS DE API

### Catálogos
- GET `/Catalogo/GetCatalogoEstatus` - Lista de estatus posibles
- GET `/Catalogo/GetCatalogoMotivos` - Lista de motivos por estatus

### Servicios
- GET `/Servicio/GetServiciosByEstatus/{status}` - Servicios filtrados
- GET `/Servicio/GetDetalleServicioVial/{folio}` - Detalle de servicio
- POST `/Servicio/PostActualizacionAsistenciaVial` - Actualizar servicio

## ESTRUCTURA DE DATOS

### Servicio
```javascript
{
  folioAsignacion: string,
  numeroPoliza: string,
  fechaReporte: timestamp,
  horaReporte: string,
  nombreReportante: string,
  apellidoPaternoReportante: string,
  apellidoMaternoReportante: string,
  numeroContacto: string,
  email: string,
  coberturaAfectada: string,
  tipoServicio: string,
  estatusServicio: string,
  cuentaEspecial: number,
  clienteVip: number,
  condicionesEspeciales: string,
  vehiculo: {
    tipoVehiculo: string,
    modelo: string,
    numeroSerie: string,
    placas: string,
    color: string
  },
  ubicacionOrigen: {
    estadoOrigen: string,
    municipioOrigen: string,
    coloniaOrigen: string,
    calleOrigen: string,
    numeroExteriorOrigen: string,
    codigoPostalOrigen: string,
    referenciasOrigen: string
  },
  ubicacionDestino: {
    // Campos similares a origen
  }
}
```

### Actualización de servicio
```javascript
{
  folioAsignacion: string,
  fechaHoraEstatus: timestamp,
  estatusActual: string,
  nombrePrestadorServicio: string,
  telefonoPrestadorServicio: string,
  idMotivo: string,
  comentarios: string,
  especialidad: string,
  tiempoArribo: string
}
```

La aplicación está diseñada para que los proveedores de asistencia vial puedan gestionar el ciclo de vida completo de un servicio, desde que se les asigna hasta que lo terminan.

---
 Desarrollado por:  
## Luis Felipe Fernández  


*© 2025 ESCOTEL® - Todos los derechos reservados*
