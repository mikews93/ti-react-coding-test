/// <reference path="interfaces.d.ts" />
/// <reference path="functions.d.ts" />
/// <reference path="declarations.d.ts" />

declare module NodeJS  {
  interface Global {
      expect: any
  }
}
