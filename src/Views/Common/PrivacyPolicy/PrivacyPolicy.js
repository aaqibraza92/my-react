import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import GSectionTitle from "../../../Components/GSectionTitle";
import "./Privacypolicy.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <section className="bgDarkBlue pt60 pb60 mb70">
        <GSectionTitle
          title="Privacy Policy"
          titleSize="45px"
          titlecolor="#fff"
          align="center"
          subtitlecolor="#fff"
          fontWeight="Bold"
        ></GSectionTitle>
        <div className="text-center">
          <span className="colorWhite fs16">Home </span>
          <span className="ml15 mr15">{Svg.greaterthan}</span>
          <span className="colorWhite opacity80 fs16">Privacy Policy </span>
        </div>
      </section>
      <Container>
        <section className="mb30">
          <h2 className="fs28 mb20 colorLightBlack fBold">Privacy Policy</h2>
          <p className="fs16 colorPara mb0">
            Here at Ahlookin, we believe that privacy is a top priority. Your
            privacy is important to us. We know that you care how information
            about you is used and shared. Thus, we provide this Privacy Policy
            to summarize our procedures and practices as regards to information
            collection and use. This will serve you as a guide in making an
            intelligent decision in sharing your information with us. By
            visiting Ahlookin, you agree to be bound by this Privacy Policy and
            hereby accept the procedures and practices stated in this herein.
          </p>
        </section>

        <section className="mb30">
          <h2 className="fs24 mb15 colorLightBlack fBold">Scope</h2>
          <p className="mb15 colorPara">
            This policy applies to information we collect:
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              by way of the{" "}
              <Link to="https://www.ahlookin.com" className="colorPara">
                www.Ahlookin.com
              </Link>{" "}
              website (the “Site”);
            </li>
            <li className="mb15">
              by way of all other products or services offered by Ahlookin;
            </li>
            <li className="mb15">
              in email, text, and other electronic messages between you and
              Ahlookin;{" "}
            </li>
            <li>
              when you interact with our advertising and applications on
              third-party websites and services, if those applications or
              advertising include links to this policy.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="mb15 fs24 colorLightBlack fBold">
            Information We Collect
          </h2>
          <h3 className="fs20 colorPara mb15 fBold">
            Personally Identifiable Information{" "}
          </h3>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              In providing our services, we sometimes ask for personal
              information (“your information”). We will never, however, ask you
              to send personal information to us by unsecured email. This
              information may include names, addresses, telephone numbers,
              premium services you select, demographics, user IDs, passwords,
              PINs, email addresses and communications records.{" "}
            </li>
            <li className="mb15">
              We maintain information concerning subjects like credit, billing,
              payment, security deposits, maintenance, repair, equipment and
              services.
            </li>
            <li className="mb15">
              Our policy is to collect only the personal information needed to
              provide the services we offer with the quality you deserve. We
              take reasonable steps to keep that information secure and retain
              it only as long as needed for business purposes or the law
              requires.
            </li>
            <li>
              We take reasonable precautions to identify you or your authorized
              representative when we receive an inquiry on your account. We
              sometimes collect personal information for special reasons, such
              as for research, in surveys, or when registering at our web sites.
              If so, we will tell you first how we will use it, and you may
              choose not to participate. When we offer new services to you, we
              will tell you what information we need and how we may use it.{" "}
            </li>
          </ul>
        </section>

        <section className="mb30 sharing-policy">
          <h2 className="fs24 colorLightBlack fBold mb15">
            Use and Sharing Use Policy
          </h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              We consider your information confidential, and use it only in
              providing such things as sales, installation, operations,
              administration, advertising, marketing, support, network
              management, maintenance, customer care, communications with you,
              and billing and collection.
            </li>
            <li className="mb15">
              We consider your information confidential, and use it only in
              providing such things as sales, installation, operations,
              administration, advertising, marketing, support, network
              management, maintenance, customer care, communications with you,
              and billing and collection.{" "}
            </li>
            <li className="mb15">
              We take reasonable precautions to identify you or your authorized
              representative when we receive an inquiry on your account. We
              sometimes collect personal information for special reasons, such
              as for research, in surveys, or when registering at our web sites.
              If so, we will tell you first how we will use it, and you may
              choose not to participate. When we offer new services to you, we
              will tell you what information we need and how we may use it.{" "}
            </li>
          </ul>
          <div className=" ml15 mobMl0">
            <h2 className="fs18 colorLightBlack fBold mb15">Sharing Policy</h2>
            <p className="colorPara mb15">
              We take reasonable precautions to identify you or your authorized
              representative when we receive an inquiry on your account. We
              sometimes collect personal information for special reasons, such
              as for research, in surveys, or when registering at our web sites.
              If so, we will tell you first how we will use it, and you may
              choose not to participate. When we offer new services to you, we
              will tell you what information we need and how we may use it.{" "}
            </p>
            <h2 className="fs18 colorLightBlack fBold mb15">
              Special Exceptions
            </h2>
            <p className="colorPara mb15">
              We reserve the right to disclose your information if we have a
              good faith belief it is necessary to:
            </p>
            <ul className="fs16 colorPara mb0">
              <li className="mb15">
                We consider your information confidential, and use it only in
                providing such things as sales, installation, operations,
                administration, advertising, marketing, support, network
                management, maintenance, customer care, communications with you,
                and billing and collection.
              </li>
              <li className="mb15">
                We consider your information confidential, and use it only in
                providing such things as sales, installation, operations,
                administration, advertising, marketing, support, network
                management, maintenance, customer care, communications with you,
                and billing and collection.{" "}
              </li>
              <li>
                We take reasonable precautions to identify you or your
                authorized representative when we receive an inquiry on your
                account. We sometimes collect personal information for special
                reasons, such as for research, in surveys, or when registering
                at our web sites. If so, we will tell you first how we will use
                it, and you may choose not to participate. When we offer new
                services to you, we will tell you what information we need and
                how we may use it.{" "}
              </li>
            </ul>
          </div>
        </section>

        <section className="mb30 pb30 bBottom">
          <h2 className="fs20 colorLightBlack fBold mb15">Outside Parties</h2>
          <p className="colorPara mb0">
            We sometimes uses affiliates, vendors or partners in providing our
            services and may provide your information for such purposes. We
            require that outside parties maintain at least the same level of
            confidentiality that we maintain and prohibit them from using your
            information for any other purpose. In addition, any use by the
            vendor may not exceed that needed to provide its service. We do not
            share your information with other third parties without your
            consent. If you become a customer of a third party directly, you
            should review its privacy policy, as it may differ from ours.
          </p>
        </section>

        <section className="mb30 pb30 bBottom">
          <h2 className="fs20 colorLightBlack fBold mb15">COOKIES</h2>
          <p className="colorPara mb15">
            Cookies are simple text files stored on your web browser to provide
            a means of distinguishing among users of this website. The use of
            cookies is a standard practice among Internet websites. To better
            serve you, we occasionally use "session cookies" to enhance or
            customize your visit to this website. Session cookies can be created
            automatically on the device you use to access this website but do
            not contain personal information and do not compromise your privacy
            or security. We may use the cookie feature to store a randomly
            generated identifying tag on the device you use to access this
            website. A session cookie is erased during operation of your browser
            or when your browser is closed. If you wish, you may complete a
            registration to personalize this website and permit a "persistent
            cookie" to be stored on your computer's hard drive. This persistent
            cookie will allow the website to recognize you when you visit again
            and tailor the information presented to you based on your needs and
            interests. Ahlookin will use persistent cookies only with your
            permission.
          </p>
          <p className="colorPara mb0">
            Information collected when you email this website or complete a
            transaction During your visit to this website you may send an e-mail
            to Ahlookin. Your email address and the contents of your message
            will be collected. The information collected is not limited to text
            characters and may include audio, video, and graphic information
            formats included in the message.{" "}
          </p>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack fBold mb15">Web Beacons</h2>
          <p className="colorPara mb15">
            This Website may also use web beacons. A web beacon is usually a
            pixel on a website that can be used to track whether a user has
            visited a particular website to deliver targeted advertising. Web
            beacons are used in combination with cookies, which means that, if
            you turn off your browser's cookies, the web beacons will not be
            able to track your activity. Information collected by web beacons
            may include IP address information (see below). Web beacon
            information is also used for:
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              Advertising and email auditing, and reporting;
            </li>
            <li className="mb15">Personalization;</li>
            <li className="mb15">Site traffic reporting;</li>
            <li>Unique visitor counts.</li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack fBold mb15">IP Addresses</h2>
          <p className="colorPara mb10">
            An Internet Protocol (IP) address is a number that is used by
            computers on the network to identify your computer every time you
            log on to the Internet.{" "}
          </p>
          <p className="colorPara mb15">
            Ahlookin may collect and keep track of IP addresses to, among other
            things:{" "}
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">Maintain Website safety and security;</li>
            <li className="mb15">
              Restrict access to our Websites to certain users;
            </li>
            <li className="mb15">Troubleshoot technical issues; and </li>
            <li className="mb15">
              Better understand how Ahlookin Websites are used.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack fBold mb15">Log Files</h2>
          <p className="colorPara mb15">
            Ahlookin (or third parties on behalf of Ahlookin) may collect
            information in the form of log files that are recording Website
            activities and statistics about web users' habits. Log files are
            used for internal purposes only. By using log files, Ahlookin can
            constantly improve and customize their Websites and applications.
            The entries help us gather, among other things:
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              Internal marketing and demographic studies;
            </li>
            <li className="mb15">
              A user’s browser type and operating system;
            </li>
            <li className="mb15">
              Information about a user’s session (such as the URL, the date and
              time our Website was visited and which pages and for how long were
              viewed on our Website);
            </li>
            <li>Other similar navigational or click-stream data.</li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack fBold mb15">Security</h2>
          <p className="colorPara mb0">
            All collected information is stored in a technically and physically
            secure environment. While we use SSL encryption to protect Sensitive
            Information online, we also do everything in our power to protect
            PII (including Sensitive Information) off-line. Unfortunately, no
            data transmission over the Internet can be guaranteed to be 100%
            secure. As a result, while we strive to protect our end-users'
            personal information, we cannot ensure or warrant the security of
            any information that you transmit to us, and you do so at your own
            risk.
          </p>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack fBold mb15">
            Accessing And Updating Personal Information
          </h2>
          <p className="colorPara mb0">
            When you use our services, we make good faith efforts to provide you
            with access to your personal information and either to correct this
            data if it is inaccurate or to delete such data at your request if
            it is not otherwise required to be retained by law or for legitimate
            business purposes. We ask individual users to identify themselves
            and the information requested to be accessed, corrected or removed
            before processing such requests, and we may decline to process
            requests that are unreasonably repetitive or systematic, require
            disproportionate technical effort, jeopardize the privacy of others,
            or would be extremely impractical, or for which access is not
            otherwise required. In any case, where we provide information access
            and correction, we perform this service free of charge, except if
            doing so would require a disproportionate effort. Some of our
            services have different procedures to access, correct or delete
            users’ personal information. We do retain personal information from
            closed accounts to comply with law, prevent fraud, collect any fees
            owed, resolve disputes, troubleshoot problems, assist with any
            investigations, enforce our policies and take other actions
            otherwise permitted by law.
          </p>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack fBold mb15">Third Parties</h2>
          <p className="colorPara mb0">
            We provide links to Web sites outside of our web sites, as well as
            to third-party Web sites. These linked sites are not under our
            control, and we cannot accept responsibility for the conduct of
            companies linked to our website. Before disclosing your personal
            information on any other website, we advise you to examine the terms
            and conditions of using that Site and its privacy statement.
          </p>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack fBold mb15">
            Disclosure Of Your Information
          </h2>
          <p className="colorPara mb10">
            We may disclose aggregated information about our users, and
            information that does not identify any individual, without
            restriction.
          </p>
          <p className="colorPara mb10">
            We may disclose Personal Information that we collect or you provide
            as described in this privacy policy:
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">to our subsidiaries and affiliates;</li>
            <li className="mb15">
              to contractors, service providers, and other third parties we use
              to support our business;
            </li>
            <li className="mb15">
              to any buyer or other successor in the event of a merger,
              divestiture, restructuring, reorganization, dissolution, or other
              sale or transfer of some or all of Ahlookin’s assets, whether as a
              going concern or as part of bankruptcy, liquidation, or similar
              proceeding, in which Personal Information held by Ahlookin about
              our Services users is among the assets transferred;
            </li>
            <li className="mb15">
              to third parties to market their products or services to you if
              you have not opted out of these disclosures (for more information,
              see “Choices About How We Use and Disclose Your Information”
              below);
            </li>
            <li className="mb15">
              to fulfill the purpose for which you provide it;
            </li>
            <li className="mb15">
              for any other purpose disclosed by us when you provide the
              information;
            </li>
            <li className="mb15">with your consent.</li>
          </ul>
          <p className="colorPara mb15">
            We may also disclose your Personal Information:
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              to comply with any court order, law, or legal process, including
              to respond to any government or regulatory request;
            </li>
            <li className="mb15">
              to enforce or apply our Terms of Use for Ahlookin Services,  and
              other agreements, including for billing and collection purposes;
            </li>
            <li className="mb15">
              in the process of processing, reviewing, or acting upon any
              notification or complaint we receive alleging infringement or
              violation of someone’s trademark rights, copyright interests, or
              other intellectual property rights;
            </li>
            <li>
              if we believe disclosure is necessary or appropriate to protect
              the rights, property, or safety of Ahlookin, our customers, or
              others.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack fBold mb15">Minors</h2>
          <p className="colorPara mb0">
            This Website is not intended for visitors that are minors or under
            eighteen (18) years of age. Ahlookin does not knowingly solicit or
            collect information from individuals under the age of eighteen (18).
            If we determine that we have inadvertently collected personal
            information from someone under eighteen (18) years of age, we will
            take reasonable steps to purge this information from our database.
            We encourage parents and guardians to spend time online with their
            children and to participate and monitor the Internet activities of
            their children.
          </p>
        </section>

        <section className="mb70">
          <h2 className="fs24 colorLightBlack fBold mb15">
            CHANGES AND AMENDMENTS & NOTIFICATION OF CHANGES
          </h2>
          <p className="colorPara mb0">
            Ahlookin reserves the right to change or update this Privacy Policy
            at any time by posting a clear and conspicuous notice on the Website
            explaining that we are changing our Privacy Policy. All Privacy
            Policy changes will take effect immediately upon their posting on
            the Website. Please check the Website periodically for any changes.
            Your continued use of the Website and/or acceptance of our e-mail
            communications following the posting of changes to this Privacy
            Policy will constitute your acceptance of any and all changes.
          </p>
        </section>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
