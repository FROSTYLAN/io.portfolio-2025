declare module '*.jsx' {
  const Component: any;
  export default Component;
}

// Declaraciones para importar archivos de imagen como strings (URLs)
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.gif' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.pdf' {
  const src: string;
  export default src;
}
