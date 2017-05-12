import { respondBelow } from 'utils/component'
import { getNews } from 'api/api'
import Link from 'components/Link.jsx'

/**
 * Kefir observables are lazy which can help you write some very neat code with little effort:
 * - Here news API call is only triggered when news observable gets a listener, which only happens
 *   at desktop resolution. Run the code in browser and start the app in mobile size; no unnecessary
 *   API call is made
 * - This means that you can write global stores which require data from API and they get triggered only when
 *   the data is needed. No need for actions etc for triggering API calls. Also easier to write performant
 *   mobile apps and code.
 */

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
