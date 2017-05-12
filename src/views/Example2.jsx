import { Component } from 'react'
import { getNews } from 'api/api'
import Link from 'components/Link.jsx'

/**
 * Example of fetching API data with class component
 */

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

                <Link to="example3" />
            </div>
        )
    }
}

export default ApiWithoutCalmm
