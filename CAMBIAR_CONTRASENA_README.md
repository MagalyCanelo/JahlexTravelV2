# Funcionalidades de Cambio de Contraseña - JahlexTravel

## Descripción

Se han implementado dos funcionalidades principales para el manejo de contraseñas usando Clerk y Firebase:

1. **Recuperación de Contraseña** - Para usuarios que olvidaron su contraseña
2. **Cambio de Contraseña** - Para usuarios autenticados que quieren cambiar su contraseña

## Funcionalidades Implementadas

### 1. Recuperación de Contraseña (`/passrecovery`)

**Ruta:** `/passrecovery`

**Características:**
- Proceso de 3 pasos:
  1. **Ingreso de email** - El usuario ingresa su correo electrónico
  2. **Verificación de código** - Se envía un código por email y el usuario lo ingresa
  3. **Nueva contraseña** - El usuario establece una nueva contraseña

**Flujo:**
1. Usuario accede a `/passrecovery`
2. Ingresa su email y solicita el código de recuperación
3. Recibe un email con el código
4. Ingresa el código para verificar
5. Establece una nueva contraseña
6. Es redirigido al login

**Acceso:** Desde la página de login con el enlace "Olvidé mi contraseña"

### 2. Cambio de Contraseña desde Mi Cuenta

**Ruta:** `/micuenta/[slug]`

**Características:**
- Botón "Cambiar Contraseña" en la página de datos personales
- Formulario integrado que aparece/desaparece
- Validación de contraseña actual y nueva contraseña

**Flujo:**
1. Usuario accede a su cuenta
2. Hace clic en "Cambiar Contraseña"
3. Completa el formulario con:
   - Contraseña actual
   - Nueva contraseña
   - Confirmación de nueva contraseña
4. Recibe confirmación del cambio

### 3. Página Dedicada de Cambio de Contraseña

**Ruta:** `/cambiar-contrasena`

**Características:**
- Página independiente para cambiar contraseña
- Acceso desde el menú de usuario en el header
- Diseño consistente con el resto de la aplicación

**Acceso:** Desde el menú de usuario (ícono de usuario) en el header

## Componentes Creados

### 1. `app/passrecovery/page.tsx`
- Página de recuperación de contraseña
- Manejo de estados para los 3 pasos
- Integración con Clerk para envío de códigos y cambio de contraseña

### 2. `app/micuenta/[slug]/Components/ChangePassword.tsx`
- Componente para cambiar contraseña desde mi cuenta
- Formulario con validaciones
- Integración con Clerk

### 3. `app/cambiar-contrasena/page.tsx`
- Página dedicada para cambio de contraseña
- Diseño responsive y consistente
- Navegación integrada

## Integración con Clerk

### Recuperación de Contraseña
```typescript
// Enviar código de recuperación
await signIn.create({
  identifier: email,
  strategy: "reset_password_email_code",
});

// Verificar código
const result = await signIn.attemptFirstFactor({
  strategy: "reset_password_email_code",
  code,
});

// Cambiar contraseña
const result = await signIn.attemptFirstFactor({
  strategy: "reset_password_email_code",
  code,
  password: newPassword,
});
```

### Cambio de Contraseña (Usuario Autenticado)
```typescript
// Cambiar contraseña
await user.updatePassword({
  newPassword: newPassword,
  currentPassword: currentPassword,
});
```

## Validaciones Implementadas

### Contraseña
- Mínimo 8 caracteres
- Verificación de que las contraseñas coincidan
- Validación de contraseña actual (para usuarios autenticados)

### Email
- Validación de formato de email
- Verificación de que el email existe en el sistema

### Código de Verificación
- Validación de formato
- Verificación de expiración

## Seguridad

- **Rutas Protegidas:** Las páginas de cambio de contraseña están protegidas por el middleware de Clerk
- **Tokens:** Uso de tokens seguros para la integración con Firebase
- **Validaciones:** Múltiples capas de validación en el frontend y backend
- **Sesiones:** Manejo seguro de sesiones con Clerk

## Estilos y UX

### Diseño Consistente
- Uso de los colores corporativos (oliva-c)
- Componentes reutilizables (ActionButton, PasswordInput)
- Diseño responsive para móviles y desktop

### Experiencia de Usuario
- Mensajes de error claros y específicos
- Mensajes de éxito con redirección automática
- Estados de carga para feedback visual
- Navegación intuitiva

### Accesibilidad
- Labels apropiados para screen readers
- Contraste adecuado
- Navegación por teclado

## Configuración Requerida

### Variables de Entorno
Asegúrate de tener configuradas las variables de Clerk:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clave_publica
CLERK_SECRET_KEY=tu_clave_secreta
```

### Middleware
El middleware ya está configurado para proteger las rutas:
```typescript
const isProtectedRoute = createRouteMatcher([
  "/administrador(.*)",
  "/micuenta(.*)",
  "/compras(.*)",
  "/resenas(.*)",
  "/cambiar-contrasena(.*)"
]);
```

## Uso

### Para Usuarios
1. **Recuperar contraseña:** Acceder a login → "Olvidé mi contraseña"
2. **Cambiar contraseña desde cuenta:** Mi cuenta → "Cambiar Contraseña"
3. **Cambiar contraseña desde menú:** Menú usuario → "Cambiar Contraseña"

### Para Desarrolladores
- Los componentes están modulares y reutilizables
- La lógica de Clerk está centralizada
- Los estilos siguen el sistema de diseño existente
- Las validaciones son consistentes en toda la aplicación

## Próximas Mejoras

1. **Notificaciones por SMS:** Agregar opción de recuperación por SMS
2. **Historial de cambios:** Registrar cambios de contraseña
3. **Políticas de contraseña:** Configurar políticas más estrictas desde Clerk
4. **Autenticación de dos factores:** Integrar 2FA para cambios de contraseña 