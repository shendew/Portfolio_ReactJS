import React, { useEffect } from 'react';

const PrivacyPolicy = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Privacy Policy</h1>
            <p><strong>Last updated: [Insert Date]</strong></p>
            
            <p>
                Welcome to Thedevsl.com! This privacy policy explains how we collect, use, and protect the personal information of our customers, users, and visitors. Thedevsl.com provides IT services, including website and mobile application development.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
                We collect the following types of information:
                <ul>
                    <li><strong>Personal Information:</strong> When you request a quote, sign up for services, or contact us, we may collect personal details such as your name, email address, phone number, and any other information you voluntarily provide.</li>
                    <li><strong>Usage Data:</strong> We may collect information about how our website is accessed and used, such as your IP address, browser type, the pages you visit, and the time and date of your visit.</li>
                    <li><strong>Cookies:</strong> Our website uses cookies to enhance your experience, track interactions, and gather analytics.</li>
                </ul>
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
                We use the information we collect for the following purposes:
                <ul>
                    <li>To provide and improve our services, including website and mobile application development.</li>
                    <li>To communicate with you regarding inquiries, projects, or other services you requested.</li>
                    <li>To maintain and improve the functionality of our website.</li>
                    <li>To comply with legal obligations and protect our legal rights.</li>
                </ul>
            </p>

            <h2>3. Data Security</h2>
            <p>
                We take the security of your personal data seriously and implement appropriate measures to safeguard it. However, please note that no method of transmitting or storing data electronically is 100% secure, and we cannot guarantee its absolute security.
            </p>

            <h2>4. Sharing of Information</h2>
            <p>
                We do not share your personal information with third parties except in the following situations:
                <ul>
                    <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website or delivering services to you.</li>
                    <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or in response to legal processes, such as a court order.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred to the new owners.</li>
                </ul>
            </p>

            <h2>5. Your Data Protection Rights</h2>
            <p>
                You have the right to:
                <ul>
                    <li>Access, update, or delete the personal information we hold about you.</li>
                    <li>Object to the processing of your personal data.</li>
                    <li>Request the transfer of your data to another service provider.</li>
                    <li>Withdraw consent at any time where we rely on your consent to process your information.</li>
                </ul>
                To exercise any of these rights, please contact us at [Insert Contact Information].
            </p>

            <h2>6. Data Retention</h2>
            <p>
                We will retain your personal data only as long as necessary to fulfill the purposes outlined in this privacy policy or as required by law. Once no longer needed, your data will be securely deleted or anonymized.
            </p>

            <h2>7. Links to Third-Party Sites</h2>
            <p>
                Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third-party site. We recommend reviewing their privacy policies as we are not responsible for their content or practices.
            </p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>
                We may update this privacy policy from time to time to reflect changes in our practices or for legal, technical, or regulatory reasons. Any changes will be posted on this page, and we encourage you to review it periodically.
            </p>

            <h2>9. Contact Us</h2>
            <p>
                If you have any questions about this privacy policy, please contact us at:
                <br />thedevsl@outlook.com.
                <br />0764247796
            </p>
        </div>
    );
};

export default PrivacyPolicy;
