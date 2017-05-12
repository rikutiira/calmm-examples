import { Component } from 'react'
import { getNews } from 'api/api'

class ApiWithoutCalmm extends Component {
    constructor() {
        super()
        this.state = {
            news: [],
            loading: true
        }
    }

    componentDidMount() {
        getNews().then((news) => {
            this.setState({
                news,
                loading: false
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Api fetching without Karet</h1>
                {this.state.loading
                    ? 'Lataa...'
                    : this.state.news.map(({ id, title }) =>
                        <div key={id}>- {title}</div>
                    )
                }
            </div>
        )
    }
}

export default ApiWithoutCalmm
