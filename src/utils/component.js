import { BREAKPOINTS } from 'constants/constants'
import { breakpoint$ } from 'stores/ui'

const className = (styles = {}) => (...args) =>
    K(...args, (...clss) => {
        const classes = clss.map((cls) => typeof cls === 'string'
            ? styles[cls] || cls
            : U.seq(cls,
                U.keys,
                U.map((key) => cls[key]
                    ? styles[key] || key
                    : undefined
                ),
                U.filter(Boolean)))

        return U.join(' ', U.flatten(classes))
    })

const getBreakpointWidths = (breakpoint) => breakpoint$.map((currentBreakpoint) => {
    const getBreakpointWidth = (bp) => R.pipe(
        R.find(([name]) => name === bp),
        R.last
    )(BREAKPOINTS)

    const currentBreakpointWidth = getBreakpointWidth(currentBreakpoint)
    const breakpointWidth = getBreakpointWidth(breakpoint)

    return { currentBreakpointWidth, breakpointWidth }
})

const respondAbove = (breakpoint, fn = () => true, notMatchFn = () => null) =>
    getBreakpointWidths(breakpoint).map(({ currentBreakpointWidth, breakpointWidth }) =>
        currentBreakpointWidth >= breakpointWidth
            ? fn()
            : notMatchFn())

const respondBelow = (breakpoint, fn = () => true, notMatchFn = () => null) =>
    getBreakpointWidths(breakpoint).map(({ currentBreakpointWidth, breakpointWidth }) =>
        currentBreakpointWidth < breakpointWidth
            ? fn()
            : notMatchFn())

export { className, respondAbove, respondBelow }
