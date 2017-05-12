import Link from 'components/Link.jsx'

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