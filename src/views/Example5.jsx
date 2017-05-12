import { respondBelow } from 'utils/component'
import { getNews } from 'api/api'
import Link from 'components/Link.jsx'

const isMobile = respondBelow('md')
const news = Kefir
    .constant()
    .flatMapLatest(() => Kefir.fromPromise(getNews()))
    .toProperty(() => [])

const ConditionalRendering = () => (
    <div>
        <h1>Conditional Rendering With Lazy API</h1>

        {U.ifte(isMobile,
            <h2>Boring mobile doesn't have room to display any cool stuff</h2>,
            <div>
                <h2>Desktop on the other hand...</h2>
                {U.map(({ id, title }) => <div key={id}>- {title}</div>, news)}
            </div>
        )}

        <Link to="example6" />
    </div>
)

export default ConditionalRendering
