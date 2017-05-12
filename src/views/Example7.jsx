import styles from './example7.scss'

const DragAndDrop = () => {
    const node = U.variable()
    const dragging = node.flatMapLatest((node) =>
        Kefir
            .fromEvents(node, 'mousedown')
            .flatMapLatest((md) =>
                Kefir.fromEvents(window, 'mousemove')
                    .map((mm) => ({
                        left: mm.clientX - md.offsetX,
                        top: mm.clientY - md.offsetY
                    }))
                    .takeUntilBy(Kefir.fromEvents(node, 'mouseup'))
            )
    ).toProperty(R.always({}))

    return (
        <div>
            <h1>Drag and Drop</h1>
            <div
                className={styles.ball}
                ref={(ref) => ref && node.set(ref)}
                style={dragging} />
        </div>
    )
}

export default DragAndDrop
