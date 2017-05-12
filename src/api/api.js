export const getNews = () => new Promise((resolve) => {
    log('%cgetting news...', 'color: red; font-size: 20px;')

    setTimeout(() => {
        resolve([
            { id: 1, title: 'Superkoodarit valittaa huonosta palkasta' },
            { id: 2, title: 'Lounaspaikan valinta on konsulttien vaativin tehtävä' }
        ])
    }, 2500)
})
