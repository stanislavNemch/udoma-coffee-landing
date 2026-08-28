/// <reference types="vite/client" />

/*
 * CSS Modules: явна типізація.
 * TS 7 при кількох співпадаючих wildcard-паттернах обирає *.css (порожній модуль),
 * тому повторюємо декларацію *.module.css тут — після vite/client, щоб вона перемогла.
 */
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
