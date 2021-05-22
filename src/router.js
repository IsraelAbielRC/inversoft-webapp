//import menu from './Pages/Menu/Menu.vue';
//import Inicio from './Pages/Usuarios/Usuarios.vue';
const menu = (resolve) => {
  require.ensure(["./Pages/Menu/Menu.vue"], () => {
    resolve(require("./Pages/Menu/Menu.vue"));
  });
};
const Inicio = (resolve) => {
  require.ensure(["./Pages/Usuarios/Usuarios.vue"], () => {
    resolve(require("./Pages/Usuarios/Usuarios.vue"));
  });
};
const Presupuesto = (resolve) => {
  require.ensure(["./Pages/Usuarios/Ingreso.vue"], () => {
    resolve(require("./Pages/Usuarios/Ingreso.vue"));
  });
};
const Portafolio = (resolve) => {
  require.ensure(["./Pages/Usuarios/Portafolio.vue"], () => {
    resolve(require("./Pages/Usuarios/Portafolio.vue"));
  });
};
export const routes = [
  { path: "/Presupuesto/:id", component: Presupuesto },
  { path: "/Grafica/:id", component: menu },
  { path: "/", component: Inicio },
  { path: "/Portafolio/:id", component: Portafolio },
];
