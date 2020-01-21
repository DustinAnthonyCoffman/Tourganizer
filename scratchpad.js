<Switch>
<Route exact path='/' render={({ history }) =>
<div>
      <SignupPage
    history={history}
    handleSignupOrLogin={this.handleSignupOrLogin}
  />
      <LoginPage
    history={history}
    handleSignupOrLogin={this.handleSignupOrLogin}
  />


</div>
  }/>
</Switch>


in app in header