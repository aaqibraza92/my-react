import React from "react";
import { Container } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import GSectionTitle from "../../../Components/GSectionTitle";
// import { useHistory } from "react-router-dom";

const TermsConditions = (props) => {
  // var history = useHistory();
  // const { Userdata } = history.location.state;
  return (
    // <section>
    //   <Container>
    //     Hello {Userdata.name} and your contact is {Userdata.contact}
    //     {props.name}
    //   </Container>
    // </section>
    <div>
      <section className="bgDarkBlue pt60 pb60 mb70">
        <GSectionTitle
          title="Terms & Conditions"
          titleSize="45px"
          titlecolor="#fff"
          align="center"
          subtitlecolor="#fff"
          fontWeight="Bold"
        ></GSectionTitle>
        <div className="text-center">
          <span className="colorWhite fs16">Home </span>
          <span className="ml15 mr15">{Svg.greaterthan}</span>
          <span className="colorWhite opacity80 fs16">Terms & Conditions </span>
        </div>
      </section>
      <Container>
        <section className="mb30">
          <h2 className="fs28 mb20 colorLightBlack fBold">Terms Of Use</h2>
          
          <p className="colorPara mb0">
            We reserve the right, in our sole discretion, to change, modify,
            add, or remove portions of these Terms at any time and you agree to
            be bound by such modifications or revisions. It is your
            responsibility to check the Terms periodically because any changes
            will be binding on you. By continuing to access or use the Services
            after those revisions become effective, you agree to be bound by the
            revised Terms.
          </p>
        </section>

        <section className="pb6 mb30 ">
          <h2 className="fs24 mb20 colorLightBlack fBold">
            We Are A Neutral Marketplace
          </h2>
          <p className="mb0 colorPara">
            As a user, service provider, affiliate, partner, or advertiser, you
            acknowledge that we are not a product or service provider, vendor,
            or an agent representative for any service provider. Instead, we
            function solely as a neutral marketplace where users may connect to
            attain services or products. We are not involved in or a party to
            the actual transaction between Users. As a result, we have no
            control over the existence, quality, accuracy, safety, or legality
            of the transactions that take place on the Services provided on our
            platform or the accuracy of any Vendor listings. We have no control
            over the ability of Vendors to provide items or perform services or
            the ability of Members to pay for any goods and services. We make no
            representations or warranties and are not liable or responsible for
            the actions or inactions of our Users
          </p>
        </section>

        <section className="mb30 ">
          <h2 className="fs24 mb20 colorLightBlack fBold">
            Service Providers Listen Up!
          </h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              It is the responsibility of the customer to explain and describe
              any job requirements. Ahlookin makes no warranty for the accuracy,
              completeness, or surety of any information provided by any
              customer.
            </li>
            <li className="mb15">
              Any contract or any other agreement entered between the vendor and
              the customer remains the responsibility of the two parties
              involved. Ahlookin will accept no liability with respect to any
              agreement or breech of any agreement between the varying parties.
              Ahlookin also accepts no liability for the quality, safety, or
              completeness of any job completed by any Service Provider
            </li>
            <li className="mb15">
              You acknowledge that you are legally within your right to apply
              for any job or project, and that you have the required knowledge,
              skills, qualifications, and related competencies to complete a
              job. Any job description sent to you which you positively reply to
              with the intent of completing the job/ project, you acknowledge
              that you have the requisite competencies to complete the job and
              will do so within the legal constraints of the land, and within
              the highest ethical constraints.
            </li>
            <li className="mb15">
              You acknowledge that you are legally within your right to apply
              for any job or project, and that you have the required knowledge,
              skills, qualifications, and related competencies to complete a
              job. Any job description sent to you which you positively reply to
              with the intent of completing the job/ project, you acknowledge
              that you have the requisite competencies to complete the job and
              will do so within the legal constraints of the land, and within
              the highest ethical constraints.
            </li>
            <li className="mb15">
              Ahlookin receives requests from homeowners, consumers,
              individuals, and other persons ("users") expressing interest in
              certain services and other types of tasks and projects. These
              service requests from customers may be submitted directly or
              indirectly to Ahlookin by customers via the Ahlookin Website,
              telephone calls, messaging apps, third party websites or other
              means. In turn, Ahlookin may send you a communication about a
              customer's request for quotation that contains information about
              what service has been requested and the customer's contact
              information (a "Lead").
            </li>
            <li>
              If your Ahlookin rating falls to two and a half (2.5) stars or
              lower, you will be unable to submit quotations until your rating
              rises above two and a half (2.5) stars. You will be able to
              increase your rating by obtaining further good reviews from solely
              Ahlookin customers. You will be able to submit bids/ quotes again
              if your rating is greater than two and a half (2.5) stars.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 mb20 colorLightBlack fBold">Users Listen Up!</h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              You understand and acknowledge that selecting and negotiating
              terms of any job or project with any Service Provider is your
              responsibility.  You also understand that Ahlookin makes no
              warranty with regards to any of the services purchased or obtained
              using this website.
            </li>
            <li className="mb15">
              Ahlookin makes no guarantees that it will be able to find a
              Service Provider suitable to undertake your job/ project. However,
              we at Ahlookin will try our best to connect persons looking to
              offer a service and those looking to buy the service, but we make
              no guarantees that once Ahlookin distributes the job to a service
              provider that they will contact the customer.
            </li>
            <li>
              Any contract or any other agreement entered between the Service
              Provider and the customer remains the responsibility of the two
              parties involved. Ahlookin will accept no liability with respect
              to any agreement or breech of any agreement between the varying
              parties. Ahlookin also accepts no liability for the quality,
              safety, or completeness of any job completed by any trade or
              Service Provider.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack fBold mb20">Eligibility</h2>
          <h3 className="fs18 mb20 colorBlack">
            By using the Site, You represent and warrant that:
          </h3>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              All registration information You submit will be true, accurate,
              current, and complete;
            </li>
            <li className="mb15">
              You will maintain the accuracy of such information and promptly
              update such registration information as necessary;
            </li>
            <li className="mb15">
              You have the legal capacity and you agree to comply with these
              Terms of Use;
            </li>
            <li className="mb15">You are not under the age of 18;</li>
            <li className="mb15">
              You are not a minor in the jurisdiction in which you reside;
            </li>
            <li className="mb15">
              You will not access the Site through automated or non-human means,
              whether through a bot, script, or otherwise;
            </li>
            <li className="mb15">
              You will not use the Site for any illegal or unauthorized purpose;
            </li>
            <li className="mb15">
              Your use of the Site will not violate any applicable law or
              regulation. If You provide any information that is untrue,
              inaccurate, not current, or incomplete, we have the right to
              suspend or terminate your account and refuse any and all current
              or future use of the Site (or any portion thereof).
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">
            Prohibitions And Use Of Ahlookin
          </h2>
          <p className="fs16 mb20 colorPara">
            This Site allows contractors, Service Provider s, all forms of
            services, and consumers looking for these persons to communicate,
            conduct business with one another, express their thoughts, and make
            some comments and discussion, and communicate with other members.
            You understand and agree, however, that you will use this website
            including its tools and services with full sense of responsibility
            and in a manner that is consistent with these Terms and in such a
            way as to ensure compliance with all applicable laws and
            regulations. You agree that you will use the site and its services
            in compliance with all applicable local, national, and international
            laws, rules and regulations, including any laws regarding the
            transmission of technical data exported from your country of
            residence and all Trinidad and Tobago export control laws.
          </p>
          <p className="fs16 mb20 colorPara">
            You may view, download for collection purposes only, and print pages
            or other contents from the website for your own personal use,
            subject to the restrictions set out below and elsewhere in these
            terms of use:
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              You must not use our sites, including its services and or tools if
              you are not able to form legally binding contracts, are under the
              age of 18, or are temporarily or indefinitely suspended from using
              our sites, services, or tools
            </li>
            <li className="mb15">
              You must not republish, sell, rent or sub-license any materials
              from this website including republication on another website.
            </li>
            <li className="mb15">
              You must not collect and disclose information about users’
              personal information. Collection of our Service Provider s or
              other members’ information with the intent to reproduce or create
              your own business with the use of our data, without Ahlookin’s
              express written consent, is a massive violation of our terms and
              we take this very seriously. You agree that if you are found doing
              this, you will be prosecuted to the full extent of the law
            </li>
            <li className="mb15">
              You must not access or use the account of another user without
              permission;
            </li>
            <li className="mb15">
              You must not reproduce, duplicate, copy or otherwise exploit
              material on our website for a commercial purpose.
            </li>
            <li className="mb15">
              You must not “Hack” or access without permission, our proprietary
              or confidential records, those of another user, or those of anyone
              else. You must not interfere with, disrupt, or destroy the
              functionality or use of any features of the site or the servers or
              networks connected to the site;
            </li>
            <li className="mb15">
              You must not decompile, reverse engineer, disassemble or otherwise
              attempt to derive source code from the site. Additionally, you
              agree not to remove, circumvent, disable, damage or otherwise
              interfere with security-related features, or features that enforce
              limitations on use of this site.
            </li>
            <li className="mb15">
              You must not take any action that may damage the rating/ review/
              feedback system.
            </li>
            <li>
              You must not use our website in any way that causes, or may cause,
              damage to the website or impairment of the availability or
              accessibility of the website; or in any way which is unlawful,
              illegal, fraudulent or harmful, or in connection with any
              unlawful, illegal, fraudulent or harmful purpose or activity.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">
            Registration / Member Account
          </h2>
          <p className="fs16 mb20 colorPara">
            This Site allows contractors, Service Provider s, all forms of
            services, and consumers looking for these persons to communicate,
            conduct business with one another, express their thoughts, and make
            some comments and discussion, and communicate with other members.
            You understand and agree, however, that you will use this website
            including its tools and services with full sense of responsibility
            and in a manner that is consistent with these Terms and in such a
            way as to ensure compliance with all applicable laws and
            regulations. You agree that you will use the site and its services
            in compliance with all applicable local, national, and international
            laws, rules and regulations, including any laws regarding the
            transmission of technical data exported from your country of
            residence and all Trinidad and Tobago export control laws.
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              As a condition of becoming a member of Ahlookin including the use
              of its tools, applications, and services, you are required to
              register with the site and be required to provide a password and
              username. You must complete the full registration process and
              shall provide the site with accurate, complete, and updated
              registration information. Failure to do so, shall constitute a
              breach of the Terms of Use which may result in immediate
              termination of your account.
            </li>
            <li className="mb15">
              You are entirely responsible for maintaining the confidentiality
              of your password. You agree not to use the Member Account, Member
              profile, username, or password of another Member at any time. You
              agree to notify us immediately if you suspect any unauthorized use
              of your Member Account or Member profile or access to your
              password. You are solely responsible for any and all use of your
              Member Account and Member profile.
            </li>
            <li className="mb15">
              You must not transmit any worms or viruses or any code of a
              destructive nature. Any information provided by you or gathered by
              the site or third parties during any visit to the site shall be
              subject to the terms of Ahlookin Privacy Policy.
            </li>
            <li>
              In addition, you may not register for more than one Member
              Account, register for a Member Account on behalf of an individual
              other than yourself or register a Member Account on behalf of any
              group or entity to whom you are not directly affiliated with and
              given permission to act on their behalf. Furthermore, you may not
              use or attempt to use another's Member Account without
              authorization from us or create a false identity on our Services.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">Links & Framings</h2>
          <p className="fs16 mb20 colorPara">
            Illegal and/or unauthorized uses of the Services, including
            unauthorized framing of or linking to the Sites will be
            investigated, and appropriate legal action may be taken. Some links,
            however, are welcomed to the site and you are allowed to establish
            hyperlink to appropriate part within the site provided that:
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              You post your link only within the forum, chat or message board
              section;
            </li>
            <li className="mb15">
              You do not remove or obscure any advertisements, copyright notices
              or other notices placed on the site;
            </li>
            <li>
              You immediately stop providing any links to the site on written
              notice from us.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">
            Communication And Other Materials Posted By You
          </h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              You are responsible for the content of your communications,
              messages and posts, and its consequences. We reserves the right to
              terminate your registration if we become aware, at our sole
              discretion, that you are violating any of the guidelines set forth
              in this agreement, privacy policy, and review policy.
            </li>
            <li className="mb15">
              While we want to encourage an open exchange of information and
              ideas, we do not review postings made in any forums, between
              service providers and final consumers and other public-posting
              areas on the site. You can expect these areas to include
              information and opinions from a variety of individuals and
              organizations other than us. We do not endorse or guarantee the
              accuracy, integrity or quality of any posting regardless of
              whether the posting comes from a user, from a celebrity or
              "expert" guest, or from a member of our staff.
            </li>
            <li className="mb15">
              By participating in this website, you understand and agree not to
              post or transmit any material that, in our judgment, is
              defamatory, abusive, obscene, threatening or unlawful in any way,
              or any material that infringes on the rights of others or contains
              any virus or other computer programming routine which may
              interfere with or damage the site or otherwise interrupt on the
              ability of others to use or enjoy the same. We reserve the right
              to delete, move or edit any postings that come to our attention
              that we consider unacceptable or inappropriate, whether for legal
              or for any other reason. Furthermore, we reserve the right to deny
              access to anyone who we believe, in our sole discretion, has in
              any way breached these Terms or where we reasonably believe a user
              does not comply with any relevant age restrictions on the site.
            </li>
            <li className="mb15">
              Since Content (not limited to text, photographs, videos, writing,
              audio, graphics, comments, or personal information) that you post
              may be viewable by other users of the Site and through third-party
              websites, any content that you transmit may be treated as
              non-confidential and non-proprietary.
            </li>
            <li>
              By posting Content, you expressly represent and warrant the
              following: (i) you are the owner, with all appurtenant rights
              thereto, of any and all Content; or (ii) you are the legitimate
              and rightful grantee of a worldwide, royalty free, perpetual,
              irrevocable, sub-licensable, non-exclusive license to use,
              distribute, reproduce, and distribute Submitted Content. You
              further represent and warrant that all persons and entities
              connected with the Submitted Content, and all other persons and
              entities whose names, voices, photographs, likenesses, works,
              services, and materials have been used in the Submitted Content or
              its exploitation, have authorized the use of their names, voices,
              photographs, likenesses, performances, and biographical data in
              connection with the advertising, promotion, trade and other
              exploitation of the submitted Content and the rights granted
              herein.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">
            Contribution License
          </h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              By posting your Contributions (not limited to text, photographs,
              videos, writing, audio, graphics, comments, or personal
              information) to any part of the Site, you automatically grant, and
              you represent and warrant that you have the right to grant to us
              an unrestricted, unlimited, irrevocable, perpetual, non-exclusive,
              transferable, royalty-free, fully-paid, worldwide right, and
              license to host, use, copy, reproduce, disclose, sell, resell,
              publish, broadcast, retitle, archive, store, cache, publicly
              perform, publicly display, reformat, translate, transmit, excerpt
              (in whole or in part), and distribute such Contributions
              (including, without limitation, your image and voice) for any
              purpose, commercial, advertising, or otherwise, and to prepare
              derivative works of, or incorporate into other works, such
              Contributions, and grant and authorize sublicenses of the
              foregoing. The use and distribution may occur in any media formats
              and through any media channels.
            </li>
            <li className="mb15">
              This license will apply to any form, media, or technology now
              known or hereafter developed, and includes our use of your name,
              company name, and franchise name, as applicable, and any of the
              trademarks, service marks, trade names, logos, and personal and
              commercial images you provide. You waive all moral rights in your
              Contributions, and you warrant those moral rights have not
              otherwise been asserted in your Contributions.
            </li>
            <li>
              We do not assert any ownership over your Contributions. You retain
              full ownership of all your Contributions and any intellectual
              property rights, or other proprietary rights associated with your
              Contributions. We are not liable for any statements or
              representations in your Contributions provided by you in any area
              on the Site. You are solely responsible for your Contributions to
              the Site and you expressly agree to exonerate us from any and all
              responsibility and to refrain from any legal action against us
              regarding your Contributions. We have the right, in our sole and
              absolute discretion, (1) to edit, redact, or otherwise change any
              Contributions; (2) to re-categorize any Contributions to place
              them in more appropriate locations on the Site; and (3) to
              pre-screen or delete any Contributions at any time and for any
              reason, without notice. We have no obligation to monitor your
              Contributions.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">Social Media</h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              As part of the functionality of the Website, you may link your
              account with online accounts you may have with third-party service
              providers (each such account, a “Third-Party Account”) by either:
              (i) providing your Third-Party Account login information through
              the Website; or (ii) allowing Company to access your Third-Party
              Account, as is permitted under the applicable terms and conditions
              that govern your use of each Third-Party Account.
            </li>
            <li className="mb15">
              You represent that you are entitled to disclose your Third-Party
              Account login information to Ahlookin and/or grant Ahlookin access
              to your Third-Party Account (including, but not limited to, for
              use for the purposes described herein), without breach by you of
              any of the terms and conditions that govern your use of the
              applicable Third-Party Account and without obligating Ahlookin to
              pay any fees or making Ahlookin subject to any usage limitations
              imposed by such third-party service providers.
            </li>
            <li className="mb15">
              By granting Ahlookin access to any Third-Party Accounts, you
              understand that (i) Ahlookin may access, make available and store
              ,if applicable, any content that you have provided to and stored
              in your Third-Party Account (the “Social Network Content”) so that
              it is available on and through the Website via your account,
              including without limitation any friend lists, and (ii) Ahlookin
              may submit and receive additional information to your Third-Party
              Account to the extent you are notified when you link your account
              with the Third-Party Account.
            </li>
            <li className="mb15">
              Depending on the Third-Party Accounts you choose and subject to
              the privacy settings that you have set in such Third-Party
              Accounts, personally identifiable information that you post to
              your Third-Party Accounts may be available on and through your
              account on the Website.
            </li>
            <li className="mb15">
              Please note that if a Third-Party Account or associated service
              becomes unavailable or Ahlookin’s access to such Third-Party
              Account is terminated by the third-party service provider, then
              Social Network Content may no longer be available on and through
              the Website. You will have the ability to disable the connection
              between your account on the Website and your Third-Party Accounts
              at any time.
            </li>
            <li>
              PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE
              PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED
              SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE
              PROVIDERS. Ahlookin makes no effort to review any Social Network
              Content for any purpose, including but not limited to, for
              accuracy, legality or non-infringement, and Company is not
              responsible for any Social Network Content. You acknowledge and
              agree that Ahlookin may access your e-mail address book associated
              with a Third-Party Account and your contacts list stored on your
              mobile device or tablet computer solely for the purposes of
              identifying and informing you of those contacts who have also
              registered to use the Website.
            </li>
          </ul>
        </section>

        <section className="mb30 pb30 bBottom">
          <h2 className="fs24 colorLightBlack mb20 fBold">
            Third Party Services
          </h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              Ahlookin may link to or offer Third-Party Services on Company’s
              website or otherwise through the Site. Any purchase, enabling, or
              engagement of Third-Party Services, including but not limited to
              implementation, customization, consulting services, and any
              exchange of Data between you and any Third-Party Service, is
              solely between you and the applicable Third-Party Service provider
              and is subject to the terms and conditions of such Third-Party
              Provider.
            </li>
            <li className="mb15">
              Ahlookin does not warrant, endorse or support Third-Party Services
              and is not responsible or liable for such Services or any losses
              or issues that result from your use of such services. If you
              purchase, enable or engage any Third-Party Service for use in
              connection with this site, you acknowledge that Company may allow
              providers of those Third-Party Services to access your Data used
              in connection with the Site as required for the interoperation of
              such Third-Party Services with the Site.
            </li>
            <li>
              You represent and warrant that your use of any Third-Party Service
              signifies your independent consent to the access and use of your
              Data by the Third-Party Service provider, and that such consent,
              use, and access is outside of Ahlookin’s control. Ahlookin will
              not be responsible or liable for any disclosure, modification or
              deletion of Data resulting from any such access by Third-Party
              Service providers.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs28 colorLightBlack mb20 fBold">PAYMENT</h2>
          <h2 className="fs24 colorLightBlack mb20 fBold">Service Fees</h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              In connection with the use of Ahlookin’s Platform, Ahlookin
              charges certain fees ("Ahlookin Fees", “Service Fees” or "Fees").
            </li>
            <li className="mb15">
              Service Providers agree to pay Fees to Ahlookin to receive certain
              services on the Platform, including but not limited to being
              matched with and receiving contacts from Users or other
              individuals, or receiving leads that turn into business for the
              Service Provider.
            </li>
            <li className="mb15">
              Once payment is made between a Service Provider and a User, the
              service provider owes Ahlookin the respective portion of the
              Service Fee. The Service Fee will automatically be deducted from
              the Agreed Price held in the Payment Account. In cases where cash
              is used, the Service Provider must deposit the funds into
              Ahlookin’s account within one week of payment. Failure to comply
              will result in a temporary suspension of the Service Provider’s
              account.
            </li>
            <li className="mb15">
              All Fees and charges payable to Ahlookin are non-cancellable and
              non-refundable.
            </li>
            <li className="mb15">
              Ahlookin may return any Fees against any Service Provider’s Funds
              or other amounts held by Ahlookin on behalf of a User
            </li>
            <li>
              Ahlookin may restrict a User's or Service Provider’s account until
              all Fees have been paid.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">Chargebacks</h2>
          <p className="colorPara mb0">
            It is the responsibility of the Service Provider to issue any
            refunds to Users and Users should direct all refund requests to the
            applicable Service Provider. Ahlookin will not be responsible or
            liable in any way for refunds or errors in issuing refunds in
            connection with your use of the Site. Users shall only initiate
            chargebacks or request refunds in situations where a User has a good
            faith belief that the charged amount is incorrect, the charge was
            fraudulent or there was some other error with the billed amount. If
            you violate the foregoing, Ahlookin reserves the right to pursue all
            remedies available to it, including suspension of your access to the
            Site.
          </p>
        </section>

        <section className="mb30 pb30 bBottom">
          <h2 className="fs24 colorLightBlack mb20 fBold">Taxes</h2>
          <p className="colorPara mb0">
            You understand and agree that you are solely responsible for
            determining your own tax reporting requirements and for collection,
            withholding, reporting, and remitting local taxes required to be
            paid in connection with your use of the Website to the appropriate
            tax authorities. Ahlookin cannot and do not offer tax advice to
            either Service Providers or Service Consumers.
          </p>
        </section>

        <section className="mb30">
          <h2 className="fs28 colorLightBlack mb15 fBold">Review Policy</h2>
          <p className="colorPara mb15">
            The following provisions apply to all users who post or submit a
            user generated review. You hereby agree to the following provisions:
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Rights To Post Information:
          </h2>
          <p className="colorPara mb20">
            You give Ahlookin the right to post any information you provided to
            us about your review, that would assist others in making an informed
            decision.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Reservation Of Right To Remove Or Not Allow A Review:
          </h2>
          <p className="colorPara mb20">
            Ahlookin reserves the right to not allow a user to submit or post a
            review on this Website.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Non-Confidentiality Of A Review:
          </h2>
          <p className="colorPara mb20">
            Unless otherwise agreed, any information sent on a review will be
            treated as non-confidential.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Responsibility For The Review:
          </h2>
          <p className="colorPara mb20">
            The writer of the review accepts all responsibility for the review
            they submitted. You hereby agree to indemnify Ahlookin.com from any
            claims that results from your posting.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">Adherence To Laws:</h2>
          <p className="colorPara mb20">
            You will not post anything that encourages persons to violate our
            laws and the laws of their local, national, or international
            communities.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Use Of The Reviews:
          </h2>
          <p className="colorPara mb20">
            By posting reviews to Ahlookin, you agree to grant us permission to
            use your review in the way that best suits our needs. You therefore
            agree to give Ahlookin the necessary permission to reproduce,
            display, translate, and distribute your review, on a free basis.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Conflict Of Interest:
          </h2>
          <p className="colorPara mb20">
            You agree that you are not reviewing your own service. You should
            not be the service provider, an employee of the service provider, or
            have any other relationship which could be viewed as a conflict of
            interest.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Competing Relationships And Interests:
          </h2>
          <p className="colorPara mb20">
            You agree to inform Ahlookin of any competing relationship before
            any review. You agree that your review will be honest and truly
            representative of the service provided.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Ownership Of Content:
          </h2>
          <p className="colorPara mb10">
            You agree that the contents of your review do not contain any
            copyright, trademark, or licensing infringements. The content of the
            review should not knowingly encroach on another person’s
            intellectual property.
          </p>
          <p className="colorPara mb10">
            Ahlookin reserves the right to not post reviews or remove reviews in
            the following cases:
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              Spam: If your posting is not a review of the respective service,
              it will be treated as spam.
            </li>
            <li className="mb15">
              Advertisements that have not gained the appropriate approval
            </li>
            <li className="mb15">Defamatory remarks</li>
            <li className="mb15">Profanity, vulgarities, or obscenities</li>
            <li className="mb15">
              Reviews that represent a conflict of interest
            </li>
            <li className="mb15">Violation of the Law</li>
          </ul>
          <p className="colorPara mb0">
            The above provisions are subjected to change from time to time.
          </p>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">
            warranty disclaimer and exclusions / limitations of liability
          </h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              You represent and warrant that (a) all the information provided by
              you to our website to participate in the Service is correct and
              current; and (b) you have all necessary right, power and authority
              to enter into this Agreement and to perform the acts required of
              you hereunder.
            </li>
            <li className="mb15">
              You hereby accept and agree that it is beyond our control, and no
              duty to take any action regarding: which users gain access to the
              Site or use the Services; what effects the Content may have on
              you; how you may interpret or use the Content; or what actions you
              may take as a result of having been exposed to the Content. You
              release us from all liability for you having acquired or not
              acquired Content through the Site or the Services.
            </li>
            <li className="mb15">
              We make no representations concerning any content contained in or
              accessed through the Site or Services, and we will not be
              responsible or liable for the accuracy, copyright compliance,
              legality or decency of material contained in or accessed through
              the Site or the Services. The service, content, and site are
              provided on an "as is" basis, without warranties of any kind,
              either express or implied, including without limitation, implied
              warranties of merchantability, fitness for a particular purpose or
              non-infringement.
            </li>
            <li className="mb15">
              In addition, we make no representation that the operation of our
              site will be uninterrupted or error-free, and we will not be
              liable for the consequences of any interruptions or errors. We may
              change, restrict access to, suspend or discontinue the site or any
              part of it at any time. The information, content and services on
              the site are provided on an “as is” basis. When you use the site
              and or participate herein, you understand and agree, that you
              participate at your own risk.
            </li>
            <li className="mb15">
              Ahlookin, may at times, not censor or verify the accuracy, or
              completeness of the content provided. As a result, it is your duty
              to ensure that you protect your interest while using any
              information or service provided, as Ahlookin will not be held
              responsible and holds no liability with respect to any content
              written, or distributed in whichever way by our users, affiliates,
              or staff. Ahlookin maintains the liability over the quality level,
              legality, or safety of the service provider or the projects
              provided on the website.
            </li>
            <li>
              It is your responsibility when choosing a service provider that
              they are competent and qualified to do the job or task at hand.
              Ahlookin only provides the space where both parties meet but takes
              no responsibility for the quality of work provided, or the skills,
              knowledge or related competencies of the service provider.  You
              also acknowledge that any work conducted must be done within the
              law of the territory to which the work is being done.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">
            intellectual property rights
          </h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              The Web allows people throughout the world to share valuable
              information, ideas, and creative works. To ensure continued open
              access to such materials, we all need to protect the rights of
              those who share their creations with us. Although we make the Site
              freely accessible, we don't intend to give up our rights, or
              anyone else's rights, to the materials appearing on them. The
              materials available on the site shall remain the property of
              Ahlookin and/or its licensors, and are protected by copyright,
              trademark, and other intellectual property laws.
            </li>
            <li className="mb15">
              You acquire no proprietary interest in any such rights.
              Furthermore, you may not remove or obscure the copyright notice,
              or any other notices contained in the site or anything retrieved
              or downloaded from them.
            </li>
            <li className="mb15">
              You hereby acknowledge that all rights, titles, and interests,
              including but not limited to rights covered by the Intellectual
              Property Rights, in and to the site, and that You will not acquire
              any right, title, or interest in or to the site except as
              expressly set forth in this Agreement. You will not modify, adapt,
              translate, prepare derivative works from, decompile, reverse
              engineer, disassemble or otherwise attempt to derive source code
              from any of our services, software, or documentation, or create or
              attempt to create a substitute or similar service or product
              through use of or access to the Program or proprietary information
              related thereto.
            </li>
            <li>
              In addition, we make no representation that the operation of our
              site will be uninterrupted or error-free, and we will not be
              liable for the consequences of any interruptions or errors. We may
              change, restrict access to, suspend or discontinue the site or any
              part of it at any time. The information, content and services on
              the site are provided on an “as is” basis. When you use the site
              and or participate herein, you understand and agree, that you
              participate at your own risk.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">Confidentiality</h2>
          <p className="colorPara mb0">
            You agree not to disclose information you obtain from us and or from
            our clients, advertisers, suppliers, and forum members. All
            information submitted to, by an end-user customer pursuant to a
            program, is proprietary information of Ahlookin. Such customer
            information is confidential and may not be disclosed. Publisher
            agrees not to reproduce, disseminate, sell, distribute, or
            commercially exploit any such proprietary information in any manner.
          </p>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">
            Waiver And Severability Of Terms
          </h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              Failure of Ahlookin to insist upon strict performance of any of
              the terms, conditions and covenants hereof shall not be deemed a
              relinquishment or waiver of any rights or remedy that we may have,
              nor shall it be construed as a waiver of any subsequent breach of
              the terms, conditions, or covenants hereof, which terms,
              conditions and covenants shall continue to be in full force and
              effect.
            </li>
            <li className="mb15">
              No waiver by either party of any breach of any provision hereof
              shall be deemed a waiver of any subsequent or prior breach of the
              same or any other provision.
            </li>
            <li>
              If any provision of these Terms and Conditions is found invalid or
              unenforceable pursuant to any judicial decree or decision, such
              provision shall be deemed to apply only to the maximum extent
              permitted by law, and the remainder of these Terms and Conditions
              shall remain valid and enforceable according to its terms.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">
            Jurisdiction And Disputes
          </h2>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              This Agreement shall be governed by and construed in accordance
              with the substantive laws of Trinidad and Tobago, without any
              reference to conflict-of-laws principles. The Agreement describes
              and encompasses the entire agreement between us and you, and
              supersedes all prior or contemporaneous agreements,
              representations, warranties, and understandings with respect to
              the Site, the contents and materials provided by or through the
              Site, and the subject matter of this Agreement.
            </li>
            <li>
              Any dispute, controversy or difference which may arise between the
              parties out of, in relation to or in connection with this
              Agreement is hereby irrevocably submitted to the exclusive
              jurisdiction of the courts of Trinidad and Tobago, to the
              exclusion of any other courts without giving effect to its
              conflict of laws provisions or your actual state or country of
              residence.
            </li>
          </ul>
        </section>

        <section className="mb30">
          <h2 className="fs24 colorLightBlack mb20 fBold">Termination</h2>
          <p className="colorPara mb0">
            This Agreement will remain in full force and effect while you use
            the Website. You may terminate your membership at any time for any
            reason by following the instructions on the “TERMINATION OF ACCOUNT”
            in the setting page. We may terminate your membership for any reason
            at any time. If you are using a paid version of the Service and we
            terminate your membership in the Service because you have breached
            this Agreement, you will not be entitled to any refund of unused
            subscription fees. Even after your membership is terminated, certain
            sections of this Agreement will remain in effect.
          </p>
        </section>

        <section className="mb70">
          <span className="fs16 fBold colorLightBlack">Last updated:</span>
          <span className="fs16 colorLightBlack">January 20, 2022</span>
        </section>
      </Container>
    </div>
  );
};

export default TermsConditions;
