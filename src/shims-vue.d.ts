// src/shims-vue.d.ts
// 为 .vue 文件提供 TypeScript 类型支持
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}