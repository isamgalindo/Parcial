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
- Login: Se implementa la vista del ingreso del correo. Aquí creé una función llamada "validateEmail" para validar el email ingresado y que cumpla con el formato. Esta validación se da en tiempo real, es decir, el mensaje de error aparece mientras va escribiendo su correo hasta que lo escriba correctamente. Si no cumple con el formato, no podrá pasar a ingresar su contraseña. Por otro lado, si cumple con el formato y da click al botón de "Siguiente", navegará a la vista de la contraseña.
- Password: Se implementa la vista del ingreso de la contraseña. Aquí creé una función llamada "validatePassword" para validar la contraseña ingresada y que cumpla con el requisito (tener por lo menos 6 caracteres). Esta validación se da en tiempo real, es decir, el mensaje de error aparece mientras va escribiendo su contraseña hasta que tenga los 6 caracteres. Si no cumple con el requisito, no podrá pasar a la siguiente vista. Por otro lado, si cumple con el requisito y da click al botón de "Siguiente", navegará a la vista de los carros.
- Carros y Carro: En carro se crean la estructura en información de los Cards de cada carro. En "Carros" hago un GET de los datos del json (https://raw.githubusercontent.com/isamgalindo/Parcial/master/datos.json) y se llama al componente "Carro" para que se muestre la información del GET usando la estructura creada en ese componente. Lo anterior es un hook de de efecto. En el componente "Carro" se crea una función donde define la acción cuando el usuario haga click en el Card. Si el usuario da click, navega a los detalles de cada carro.
- Modificaciones: En este componente muestro el detalle de cada carro. Aquí se tiene en cuenta el valor de "role" del usuario, si es True, le permitirá modificar los valores de cada característica. Si el "role" es False, se muestra cada característica como texto plano y no podrá modificarlo. Cabe resaltar que el valor de "role" es aleatorio.
