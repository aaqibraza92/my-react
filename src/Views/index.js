import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "./Common/Home/Home";
import TermsConditions from "./Common/TermsConditions/TermsConditions";
import PrivacyPolicy from "./Common/PrivacyPolicy/PrivacyPolicy";
import Login from "./Customer/Login";
import CookiesPolicy from "./Common/CookiesPolicy/CookiesPolicy";
import ReviewPolicy from "./Common/ReviewPolicy/ReviewPolicy";
import CancellationPolicy from "./Common/CancellationPolicy/CancellationPolicy";
import About from "./Common/Home/About";
import CustomerDashboard from "./Customer/CustomerDashboard/CustomerDashboard";
import CustomerUserProfile from "./Customer/CustomerUserProfile/CustomerUserProfile";
import CustomerBillingDetails from "./Customer/CustomerBillingDetails/CustomerBillingDetails";
import CustomerFavouriteProviders from "./Customer/CustomerFavouriteProviders/CustomerFavouriteProviders";
import Logout from "../Components/Header/Logout";

const Pages = {
  HomePage: Home,
  LoginPage: Login,
  TermsConditionsPage: TermsConditions,
  PrivacyPolicyPage: PrivacyPolicy,
  HeaderComponent: Header,
  FooterComponent: Footer,
  CancellationPolicyPage: CancellationPolicy,
  ReviewPolicyPage: ReviewPolicy,
  CookiesPolicyPage: CookiesPolicy,
  AboutPage: About,
  CustomerDashboardPage: CustomerDashboard,
  CustomerUserProfilePage: CustomerUserProfile,
  CustomerBillingDetailsPage: CustomerBillingDetails,
  CustomerFavouriteProvidersPage: CustomerFavouriteProviders,
  Logout: Logout

};
export default Pages;