import Pages from "../../Views";
import Auth from "../Auth/Auth";
import AuthHelper from "../Auth/AuthHelper";

const GetRoute = ({ isprivate: isPrivate, page: Page, ...rest }) => {


  var LoggedIn = false;
  var role = AuthHelper.getUserRoleFromAuth();

  console.log("Auth.isUserLoggedIn()",Auth.isUserLoggedIn());

  if (Auth.isUserLoggedIn()) {
    LoggedIn = true;
  }
  if (isPrivate) {
    // check role of user
    if (rest.role === "Salon" && role !== "Salon") {
      <>
       
      </>; 
      return ""
    } else if (rest.role === "Customer" && role !== "Customer") {
      return ""
    } else if (rest.role === "Admin" && role !== "Admin") {
      return ""
      
    } else if (role === "Default") {
      return (
        <>
          {rest.enableHeaderFooter && (
            <Pages.HeaderComponent />
          )}
          {rest.enableHeaderFooter && (
            <Pages.FooterComponent footer={rest.footer || false} />
          )}
        </>
      );
    } else {
      if (role !== rest.role) {
        return <Pages.UnAuthorized/>;
      }
    }

    var isValid = false;
    var token = null;
    if (Auth.isUserLoggedIn()) {
      token = Auth.getToken();
      isValid = true;
    }
    if (isValid) {
      if (rest.isAdmin) {
      } else {
        return (
          <>
            {rest.enableHeaderFooter && (
              <Pages.HeaderComponent />
            )}
            <div className="contentWrapper">
              <Page {...rest} />
            </div>

            {rest.enableHeaderFooter && (
              <Pages.FooterComponent footer={rest.footer || false} />
            )}
          </>
        );
      }
    } else {
      return (
        <>
          {rest.enableHeaderFooter && (
            <Pages.HeaderComponent />
          )}
          <Pages.LoginPage />
          {rest.enableHeaderFooter && (
            <Pages.FooterComponent footer={rest.footer || false} />
          )}
        </>
      );
    }
  } else {
    return (
      <>
        {rest.enableHeaderFooter && (
          <Pages.HeaderComponent />
        )}
        <div className="contentWrapper">
          <Page {...rest} />
        </div>
        {rest.enableHeaderFooter && (
          <Pages.FooterComponent footer={rest.footer || false} />
        )}
      </>
    );
  }
};

let RouterList = [
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.LoginPage} />
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
        isprivate={false}
        role="Default"
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
        isprivate={false}
        role="Default"
        page={Pages.PrivacyPolicyPage}
      />
    ),
    path: "/privacy-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.CancellationPolicyPage}
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
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.UnAuthorized}
      />
    ),
    path: "*",
    isAdmin: false,
    showHeaderFooder: true,
  },
];

export default RouterList;
