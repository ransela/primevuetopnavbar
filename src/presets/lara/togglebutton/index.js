export default {
  root: ({props:e,context:r})=>({class:["items-center inline-flex text-center align-bottom justify-center","px-4 py-3 leading-none","rounded-md border",{"bg-surface-0 dark:bg-surface-900 ":!e.modelValue,"border-surface-200 dark:border-surface-700 ":!e.modelValue,"text-surface-700 dark:text-white/80":!e.modelValue,"bg-primary-500 dark:bg-primary-400 border-primary-500 dark:border-primary-400 text-white dark:text-surface-900":e.modelValue},{"hover:bg-surface-50 dark:hover:bg-surface-800/80 hover:border-surface-200 dark:hover:bg-surface-700 hover:text-surface-700 dark:hover:text-white/80":!e.modelValue,"hover:bg-primary-600 hover:border-primary-600 dark:hover:bg-primary-300 dark:hover:border-primary-300":e.modelValue,"outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50":r.focused&&!e.disabled},"transition-all duration-200",{"cursor-pointer":!e.disabled,"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),
  label: {
    class: "font-bold text-center w-full"
  },
  icon: ({props:e})=>({class:[" mr-2",{"text-surface-600 dark:text-white/70":!e.modelValue,"text-white dark:text-surface-900":e.modelValue}]})
}