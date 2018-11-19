import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
import Logout from "../components/Logout";
import Profile from "../components/Profile";
import PostsList from "../components/PostsList";

const DashboardPage = () => (
  <AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            <h1>Dashboard</h1>
            <a href='https://rebloc.auth0.com/v2/logout'> Logout </a>
            <Profile />
            <PostsList />
          </div>
        )}
        no={() => ( 
          <div>
            <h1>Return to home page or Logout</h1>
            <a href="http://demo-app.rebloc.io:3000"> Home </a>
            <Logout />
          </div>
        )}
      />
    )}
  </AuthConsumer>
);

export default DashboardPage;
