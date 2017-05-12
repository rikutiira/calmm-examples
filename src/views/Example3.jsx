import { getNews } from 'api/api'
import Link from 'components/Link.jsx'

/**
 * Example of fetching API data with Karet component
 * - Much more concise
 * - No need for lifecycle methods or setState calls
 * - loading is derived from news and would automatically update whenever news updates
 */

const ApiWithCalmm = () => {
    const news = Kefir.fromPromise(getNews()).toProperty(() => [])
    const loading = U.not(U.length(news))

    return (
        <div>
            <h1>Api fetching with Karet</h1>
            {U.ifte(loading,
                'Lataa...',
                U.map(({ id, title }) => <div key={id}>- {title}</div>, news)
            )}

            <Link to="example4" />
        </div>
    )
}

export default ApiWithCalmm
