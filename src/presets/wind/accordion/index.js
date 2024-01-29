export default {
  accordiontab: {
    header: ({props:e})=>({class:["pt-6 pb-0","mt-6","border-x-0 border-b-0","border border-surface-200 dark:border-surface-700",{"select-none pointer-events-none cursor-default opacity-60":e==null?void 0:e.disabled}]}),
    headerAction: ({context:e})=>({class:["font-semibold","leading-7","flex items-center justify-between flex-row-reverse","relative","rounded-md","bg-transparent","text-surface-900 dark:text-surface-0","focus:outline-none focus:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-600 ring-inset dark:focus-visible:ring-primary-500","cursor-pointer no-underline select-none"]}),
    headerIcon: {
      class: "inline-block ml-2"
    },
    headerTitle: {
      class: "leading-7"
    },
    content: {
      class: ["leading-7", "pr-12 pt-2", "text-surface-600 dark:text-surface-0/70"]
    },
    transition: {
      enterFromClass: "max-h-0",
      enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
      enterToClass: "max-h-[1000px]",
      leaveFromClass: "max-h-[1000px]",
      leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
      leaveToClass: "max-h-0"
    }
  }
}