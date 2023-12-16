

# Aplicación Web de Gestión de Membresías

Esta aplicación web utiliza Flask como backend y HTML/CSS/JavaScript para la interfaz de usuario. Permite a los usuarios verificar el estado de su membresía a través de un formulario ingresando su ID de usuario.

## Configuración

1. **Instalación de dependencias:**
   - Asegúrate de tener Python instalado.
   - Instala las dependencias necesarias con `pip install -r requirements.txt`.

2. **Base de datos:**
   - Asegúrate de tener una base de datos SQLite3 con la estructura y los datos necesarios. Puedes utilizar DBrowser for SQLite3 u otra herramienta similar.

3. **Ejecución:**
   - Ejecuta la aplicación Flask con `python app.py`.
   - Accede a la aplicación en tu navegador mediante `http://localhost:5000`.

## Estructura de archivos

- `app.py`: Contiene la lógica del servidor Flask y las rutas para manejar las solicitudes.
- `static/`: Carpeta que contiene los archivos estáticos como CSS, JavaScript e imágenes.
- `templates/`: Carpeta que contiene los archivos HTML utilizados para las vistas.

## Manejo de Excepciones en Python - obtener info de errores

(hacer un print)

Mensaje de Error: str(e)
Tipo de Error: type(e).__name__
Pila de Llamadas (Traceback): traceback.format_exc()


## Uso

- Accede a la página principal e ingresa el ID de usuario en el formulario provisto.
- La aplicación verificará el estado de la membresía y mostrará si está al día con el pago o no.

## Notas adicionales

- Asegúrate de que la estructura de la base de datos coincida con la lógica de la aplicación para obtener resultados precisos.
- Puedes personalizar la apariencia y la lógica de la aplicación según tus necesidades.

