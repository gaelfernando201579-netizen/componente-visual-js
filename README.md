# GaloUI - Componentes visuales interactivos

## Portada

**Nombre del componente:** GaloUI  
**Desarrollador:** Gael Fernando Ortíz Pérez  
**Demo en vivo:** https://gaelfernando201579-netizen.github.io/componente-visual-js/

**¿Qué problema resuelve?**  
El `alert()` bloquea la página y se ve mal. GaloUI ofrece notificaciones, modales, acordeones y pestañas modernos que se generan con JavaScript, no dependen de librerías externas y se integran con dos archivos.

## Componentes

| Componente | Interacción                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| Toast      | Se apila, se pausa al pasar el mouse, barra de progreso, cierre manual      |
| Modal      | Se cierra con Escape, clic fuera o botones; ejecuta una acción al confirmar |
| Acordeón   | Despliegue animado; con `data-single` solo un panel abierto                 |
| Pestañas   | Cambio de contenido sin recargar                                            |
| Tema       | Claro/oscuro, recuerda la elección y respeta el sistema                     |

## Instalación

```html
<head>
  <link rel="stylesheet" href="css/componente.css" />
</head>
<body>
  <!-- tu contenido -->
  <script src="js/componente.js"></script>
</body>
```

## Uso

```javascript
// Toast
Toast.success("Guardado");
Toast.show({
  title: "Error",
  message: "No hay conexión",
  type: "error",
  duration: 5000,
  position: "bottom-left",
});

// Modal
Modal.open({
  title: "¿Eliminar?",
  content: "No se puede deshacer.",
  confirmText: "Eliminar",
  onConfirm: () => Toast.success("Eliminado"),
});

// Tema
Theme.toggle();
```

**Parámetros de `Toast.show`:** `message` (texto), `title` (opcional), `type` (`success`, `error`, `info`, `warning`), `duration` (ms, por defecto 4000), `position` (`top-right`, `top-left`, `bottom-right`, `bottom-left`).

**Acordeón y pestañas** solo necesitan el HTML con las clases `acc`, `acc-item`, `acc-head`, `acc-panel` y `tabs`, `tab-btn`, `tab-panel` (ver `index.html`).

## Capturas de pantalla

![Toasts](img/captura1.png)
![Modal](img/captura2.png)

## Video promocional

[Ver video de GaloUI](PEGA_AQUI_TU_LINK)
