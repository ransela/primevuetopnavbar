export default {
  listbutton: ({props:e})=>({class:["leading-none","inline-flex items-center align-bottom text-center","rounded-md rounded-r-none","px-2.5 py-1.5","ring-1 ring-surface-200 dark:ring-surface-700",e.modelValue==="list"?"bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-0":"bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80","focus:outline-none focus:outline-offset-0 focus:ring-primary-500 dark:focus:ring-primary-400","hover:bg-surface-200 dark:hover:bg-surface-600/80","transition duration-200","cursor-pointer select-none overflow-hidden"]}),
  gridbutton: ({props:e})=>({class:["leading-none","inline-flex items-center align-bottom text-center","rounded-md rounded-l-none","px-2.5 py-1.5","ring-1 ring-surface-200 dark:ring-surface-700",e.modelValue==="grid"?"bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-0":"bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80","focus:outline-none focus:outline-offset-0 focus:ring-primary-500 dark:focus:ring-primary-400","hover:bg-surface-200 dark:hover:bg-surface-600/80","transition duration-200","cursor-pointer select-none overflow-hidden"]})
}