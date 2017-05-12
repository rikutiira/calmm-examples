import Link from 'components/Link.jsx'

/**
 * - Your codebase can consist of solely stateless components because components never re-render,
 *   only the subscribed leaf DOM nodes.
 * - You can update lists without having to render whole lists again without any kind of cumbersome
 *   optimization tricks
 * - This is very performant way to write React code. Only the minimal amount is ever re-rendered which means
 *   that there is no need for pure components, shouldComponentUpdate optimizations, memoized selectors or any other
 *   solutions you might run with Redux or vanilla React applications
 *
 * - U.atom creates an observable with default value
 * - Karet utils (U) has Ramda functions which also work with observables, alternatively you could do U.lift(func)
 */

const Child = ({ text }) => log('child renders') && (
    <div>{text}</div>
)

const Parent = ({ items = U.atom([]), value = U.atom('') }) => log('parent renders') && (
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
