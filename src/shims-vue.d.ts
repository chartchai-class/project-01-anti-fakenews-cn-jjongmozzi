declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

// 补充 Node 模块类型
declare module 'node:url' {
  export const fileURLToPath: (url: URL) => string
  export const URL: typeof globalThis.URL
}