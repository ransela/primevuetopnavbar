export default {
  root: {
    class: ["flex lg:flex-row flex-col"]
  },
  sourcecontrols: {
    class: ["flex lg:flex-col justify-center gap-2", "p-5"]
  },
  sourcemoveupbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  sourcemovetopbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  sourcemovedownbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  sourcemovebottombutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  sourcewrapper: {
    class: "grow shrink basis-2/4"
  },
  sourceheader: {
    class: ["font-bold", "border-b-0 rounded-t-md", "p-5", "text-surface-700 dark:text-white/80", "bg-surface-50 dark:bg-surface-800", "border border-surface-200 dark:border-surface-700"]
  },
  sourcelist: {
    class: ["list-none m-0 p-0", "min-h-[12rem] max-h-[24rem]", "rounded-b-md", "text-surface-600 dark:text-white/80", "bg-surface-0 dark:bg-surface-800", "border border-surface-200 dark:border-surface-700", "py-3 px-0", "outline-none", "overflow-auto"]
  },
  item: ({context:e})=>({class:["relative","py-3 px-5 m-0","border-none","transition duration-200","text-surface-700 dark:text-white/80",{"bg-primary-500/20 dark:bg-primary-300/20":e.active&&!e.focused},{"bg-primary-500/30 dark:bg-primary-400/30":e.active&&e.focused},{"bg-surface-100 dark:bg-surface-700/70":!e.active&&e.focused},"hover:bg-surface-100 dark:hover:bg-surface-700","cursor-pointer overflow-hidden"]}),
  buttons: {
    class: "flex lg:flex-col justify-center gap-2 p-5"
  },
  movetotargetbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  movealltotargetbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  movetosourcebutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  movealltosourcebutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  targetcontrols: {
    class: "flex lg:flex-col justify-center gap-2 p-5"
  },
  targetmoveupbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  targetmovetopbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  targetmovedownbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  targetmovebottombutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","w-12","m-0","px-0 py-3","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  targetwrapper: {
    class: "grow shrink basis-2/4"
  },
  targetheader: {
    class: ["font-bold", "border-b-0 rounded-t-md", "p-5", "text-surface-700 dark:text-white/80", "bg-surface-50 dark:bg-surface-800", "border border-surface-200 dark:border-surface-700"]
  },
  targetlist: {
    class: ["list-none m-0 p-0", "min-h-[12rem] max-h-[24rem]", "rounded-b-md", "text-surface-600 dark:text-white/80", "bg-surface-0 dark:bg-surface-800", "border border-surface-200 dark:border-surface-700", "py-3 px-0", "outline-none", "overflow-auto"]
  },
  transition: {
    enterFromClass: "!transition-none",
    enterActiveClass: "!transition-none",
    leaveActiveClass: "!transition-none",
    leaveToClass: "!transition-none"
  }
}