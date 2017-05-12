import { className, respondAbove } from 'utils/component'
import Link from 'components/Link.jsx'
import styles from './example4.scss'

/**
 * - You can use observables to do very complex layouts by simply rendering stuff
 *   when a condition is fulfilled.
 * - Here we are rendering different content for mobile and desktop breakpoints,
 *   VDOM gets updated automatically as browser is resized
 * - Same also works for classes, styles, etc... you can conditionally change them based
 *   on observable value
 */

const c = className(styles)
const isDesktop = respondAbove('md')

const ConditionalRendering = () => (
    <div>
        <h1>Conditional Rendering</h1>

        {U.ifte(isDesktop,
            <h2 style={{ color: 'red' }}>This should show on desktop only</h2>,
            <h3 style={{ color: 'blue' }}>This should show on mobile only</h3>
        )}

        <div className={c({ 'margin--top-large': isDesktop, 'margin--top-medium': U.not(isDesktop) })}>
            Responsive breakpoint specific margin with only one margin utility function (mindblown)
        </div>

        <Link to="example5" />
    </div>
)

export default ConditionalRendering
