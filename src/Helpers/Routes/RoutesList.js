import Pages from "../../Views";
import AdminPages from "../../Views/Admin/AdminPages";
import Auth from "../Auth/Auth";
import AuthHelper from "../Auth/AuthHelper";

// const verifyAuth = async (token) => {
//   var result = false;
//   try {
//     await HTTP.post(API.verifyAuth, {}, true, token).then((res) => {
//       if (res && res.status && res.status.toString() === "200") {
//         if (res.data) {
//           if (res.data.auth === true) {
//             result = true;
//           }
//         }
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   return result;
// };

const GetRoute = ({ isprivate: isPrivate, page: Page, ...rest }) => {
  if (isPrivate) {
    // check role of user
    var role = AuthHelper.getUserRoleFromAuth();
    if (role === "") {
      return (
        <>
          {rest.enableHeaderFooter && <Pages.HeaderComponent />}
          <Pages.LoginPage />
          {rest.enableHeaderFooter && (
            <Pages.FooterComponent footer={rest.footer || false} />
          )}
        </>
      );
    } else {
      if (role !== rest.role) {
        return <Pages.UnauthorizedPage />;
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
            {rest.enableHeaderFooter && <Pages.HeaderComponent />}
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
          {rest.enableHeaderFooter && <Pages.HeaderComponent />}
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
        {rest.enableHeaderFooter && <Pages.HeaderComponent />}
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
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.HomePage}
        enableHeaderFooter={true}
      />
    ),
    path: "/",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={AdminPages.Dashboard}
        enableHeaderFooter={false}
      />
    ),
    path: "/admin/king/dashboard",
    isAdmin: true,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.LoginPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/login",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.Logout}
        enableHeaderFooter={false}
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
        page={Pages.ForgetPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/forget",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.ResetPasswordPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/reset-password/:token",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.TermsConditionsPage}
        enableHeaderFooter={true}
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
        page={Pages.PrivacyPolicyPage}
        enableHeaderFooter={true}
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
        enableHeaderFooter={true}
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
        enableHeaderFooter={true}
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
        enableHeaderFooter={true}
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
        enableHeaderFooter={true}
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
        page={Pages.VerifyEmail}
        enableHeaderFooter={false}
      />
    ),
    path: "/verification/email/:token",
    isAdmin: false,
  },

  // Customer Routing
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Customer"
        page={Pages.CustomerDashboardPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/dashboard",
    isAdmin: false,
  },

  // Customer Account Routing
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Customer"
        page={Pages.CustomerUserProfilePage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/profile/userprofile",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Customer"
        page={Pages.CustomerBillingDetailsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/profile/billing",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Customer"
        page={Pages.CustomerFavouriteProvidersPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/profile/favourite",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Customer"
        page={Pages.CustomerNotificationsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/profile/notifications",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Customer"
        page={Pages.CustomerChangePasswordPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/profile/changepassword",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Customer"
        page={Pages.CustomerTransactionsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/profile/transactions",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Customer"
        page={Pages.CustomerReferralPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/profile/referral",
    isAdmin: false,
  },

  // Provider Routing

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.ProviderSignupPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/signup",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Provider"
        page={Pages.ProviderListMyServices}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/dashboard",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Provider"
        page={Pages.ProviderBusinessDetailPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/business-detail",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderServiceDetailPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/service-detail",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderLocationPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/provider-location",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderVerifiedBadgePage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/verified-badge",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderFirstStepMessagePage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/first-step-message",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderRequestReviewsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/request-reviews",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderMediaPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/media",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderBillingDetailsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/profile/billing-details",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderChangePasswordPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/profile/change-password",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderUserProfile}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/profile/userprofile",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderBusinessProfilePage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/profile/busniess-profile",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ContactUsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/contactus",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.UnauthorizedPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/unauthorized-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderFaqPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/faq-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderMaintenancePage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/maintenance-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderFreeAccountPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/free-account-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Provider"
        page={Pages.ProviderCompanyPracticePage}
        enableHeaderFooter={true}
      />
    ),
    path: "/provider/practice-company-or-an-individual",
    isAdmin: false,
  },
];

export default RouterList;
