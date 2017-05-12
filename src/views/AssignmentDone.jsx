/**
 * Write a component that:
 * - Has two number inputs
 * - If the sum of the two inputs is 42, display text "Done"
 * - Use the following functions: U.atom, U.add, U.ift, U.equals
 */

const isInteger = U.lift((val) => val.match(/^\d*$/))

const AssignmentExample = ({ value1 = U.atom(''), value2 = U.atom('') }) => {
    const sum = U.add(value1, value2)
    const isValid = U.and(isInteger(value1), isInteger(value2))

    return (
        <div>
            <h1>Assignment Example</h1>
            <input type="text" value={value1} onChange={(e) => value1.set(e.target.value)} />
            <input type="text" value={value2} onChange={(e) => value2.set(e.target.value)} />
            <div>
                {U.ift(U.equals(sum, 42), 'Done')}
            </div>
            <div>
                {U.ift(U.not(isValid), 'Error')}
            </div>
        </div>
    )
}

export default AssignmentExample