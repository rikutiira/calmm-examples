import { fromKefir } from 'karet'
import Example1 from 'views/Example1.jsx'
import Example2 from 'views/Example2.jsx'
import Example3 from 'views/Example3.jsx'
import Example4 from 'views/Example4.jsx'
import Example5 from 'views/Example5.jsx'
import Example6 from 'views/Example6.jsx'
import Example7 from 'views/Example7.jsx'
import Assignment from 'views/Assignment.jsx'

const views = {
    example1: Example1,
    example2: Example2,
    example3: Example3,
    example4: Example4,
    example5: Example5,
    example6: Example6,
    assignment: Assignment
}

const route = Kefir
    .constant()
    .merge(Kefir.fromEvents(window, 'hashchange'))
    .map(() => {
        const hash = window.location.hash.replace('#/', '')
        const Component = views[hash] || 'div'

        return <Component />
    })

const App = () => fromKefir(route)

export default App
