import AuthLayoutContainer from 'containers/AuthLayoutContainer'
import { connect } from 'react-redux'
import { Switch, withRouter } from 'react-router-dom'
import { authSelector } from 'selectors/authSelectors/authSelector'
import AdminLayout from 'views/layouts/AdminLayout'
import PrivateRoute from 'views/routes/PrivateRoute'
import PublicRoute from 'views/routes/PublicRoute'

type Props = {
  authed: boolean
}

const App = ({ authed }: Props) => {
  return (
    <Switch>
      <PublicRoute
        authed={authed}
        path='/login'
        component={AuthLayoutContainer}
      />
      <PrivateRoute authed={authed} path='/admin' component={AdminLayout} />
      <PublicRoute authed={authed} path='/' component={AuthLayoutContainer} />
    </Switch>
  )
}

export default withRouter(connect(authSelector)(App))
