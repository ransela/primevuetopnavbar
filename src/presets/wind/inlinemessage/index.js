export default {
  root: ({props:e})=>({class:["inline-flex items-center justify-center align-top gap-2","py-2 px-3 m-0 rounded-md","ring-1 ring-inset ring-surface-200 dark:ring-surface-700 ring-offset-0",{"text-blue-500 dark:text-blue-300":e.severity=="info","text-green-500 dark:text-green-300":e.severity=="success","text-orange-500 dark:text-orange-300":e.severity=="warn","text-red-500 dark:text-red-300":e.severity=="error"}]}),
  icon: {
    class: ["w-4 h-4", "shrink-0"]
  },
  text: {
    class: ["text-sm leading-none", "font-medium"]
  }
}