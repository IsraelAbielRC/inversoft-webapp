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
export const routes = [
  { path: "/Presupuesto", component: Presupuesto },
  { path: "/Menu", component: menu },
  { path: "/", component: Inicio },
];
