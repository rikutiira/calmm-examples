const bars = [
    'One Pint',
    'Rotterdam',
    'Amsterdam'
]

const Composability = ({ beer = U.atom(''), selectedBar = U.atom('') }) => {
    const enabled = U.and(
        U.equals(beer, 'kaljaa'),
        U.equals(selectedBar, 'One Pint')
    )

    return (
        <div>
            <h1>Composability</h1>

            {bars.map((bar) =>
                <div key={bar}>
                    <label>
                        <input
                            type="radio"
                            name="bar"
                            checked={U.equals(bar, selectedBar)}
                            onChange={() => selectedBar.set(bar)}
                            value={bar} />
                        {bar}
                    </label>
                </div>
            )}
            <input value={beer} onChange={(e) => beer.set(e.target.value)} />
            <button style={U.ift(U.not(enabled), { opacity: 0.3 })}>submit</button>
            <div>
                {U.ift(enabled, 'Oikea valinta!')}
            </div>
        </div>
    )
}

export default Composability

