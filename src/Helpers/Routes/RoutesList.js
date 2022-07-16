import Pages from "../../Views";

const GetRoute = ({ isprivate: isPrivate, page: Page, ...rest }) => {
  if (isPrivate) {
    return (
      <>
        <Pages.HeaderComponent />
        <Page {...rest} />
        <Pages.FooterComponent />
      </>
    );
  } else {
    return (
      <>
        <Pages.HeaderComponent />
        <Page {...rest} />
        <Pages.FooterComponent footer={rest.footer || false} />
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
    element: (
      <GetRoute isprivate={true} role="Default" page={Pages.HomePage} />
    ),
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
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.Logout}
      />
    ),
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
        isprivate={false}
        role="Default"
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
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.AboutPage}
       
      />
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
];

export default RouterList;
