export const tableDefinitions = {
  arboles: {
    tituloTabla: "Top 5 Árboles",
    tablaParams: {
      table: {
        class: "text-center align-middle table-byn",
      },
      numero: {
        class: "numero",
        fieldType: "string",
      },
      imagen: {
        class: "custom-img",
        fieldType: "img",
      },
      nombre: {
        class: "nombre",
        fieldType: "string",
      },
      stock: {
        class: "stock",
        fieldType: "boolean",
      },
    },
    dataTabla: [
      {
        numero: "1",
        nombre: "Algarrobo",  
        imagen: "./assets/img/algarrobo.jpeg",
        stock:true
      },
      {
        numero: "2",
        nombre: "Molle",
        imagen: "./assets/img/molle.jpg",
        stock:true
      },
      {
        numero: "3",
        nombre: "Aguaribay",
        imagen: "./assets/img/aguaribay.jpg",
        stock:true
      },
      {
        numero:"4",
        nombre: "Peje",
        imagen: "./assets/img/peje.jpg",
        stock:false
      },
      {
        numero:"5",
        nombre: "Álamo",
        imagen: "./assets/img/alamo.jpg",
        stock:false
      },
    ],
  },
  tablas: {
    tituloTabla: "Librerias para tablas",
    tablaParams: {
      table: {
        class: "table-striped"
      },
      link: {
        class: "link",
        fieldType: "link",
      },
    },
    dataTabla: [
      {
        libreria: "tablesorter",
        link: "https://github.com/Mottie/tablesorter",
        descripcion: "The tablesorter plugin adds a lot of great features to your existing standard HTML tables. It is actually a jQuery plugin, so make sure that you have already included jQuery in your webpage. Other than that, you just have to create tables with tbody and thead tags.",
      },
      {
        libreria: "Tablesaw",
        link: "https://github.com/filamentgroup/tablesaw",
        descripcion: "One possible drawback of tables is that they usually don't look great on very small screen sizes. This is simply due to the fact that mobile devices have very little horizontal space to properly accommodate all the columns of a table. The tablesaw plugin solves this problem for you.",
      },
      {
        libreria: "Tabulator",
        link: "https://github.com/olifolkerd/tabulator",
        descripcion: "The tabulator JavaScript library does a great job at creating interactive tables. The data for the library can come from an existing HTML table, JavaScript array, or JSON formatted data. One of the best things about this library is that you can use it alongside all your favorite libraries and frameworks like Angular, React, or Vue. Just include the JavaScript and CSS file for the library, and you will be good to go.",
      },
      {
        libreria: "Tablesort",
        link: "https://github.com/tristen/tablesort",
        descripcion: "The tablesort library is a great lightweight alternative to the jQuery Tablesorter plugin. It is ideal for people who just want some basic sorting functionality for their tables and prefer to use a standalone library.",
      },
    ]
  },
  principios: {
    tituloTabla: "Principios de diseño de Software",
    tablaParams: {
      table: {
        class: "table-dark table-striped",
      },
      tablaFooter: `<td class="text-end">
      <small>
        Source: <a
        href="https://betterprogramming.pub/10-design-principles-in-software-engineering-f88647cf5a07"
        target="_blank">
          betterprogramming.pub
        </a>
        </small>
      </td><td></td>`,
      link: {
        class: "link",
        fieldType: "link",
      },
      principio: {
        class: "text-principles",
      },
    },
    dataTabla: [
      {
        principio: "Divide and Conquer",
        link: "https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm"
      },
      {
        principio: "Increase Cohesion",
        link: "https://en.wikipedia.org/wiki/Cohesion_(computer_science)"
      },
      {
        principio: "Reducing Coupling",
        link: "https://en.wikipedia.org/wiki/Coupling_(computer_programming)"
      },
      {
        principio: "Increase Abstraction",
        link: "https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)"
      },
    ]
  }
};
