import { BREAKPOINTS } from 'constants/constants'

const getSize = () => {
    const elem = document.documentElement
    const body = elem.getElementsByTagName('body')[0]

    return {
        x: window.innerWidth  || elem.clientWidth  || body.clientWidth,
        y: window.innerHeight || elem.clientHeight || body.clientHeight
    }
}

export const size$ = Kefir
    .fromEvents(window, 'resize')
    .debounce(16)
    .map(getSize)
    .toProperty(getSize)

export const breakpoint$ = size$.map(({ x }) =>
    R.pipe(
        R.reverse,
        R.find(([_, width]) => x >= width),
        R.head
    )(BREAKPOINTS)
).skipDuplicates()
