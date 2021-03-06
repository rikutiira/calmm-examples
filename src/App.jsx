import { fromKefir } from 'karet'
import Link from 'components/Link.jsx'
import Example0 from 'views/Example0.jsx'
import Example1 from 'views/Example1.jsx'
import Example2 from 'views/Example2.jsx'
import Example3 from 'views/Example3.jsx'
import Example4 from 'views/Example4.jsx'
import Example5 from 'views/Example5.jsx'
import Example6 from 'views/Example6.jsx'
import Example7 from 'views/Example7.jsx'
import Assignment from 'views/Assignment.jsx'
import AssignmentDone from 'views/AssignmentDone.jsx'

const views = {
    example0: Example0,
    example1: Example1,
    example2: Example2,
    example3: Example3,
    example4: Example4,
    example5: Example5,
    example6: Example6,
    example7: Example7,
    assignment: Assignment,
    assignmentDone: AssignmentDone
}

const Start = () => (
    <div>
        <h1>Calmm examples</h1>
        <Link to="example0" />
    </div>
)

const route = Kefir
    .constant()
    .merge(Kefir.fromEvents(window, 'hashchange'))
    .map(() => {
        const hash = window.location.hash.replace('#/', '')
        const Component = views[hash] || Start

        return <Component />
    })

const App = () => fromKefir(route)

export default App
