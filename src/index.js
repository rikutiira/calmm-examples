import 'styles/global.scss'
import 'globals'

import ReactDOM from 'react-dom'
import App from 'App.jsx'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
