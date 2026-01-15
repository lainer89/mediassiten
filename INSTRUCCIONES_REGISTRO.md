# Cómo Configurar el Registro (Waitlist) con Google Sheets

Para que el formulario de "Unirme a la Beta" funcione y guarde los correos, necesitas conectar tu página con una Hoja de Cálculo de Google.

Sigue estos pasos sencillos:

## Paso 1: Crear la Hoja de Cálculo
1. Ve a [Google Sheets](https://sheets.new) y crea una nueva hoja.
2. Ponle un nombre, ej: `MedAssist - Beta Waitlist`.
3. En la primera fila, escribe los encabezados de las columnas (opcional pero recomendado):
   - A1: `fecha`
   - B1: `email`
   - C1: `fuente`

## Paso 2: Crear el Script (Apps Script)
1. En la hoja de cálculo, ve al menú **Extensiones** > **Apps Script**.
2. Se abrirá una nueva pestaña con un editor de código.
3. Borra todo lo que hay ahí y pega el siguiente código:

```javascript
var SHEET_NAME = "Hoja 1"; // Asegúrate que coincida con el nombre de la hoja abajo a la izquierda

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;

    // Parsear los datos enviados desde la web
    var data = JSON.parse(e.postData.contents);

    var newRow = headers.map(function(header) {
      if (header === 'fecha' || header === 'timestamp') return new Date();
      if (header === 'email') return data.email;
      if (header === 'fuente' || header === 'source') return data.source;
      return '';
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

4. Haz clic en el icono de **Guardar** (disquete).

## Paso 3: Publicar el Script
1. Haz clic en el botón azul **Implementar** (o *Deploy*) arriba a la derecha > **Nueva implementación**.
2. En la ventana que aparece:
   - Haz clic en el engranaje ⚙️ al lado de "Seleccionar tipo" > **Aplicación web**.
   - Descripción: `Registro Beta MedAssist`.
   - Ejecutar como: **Yo** (tú email).
   - **Quién tiene acceso: CUALQUIER PERSONA** (Importante: esto permite que tu página envíe datos sin que el usuario inicie sesión en Google).
3. Haz clic en **Implementar**.
4. Te pedirá permisos ("Autorizar acceso"). Acepta todo (si sale una advertencia de "Google no ha verificado esta aplicación", dale a "Configuración avanzada" > "Ir a... (inseguro)").

## Paso 4: Obtener la URL
1. Una vez desplegado, te dará una **URL de la aplicación web** (empieza con `https://script.google.com/macros/s/...`).
2. Copia esa URL.

## Paso 5: Configurar en tu Proyecto
1. En tu proyecto local, crea un archivo llamado `.env.local` en la raíz (junto a `package.json`).
2. Pega lo siguiente (reemplaza la URL con la tuya):

```bash
NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/s/TU_URL_LARGA_AQUI/exec
```

3. Guarda el archivo.
4. Reinicia tu servidor de desarrollo (`Ctrl+C` y luego `npm run dev`).
5. ¡Prueba registrarte en el formulario! Debería aparecer en tu hoja de cálculo.
