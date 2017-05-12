import { getNews } from 'api/api'

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
        </div>
    )
}

export default ApiWithCalmm
