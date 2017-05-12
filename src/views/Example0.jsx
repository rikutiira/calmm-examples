import Link from 'components/Link.jsx'

/**
 * - Observables can be directly embedded into VDOM, but they can be plain values as well.
 * - Component does not update when time updates because only div (time is its child)
 *   is subscribing to changes in time.
 */
const Time = () => {
    const time = Kefir
        .interval(1000)
        .map(() => new Date().toString())
        .toProperty(() => '')

    return (
        <div>
            <h1>Observables</h1>
            {time}

            <Link to="example1" />
        </div>
    )
}

export default Time
