import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "./Common/Home/Home";
import TermsConditions from "./Common/TermsConditions/TermsConditions";
import PrivacyPolicy from "./Common/PrivacyPolicy/PrivacyPolicy";
import CancellationPolicy from "./Common/CancellationPolicy/CancellationPolicy";
import ReviewPolicy from "./Common/ReviewPolicy/ReviewPolicy";
import CookiesPolicy from "./Common/CookiesPolicy/CookiesPolicy";
import About from "./Common/About/About";
import CustomerDashboard from "./Customer/CustomerDashboard/CustomerDashboard";
import CustomerUserProfile from "./Customer/CustomerUserProfile/CustomerUserProfile";
import CustomerBillingDetails from "./Customer/CustomerBillingDetails/CustomerBillingDetails";
import CustomerFavouriteProviders from "./Customer/CustomerFavouriteProviders/CustomerFavouriteProviders";
import CustomerNotifications from "./Customer/CustomerNotifications/CustomerNotifications";
import CustomerChangePassword from "./Customer/CustomerChangePassword/CustomerChangePassword";
import CustomerTransactions from "./Customer/CustomerTransactions/CustomerTransactions";
import CustomerReferral from "./Customer/CustomerReferral/CustomerReferral";
import ProviderServiceDetail from "./Provider/ProviderServiceDetail/ProviderServiceDetail";
import ProviderBusinessDetail from "./Provider/ProviderBusinessDetail/ProviderBusinessDetail";
import ProviderLocation from "./Provider/ProviderLocation/ProviderLocation";
import ProviderVerifiedBadge from "./Provider/ProviderVerifiedBadge/ProviderVerifiedBadge";


import ProviderMedia from "./Provider/ProviderMedia/ProviderMedia";
import ProviderFirstStepMessage from "./Provider/ProviderFirstStepMessage/ProviderFirstStepMessage";
import ProviderRequestReviews from "./Provider/ProviderRequestReviews/ProviderRequestReviews";
import ProviderBillingDetails from "./Provider/ProviderBillingDetails/ProviderBillingDetails";
import ProviderChangePassword from "./Provider/ProviderChangePassword/ProviderChangePassword";
import ProviderBusinessProfile from "./Provider/ProviderBusinessProfile/ProviderBusinessProfile";
import ContactUs from "./Common/ContactUs/ContactUs";
import Unauthorized from "./Common/UnauthorizedPage";
import ProviderFaq from "./Provider/ProviderFaq/ProviderFaq";
import ProviderMaintenance from "./Provider/ProviderMaintenance/ProviderMaintenance";
import ProviderFreeAccount from "./Provider/ProviderFreeAccount/ProviderFreeAccount";
import ProviderCompanyPractice from "./Provider/ProviderCompanyPractice/ProviderCompanyPractice";
import Login from "./Customer/Login/Login";
import Forget from "./Customer/Forget/Forget";
import VerifyEmail from "./Common/VerifyEmail.js/VerifiyEmail";
import Logout from "./Common/Logout/Logout";
import ProviderListMyServices from "./Provider/ProviderListMyServices/ProviderListMyServices";
import ResetPassword from "./Common/ResetPassword/ResetPassword";
import ProviderUserProfile from "./Provider/ProviderUserProfile/ProviderUserProfile";


const Pages = {
  HomePage: Home,
  HeaderComponent: Header,
  FooterComponent: Footer,
  LoginPage: Login,
  ForgetPage: Forget,
  TermsConditionsPage: TermsConditions,
  PrivacyPolicyPage: PrivacyPolicy,
  CancellationPolicyPage: CancellationPolicy,
  ReviewPolicyPage: ReviewPolicy,
  CookiesPolicyPage:CookiesPolicy,
  AboutPage:About,
  VerifyEmail:VerifyEmail,
  ResetPasswordPage: ResetPassword,
  Logout:Logout,

  // Customer 
  CustomerDashboardPage:CustomerDashboard,
  // Customer Account 
  CustomerUserProfilePage:CustomerUserProfile,
  CustomerBillingDetailsPage:CustomerBillingDetails,
  CustomerFavouriteProvidersPage:CustomerFavouriteProviders,
  CustomerNotificationsPage:CustomerNotifications,
  CustomerChangePasswordPage:CustomerChangePassword,
  CustomerTransactionsPage:CustomerTransactions,
  CustomerReferralPage:CustomerReferral,

  // Provider 
  ProviderServiceDetailPage:ProviderServiceDetail,
  ProviderBusinessDetailPage:ProviderBusinessDetail,
  ProviderLocationPage:ProviderLocation,
  ProviderVerifiedBadgePage:ProviderVerifiedBadge,
  ProviderFirstStepMessagePage:ProviderFirstStepMessage,
  ProviderRequestReviewsPage:ProviderRequestReviews,
  ProviderMediaPage:ProviderMedia,
  ProviderSignupPage: ProviderFreeAccount,

  // Provider Account 
  ProviderUserProfile:ProviderUserProfile,
  ProviderBillingDetailsPage:ProviderBillingDetails,
  ProviderChangePasswordPage:ProviderChangePassword,
  ProviderBusinessProfilePage:ProviderBusinessProfile,
  ContactUsPage:ContactUs,
  UnauthorizedPage:Unauthorized,
  ProviderFaqPage:ProviderFaq,
  ProviderMaintenancePage:ProviderMaintenance,
  ProviderFreeAccountPage:ProviderFreeAccount,
  ProviderCompanyPracticePage:ProviderCompanyPractice,
  ProviderListMyServices: ProviderListMyServices

};
export default Pages;