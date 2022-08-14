import Pages from "../../Views";
import Auth from "../Auth/Auth";
import AuthHelper from "../Auth/AuthHelper";
import { Navigate, useNavigate } from "react-router-dom";

const GetRoute = ({ isprivate: isPrivate, page: Page, ...rest }) => {
  const navigate = useNavigate();
  var LoggedIn = false;
  var role = AuthHelper.getUserRoleFromAuth();

  {
    console.log("resst", role);
  }

  if (Auth.isUserLoggedIn()) {
    LoggedIn = true;
  }
  if (isPrivate && !LoggedIn) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        {rest.showHeaderFooder && (
          <Pages.HeaderComponent userType={rest.role} />
        )}
        <div className="contentWrapper">
          <Page {...rest} />
        </div>
        {rest.showHeaderFooder && (
          <Pages.FooterComponent footer={rest.footer || false} />
        )}
      </>
    );
  }
};

let RouterList = [
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        showHeaderFooder={true}
        page={Pages.LoginPage}
      />
    ),
    path: "/",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={true} role="Default" page={Pages.HomePage} />,
    path: "/home",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={true}
        role="Default"
        showHeaderFooder={true}
        page={Pages.TermsConditionsPage}
      />
    ),
    path: "/terms-conditions",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.Logout} />,
    path: "/logout",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Default"
        page={Pages.PrivacyPolicyPage}
        showHeaderFooder={true}
      />
    ),
    path: "/privacy-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Default"
        page={Pages.CancellationPolicyPage}
        showHeaderFooder={true}
      />
    ),
    path: "/cancellation-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Customer"
        page={Pages.ReviewPolicyPage}
      />
    ),
    path: "/review-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.CookiesPolicyPage}
      />
    ),
    path: "/cookies-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.AboutPage} />
    ),
    path: "/about",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.CustomerDashboardPage}
      />
    ),
    path: "/customer/dashboard",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.CustomerUserProfilePage}
      />
    ),
    path: "/customer/profile/userprofile",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.CustomerBillingDetailsPage}
      />
    ),
    path: "/customer/profile/billing",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.CustomerFavouriteProvidersPage}
      />
    ),
    path: "/customer/profile/favourite",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.UnAuthorized} />
    ),
    path: "*",
    isAdmin: false,
    showHeaderFooder: true,
  },
];

export default RouterList;
