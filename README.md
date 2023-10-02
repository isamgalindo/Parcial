# Parcial
Codigo del parcial 1

## Ejecucion
1. Descargar el .zip de github.
2. Se abre en Visual Studio Code y se deben ejecutar los siguientes comandos:
   - `npm install bootstrap`
   - `npm install react-bootstrap`
   - `install react-router-dom --save`
   - `npm install react-intl --save`
3. Para ejecutar la aplicación es con el siguiente comando:
   - `npm start`
4. Para probar la internalización, se debe cambiar directamente el lenguaje del browser que se esté usando, inglés o español.

## Desarrollo
Creé y modifiqué 7 componentes en la aplicación, los cuales son los siguientes:
- Index: Es la raiz de la aplicación y se llama al componente Intl.
- Intl: Se inicia el proceso de internalización definiendo como componente principal a IntlProvider. Se declara que el lenguaje que usa la aplicación debe ser el lenguaje del browser, si el browser tiene un lenguaje que no es alguno de los que definí (inglés o español) debe traducirse al inglés. Para hacer las traducciones, hice dos archivos json que están localizados en la carpeta "locales".
App: Se crean las rutas para navegar por la aplicación.

Para el requerimiento del Login, hice dos componentes por separado para el ingreso del correo y de la contraseña, ya que se pedían en dos vistas diferentes.
- Login: Se implementa la vista del ingreso del correo. Aquí creé una función llamada "validateEmail" para validar el email ingresado y que cumpla con el formato. Esta validación se da en tiempo real, es decir, el mensaje de error aparece mientras va escribiendo su correo hasta que lo escriba correctamente. Si no cumple con el formato, no podrá pasar a ingresar si contraseña. Por otro lado, si cumple con el formato y da click al botón de "Siguiente", navegará a la vista de la contraseña.
- Password: Se implementa la vista del ingreso de la contraseña. Aquí creé una función llamada "validatePassword" para validar la contraseña ingresada y que cumpla con el requisito (tener por lo menos 6 caracteres). Esta validación se da en tiempo real, es decir, el mensaje de error aparece mientras va escribiendo su correo hasta que lo escriba correctamente. Si no cumple con el formato, no podrá pasar a ingresar si contraseña. Por otro lado, si cumple con el formato y da click al botón de "Siguiente", navegará a la vista de la contraseña.
