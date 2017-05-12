import Link from 'components/Link.jsx'

const Child = ({ text }) => (
    <div>{text}</div>
)

const Parent = ({ items = U.atom([]), value = U.atom('') }) => (
    <div>
        <h1>Stateless components only</h1>

        {U.seq(items, U.mapCached((text) =>
            <Child text={text} key={text} />
        ))}

        <input
            type="text"
            placeholder="Insert text"
            value={value}
            onChange={(e) => value.set(e.target.value)} />

        <button onClick={() => {
            items.modify(U.append(value.get()))
            value.set('')
        }}>Submit</button>

        <Link to="example2" />
    </div>
)

export default Parent
