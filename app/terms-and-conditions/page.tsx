"use client";
import React from "react";
import FooterSection from "../../components/FooterSection";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto pt-28 pb-20 px-6">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-5xl font-bold text-center text-teal-400 mb-8">
            Terms and Conditions
          </h1>
          <p className="text-xl leading-relaxed mb-6 text-gray-300">
            Welcome to SVS! Please read these <span className="font-bold">Terms and Conditions</span> carefully before using our cryptocurrency wallet.
            By using SVS, you agree to accept and comply with these Terms and Conditions.
          </p>
          <ol className="list-decimal list-inside space-y-6 text-xl text-gray-300">
            <li>
              <strong className="text-teal-400">General:</strong>{" "}
              SVS is a cryptocurrency wallet that allows users to store, manage, and exchange various cryptocurrencies.
              By using SVS, you acknowledge that you are solely responsible for the use of our services and the security of your account.
            </li>
            <li>
              <strong className="text-teal-400">Registration:</strong>{" "}
              To use SVS, you must create an account and provide accurate and complete information.
              You agree to keep your account information up to date and to keep your login credentials confidential.
              You acknowledge that SVS is not responsible for any unauthorized access to your account.
            </li>
            <li>
              <strong className="text-teal-400">Use of Services:</strong>{" "}
              You may use SVS to send, receive, and store various cryptocurrencies.
              You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations.
              You acknowledge that SVS is not responsible for any unauthorized or illegal use of our services.
            </li>
            <li>
              <strong className="text-teal-400">Fees:</strong>{" "}
              SVS may charge fees for certain transactions or services.
              You agree to pay all fees associated with your use of our services.
              SVS may change its fee structure at any time, and such changes will be effective immediately upon posting to our website.
            </li>
            <li>
              <strong className="text-teal-400">Risks:</strong>{" "}
              Cryptocurrency is a highly volatile and risky asset class.
              You acknowledge that the value of cryptocurrencies can fluctuate widely and that there is no guarantee of profit or loss.
              You also acknowledge that the use of cryptocurrency involves a high degree of risk, including the risk of loss of your entire investment.
              SVS is not responsible for any losses incurred as a result of using our services.
            </li>
            <li>
              <strong className="text-teal-400">Security:</strong>{" "}
              SVS takes the security of your account seriously and employs industry-standard security measures to protect your account and assets.
              However, you acknowledge that no security measures are foolproof and that SVS is not responsible for any losses or damages resulting from security breaches or unauthorized access to your account.
            </li>
            <li>
              <strong className="text-teal-400">Limitation of Liability:</strong>{" "}
              In no event shall SVS be liable for any damages arising out of or in connection with your use of our services, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
              You acknowledge that SVS's liability is limited to the amount of fees paid by you to SVS for the use of our services.
            </li>
            <li>
              <strong className="text-teal-400">Indemnification:</strong>{" "}
              You agree to indemnify and hold SVS harmless from any and all claims, damages, liabilities, and expenses, including reasonable attorneys' fees, arising out of or in connection with your use of our services or your breach of these Terms and Conditions.
            </li>
            <li>
              <strong className="text-teal-400">Governing Law and Jurisdiction:</strong>{" "}
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which SVS is located.
              Any disputes arising out of or in connection with these Terms and Conditions shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association.
            </li>
            <li>
              <strong className="text-teal-400">Amendments:</strong>{" "}
              SVS reserves the right to modify these Terms and Conditions at any time.
              Any changes will be effective immediately upon posting to our website.
              Your continued use of our services after any such changes constitutes your acceptance of the modified Terms and Conditions.
            </li>
            <li>
              <strong className="text-teal-400">Prohibited Use:</strong>{" "}
              You may not use SVS's services for any illegal or fraudulent activities, including but not limited to money laundering, terrorism financing, or any other criminal activity.
              SVS reserves the right to suspend or terminate your account and report any suspicious activity to law enforcement authorities.
            </li>
            <li>
              <strong className="text-teal-400">User Conduct:</strong>{" "}
              You agree to use SVS's services in a manner that is respectful of other users and compliant with all applicable laws and regulations. 
              You may not engage in any activity that is harmful, offensive, or disruptive to SVS's services or other users.
            </li>
            <li>
              <strong className="text-teal-400">Intellectual Property:</strong>{" "}
              All content and materials on SVS's website, including but not limited to logos, trademarks, and text, are the property of SVS or
              its licensors.
              You may not use any of SVS's intellectual property without prior written consent.
            </li>
            <li>
              <strong className="text-teal-400">Termination:</strong>{" "}
              SVS may terminate your account and access to its services at any time and for any reason, including but not limited to a breach of these Terms and Conditions. Upon termination, you must immediately cease all use of SVS's services.
            </li>
            <li>
              <strong className="text-teal-400">Force Majeure:</strong>{" "}
              SVS shall not be liable for any failure or delay in performing its obligations under these Terms and Conditions to the extent that such failure or delay is caused by circumstances beyond its
              reasonable control, including but not limited to natural disasters, acts of terrorism, or internet disruptions.
            </li>
            <li>
              <strong className="text-teal-400">Entire Agreement:</strong>{" "}
              These Terms and Conditions constitute the entire agreement between
              you and SVS regarding your use of its services and supersede all
              prior agreements and understandings, whether written or oral.
            </li>
            <li>
              <strong className="text-teal-400">Privacy Policy:</strong>{" "}
              SVS collects and uses personal information in accordance with its
              Privacy Policy, which is incorporated by reference into these
              Terms and Conditions. By using SVS's services, you agree to SVS's
              collection, use, and disclosure of your personal information as
              described in its Privacy Policy.
            </li>
            <li>
              <strong className="text-teal-400">Third-Party Services:</strong>
              SVS may integrate with or provide links to third-party services, such as exchanges or payment processors. SVS is not responsible for the content, privacy policies, or security of such third-party services. Your use of third-party services is subject to their respective terms and conditions.
            </li>
            <li>
              <strong className="text-teal-400">Disclaimer of Warranties:</strong>
              SVS's services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. SVS does not guarantee the accuracy, completeness, or reliability of its services, and disclaims all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </li>
            <li>
              <strong className="text-teal-400">Changes to Services:</strong>
              SVS may modify or discontinue its services at any time without notice. SVS shall not be liable to you or any third party for any modification, suspension, or discontinuation of its services.
            </li>
            <li>
              <strong className="text-teal-400">Assignment:</strong>
              You may not assign or transfer your rights or obligations under these Terms and Conditions without the prior written consent of SVS. SVS may assign or transfer its rights or obligations under these Terms and Conditions without notice to you.
            </li>
            <li>
              <strong className="text-teal-400">Waiver:</strong>
              The failure of SVS to enforce any provision of these Terms and Conditions shall not be construed as a waiver of its right to enforce such provision in the future.
            </li>
            <li>
              <strong className="text-teal-400">Eligibility:</strong>
              You must be at least 18 years old to use SVS's services. By using SVS's services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms and Conditions.
            </li>
            <li>
              <strong className="text-teal-400">Compliance with Laws:</strong>
              You agree to comply with all applicable laws and regulations in your use of SVS's services. You acknowledge that cryptocurrency laws and regulations vary by jurisdiction and that it is your responsibility to comply with the laws of your jurisdiction.
            </li>
            <li>
              <strong className="text-teal-400">Customer Support:</strong>
              SVS provides customer support to assist you with any issues or questions related to our services. You may contact us at support@svscoin.org and we will make best efforts to respond to your inquiry in a timely manner.
            </li>
            <li>
              <strong className="text-teal-400">Feedback:</strong>
              SVS welcomes your feedback and suggestions regarding our services. By providing feedback, you acknowledge and agree that SVS may use your feedback for any purpose without compensation to you.
            </li>
            <li>
              <strong className="text-teal-400">Severability:</strong>
              If any provision of these Terms and Conditions is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced.
            </li>
            <li>
              <strong className="text-teal-400">Headings:</strong>
              The headings used in these Terms and Conditions are for convenience only and shall not affect the interpretation of these Terms and Conditions.
            </li>
            <li>
              <strong className="text-teal-400">Language:</strong>
              These Terms and Conditions may be translated into other languages for your convenience. In the event of any conflict between the translated version and the English version, the English version shall prevail.
            </li>
            <li>
              <strong className="text-teal-400">Dispute Resolution:</strong>
              Any dispute arising out of or in connection with these Terms and Conditions shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in the jurisdiction where SVS is located.
            </li>
            <li>
              <strong className="text-teal-400">No Waiver:</strong>
              The failure of SVS to enforce any provision of these Terms and Conditions shall not be construed as a waiver of its right to enforce such provision in the future.
            </li>
            <li>
              <strong className="text-teal-400">Survival:</strong>
              The provisions of these Terms and Conditions that by their nature should survive termination, including but not limited to indemnification, limitation of liability, and intellectual property, shall survive termination.
            </li>
            <li>
              <strong className="text-teal-400">Notices:</strong>
              All notices and other communications under these Terms and Conditions shall be in writing and shall be sent to the email address associated with your SVS account.
            </li>
            <li>
              <strong className="text-teal-400">Amendments:</strong>
              SVS reserves the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting to our website. Your continued use of our services after any such changes constitutes your acceptance of the modified Terms and Conditions.
            </li>
            <li>
              <strong className="text-teal-400">Entire Agreement:</strong>
              These Terms and Conditions constitute the entire agreement between you and SVS regarding your use of its services and supersede all prior agreements and understandings, whether written or oral.
            </li>
            <li>
              <strong className="text-teal-400">Limitation on Use:</strong>
              You may not use SVS's services in any manner that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of our services. You may not attempt to gain unauthorized access to any part of our services or any other systems or networks connected to our services.
            </li>
            <li>
              <strong className="text-teal-400">User Content:</strong>
              You acknowledge and agree that any content or information that you provide or upload to SVS's services, including but not limited to text, images, and videos, is your sole responsibility. You represent and warrant that you have all necessary rights and permissions to post such content or information, and that your use of such content or information does not violate the rights of any third party.
            </li>
            <li>
              <strong className="text-teal-400">Termination for Convenience:</strong>
              SVS may terminate your account and access to our services at any time and for any reason, including but not limited to changes in our business model or services. Upon termination, you must immediately cease all use of SVS's services.
            </li>
            <li>
              <strong className="text-teal-400">No Investment Advice:</strong>
              SVS's services do not constitute investment advice or a recommendation to buy or sell any cryptocurrency. You acknowledge that you are solely responsible for your investment decisions and that SVS is not liable for any losses incurred as a result of your investment decisions.
            </li>
            <li>
              <strong className="text-teal-400">No Partnership or Agency:</strong>
              These Terms and Conditions do not create a partnership, joint venture, agency, or employment relationship between you and SVS.
            </li>
            <li>
              <strong className="text-teal-400">Third-Party Beneficiaries:</strong>
              These Terms and Conditions are for the benefit of you and SVS and are not intended to confer any rights or benefits on any third party.
            </li>
            <li>
              <strong className="text-teal-400">Force Majeure:</strong>
              SVS shall not be liable for any failure or delay in performing its obligations under these Terms and Conditions to the extent that such failure or delay is caused by circumstances beyond its reasonable control, including but not limited to natural disasters, acts of terrorism, or internet disruptions.
            </li>
            <li>
              <strong className="text-teal-400">No Guarantee of Availability:</strong>
              SVS does not guarantee the availability of its services or the uninterrupted operation of its servers or networks. You acknowledge that SVS may experience technical difficulties or outages that may affect your use of our services.
            </li>
            <li>
              <strong className="text-teal-400">No Refunds:</strong>
              SVS does not offer refunds for any fees or charges associated with its services, including but not limited to transaction fees or account maintenance fees.
            </li>
            <li>
              <strong className="text-teal-400">No Warranty of Accuracy:</strong> SVS does not guarantee the accuracy, completeness, or reliability of any information or content provided through its services. You acknowledge that any reliance on such information or content is at your own risk.
            </li>
            <li>
              <strong className="text-teal-400">No Warranty of Compatibility:</strong> SVS does not guarantee that its services are compatible with all devices, operating systems, or software. You acknowledge that it is your responsibility to ensure that your device and software are compatible with our services.
            </li>
            <li>
              <strong className="text-teal-400">No Warranty of Timeliness:</strong> SVS does not guarantee that its services will be timely or error-free. You acknowledge that delays or errors may occur and that SVS is not liable for any losses or damages resulting from such delays or errors.
            </li>
            <li>
              <strong className="text-teal-400">No Liability for Third-Party Services:</strong> SVS is not responsible for the content, privacy policies, or security of any third-party services that are integrated with or linked to our services. Your use of third-party services is subject to their respective terms and conditions.
            </li>
            <li>
              <strong className="text-teal-400">No Liability for Acts of Third Parties:</strong> SVS is not liable for any losses or damages resulting from the acts or omissions of any third party, including but not limited to other users of our services or third-party service providers.
            </li>
            <li>
              <strong className="text-teal-400">No Liability for Government Actions:</strong> SVS is not liable for any losses or damages resulting from government actions, including but not limited to regulatory actions or changes in law.
            </li>
            <li>
              <strong className="text-teal-400">Compliance with Anti-Money Laundering Laws:</strong> SVS complies with all applicable anti-money laundering laws and regulations. We may require you to provide additional information or documentation to verify your identity or comply with these laws and regulations.
            </li>
            <li>
              <strong className="text-teal-400">Compliance with Sanctions Laws:</strong> SVS complies with all applicable sanctions laws and regulations. We may prohibit transactions or suspend your account if we determine that such transactions or account activity violate sanctions laws or regulations.
            </li>
            <li>
              <strong className="text-teal-400">Compliance with Tax Laws:</strong> You are solely responsible for complying with all applicable tax laws and regulations related to your use of SVS's services. SVS does not provide tax advice and is not responsible for any tax liabilities or obligations incurred as a result of your use of our services.
            </li>
            <li>
              <strong className="text-teal-400">No Liability for User Errors:</strong> SVS is not liable for any losses or damages resulting from user errors, including but not limited to sending cryptocurrency to an incorrect address or providing incorrect account information.
            </li>
            <li>
              <strong className="text-teal-400">No Liability for Loss of Private Keys:</strong> SVS is not liable for any losses or damages resulting from the loss of your private keys or other access credentials. You are solely responsible for the security of your private keys and other access credentials.
            </li>
            <li>
              <strong className="text-teal-400">No Liability for Forks or Airdrops:</strong> SVS is not liable for any losses or damages resulting from forks or airdrops of cryptocurrencies that are not supported by our services. You acknowledge that it is your responsibility to research and understand the risks associated with such forks or airdrops.
            </li>
            <li>
              <strong className="text-teal-400">No Liability for Market Volatility:</strong> SVS is not liable for any losses or damages resulting from market volatility or fluctuations in the value of cryptocurrencies. You acknowledge that the value of cryptocurrencies can be highly volatile and may fluctuate rapidly.
            </li>
            <li>
              <strong className="text-teal-400">Intellectual Property:</strong> SVS and its licensors own all intellectual property rights in and to its services, including but not limited to patents, trademarks, copyrights, and trade secrets. You may not use or reproduce any of SVS's intellectual property without our prior written consent.
            </li>
            <li>
              <strong className="text-teal-400">Indemnification:</strong> You agree to indemnify and hold SVS and its officers, directors, employees, and agents harmless from any and all losses, liabilities, damages, costs, and expenses, including but not limited to attorneys' fees, arising from your use of our services or your breach of these Terms and Conditions.
            </li>
            <li>
              <strong className="text-teal-400">Limitation of Liability:</strong> SVS's liability for any claim arising out of or in connection with these Terms and Conditions or your use of our services is limited to the amount of fees paid by you to SVS in the twelve (12) months preceding the event giving rise to such claim. In no event shall SVS be liable for any indirect, consequential, or punitive damages.
            </li>
            <li>
              <strong className="text-teal-400">Governing Law:</strong> These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction where SVS is located, without giving effect to any principles of conflicts of law.
            </li>
            <li>
              <strong className="text-teal-400">Jurisdiction:</strong> You agree that any legal action or proceeding arising out of or in connection with these Terms and Conditions or your use of our services shall be brought exclusively in the courts of the jurisdiction where SVS is located.
            </li>
            <li>
              <strong className="text-teal-400">Assignment:</strong> You may not assign these Terms and Conditions or any of your rights or obligations hereunder without our prior written consent. SVS may assign these Terms and Conditions or any of its rights or obligations hereunder without your consent.
            </li>
            <li>
              <strong className="text-teal-400">No Third-Party Beneficiaries:</strong> Except as expressly provided in these Terms and Conditions, these Terms and Conditions are not intended to confer any rights or remedies on any third party.
            </li>
            <li>
              <strong className="text-teal-400">Entire Agreement:</strong> These Terms and Conditions constitute the entire agreement between you and SVS regarding your use of our services and supersede all prior or contemporaneous agreements or understandings, whether written or oral, regarding such subject matter.
            </li>
            <li>
              <strong className="text-teal-400">Language:</strong> These Terms and Conditions may be translated into other languages for your convenience. In the event of any conflict between the translated version and the English version, the English version shall prevail.
            </li>
            <li>
              <strong className="text-teal-400">No Waiver:</strong> The failure of SVS to enforce any provision of these Terms and Conditions shall not be deemed a waiver of such provision or of the right to enforce such provision.
            </li>
            <li>
              <strong className="text-teal-400">Severability:</strong> If any provision of these Terms and Conditions is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent permitted by law.
            </li>
            <li>
              <strong className="text-teal-400">Survival:</strong> Any provisions of these Terms and Conditions that by their nature should survive termination, including but not limited to indemnification, limitation of liability, and intellectual property provisions, shall survive termination.
            </li>
            <li>
              <strong className="text-teal-400">Amendments:</strong> SVS reserves the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting to our website. Your continued use of our services after any such changes constitutes your acceptance of the modified Terms and Conditions.
            </li>


          </ol>
          <p className="text-xl text-gray-300 mt-8">
            By using SVS, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree to these Terms and Conditions, you may not use SVS.
            For further details, contact us at{" "}
            <a
              href="mailto:support@svscoin.org"
              className="text-teal-400 hover:underline"
            >
              support@svscoin.org
            </a>
            .
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default TermsAndConditions;
