import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Header from '../components/Header/Header'
import HomeComponent from '../components/Home/HomeComponent'
import AboutComponent from '../components/About/AboutComponent'
import ProductComponent from '../components/Product/ProductComponent'

class Routes extends PureComponent {
  render () {
    return (
      <div className='app-routes'>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/home' component={HomeComponent} />
            {this.props.isAuth ? (
              <Route path='/product' component={ProductComponent} />
            ) : (
              <Redirect from='/' to='/home' />
            )}
            <Route path='/about' component={AboutComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

Routes.defaultProps = {}

export default connect(mapState)(Routes)
