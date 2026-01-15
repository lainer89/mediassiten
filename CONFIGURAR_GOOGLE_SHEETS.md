# Configuración de Google Sheets para el Registro Beta

## Paso 1: Crear la hoja de cálculo

1. Ve a [Google Sheets](https://sheets.google.com) y crea una nueva hoja
2. En la primera fila, agrega estos encabezados:
   - A1: `Fecha`
   - B1: `Email`
   - C1: `Fuente`

## Paso 2: Crear el Google Apps Script

1. En tu hoja de cálculo, ve a **Extensiones > Apps Script**
2. Borra el código existente y pega este:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toLocaleString('es-LA'),
      data.email,
      data.source || 'Landing Page'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Guarda el proyecto (Ctrl+S) con el nombre "MedAssist Waitlist"

## Paso 3: Desplegar como Web App

1. Haz clic en **Implementar > Nueva implementación**
2. Selecciona tipo: **Aplicación web**
3. Configura:
   - Descripción: "MedAssist Waitlist API"
   - Ejecutar como: **Yo mismo**
   - Quién tiene acceso: **Cualquier persona**
4. Haz clic en **Implementar**
5. **IMPORTANTE**: Copia la URL que aparece (será algo como `https://script.google.com/macros/s/ABC123.../exec`)

## Paso 4: Configurar en el proyecto

1. Crea un archivo `.env.local` en la raíz del proyecto (medassist-landing/)
2. Agrega tu URL del webhook:

```
NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/s/TU_ID_AQUI/exec
```

3. Reinicia el servidor de desarrollo

## Paso 5: Probar

1. Ejecuta `npm run dev`
2. Ve a la sección de registro beta
3. Ingresa un email de prueba
4. Verifica que aparezca en tu Google Sheet

## Notas importantes

- La URL del webhook debe ser HTTPS
- Si cambias el código del Apps Script, debes crear una nueva implementación
- Los emails se guardan con fecha y hora en zona horaria de Latinoamérica
- El webhook es público pero solo acepta datos de email válidos
