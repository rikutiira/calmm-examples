import { className, respondAbove } from 'utils/component'
import Link from 'components/Link.jsx'
import styles from './example4.scss'

const c = className(styles)
const isDesktop = respondAbove('md')

const ConditionalRendering = () => (
    <div>
        <h1>Conditional Rendering</h1>

        {U.ifte(isDesktop,
            <h2 style={{ color: 'red' }}>This should show on desktop only</h2>,
            <h3 style={{ color: 'blue' }}>This should show on mobile only</h3>
        )}

        <Link to="example5" />
    </div>
)

export default ConditionalRendering
