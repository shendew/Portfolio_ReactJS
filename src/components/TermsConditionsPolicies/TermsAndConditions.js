import React, { useEffect } from 'react';

const TermsAndConditions = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Terms and Conditions</h1>
            <p><strong>Last updated: [Insert Date]</strong></p>
            <p>
                Welcome to Thedevsl.com! These Terms and Conditions outline the rules and regulations for the use of Thedevsl.com, 
                a platform offering IT services, including web development and mobile application development. By accessing and using our 
                website and services, you agree to comply with and be bound by the following terms.
            </p>

            <h2>1. Services Provided</h2>
            <p>
                Thedevsl.com offers a variety of IT services, including but not limited to:
                <ul style={{marginLeft:'4rem'}}>
                    <li>Website design and development</li>
                    <li>Mobile application development for iOS and Android</li>
                    <li>Maintenance and support for digital products</li>
                    <li>Other related IT consultancy services</li>
                </ul>
                All services will be provided as per the agreements made with the client, including timelines, pricing, and deliverables, 
                which will be confirmed upon the signing of a contract or acceptance of a project proposal.
            </p>

            <h2>2. Client Obligations</h2>
            <p style={{marginLeft:'4rem'}}>
                - You agree to provide all necessary information, materials, and access required for the successful completion of your project.<br />
                - You are responsible for ensuring that any content you provide (text, images, data, etc.) does not violate any copyright, 
                trademark, or other intellectual property rights.<br />
                - You agree to cooperate with our team, respond to inquiries, and review progress in a timely manner to avoid delays.
            </p>

            <h2>3. Project Scope and Changes</h2>
            <p style={{marginLeft:'4rem'}}>
                - The scope of the project will be clearly defined and agreed upon in a separate contract before the commencement of any work.<br />
                - Any changes or additional requests outside the agreed project scope may result in additional fees and an extended delivery timeline.<br />
                - Significant changes may require a new contract or the renegotiation of the existing one.
            </p>

            <h2>4. Payment Terms</h2>
            <p style={{marginLeft:'4rem'}}>
                - Payment terms, including pricing, milestones, and deadlines, will be outlined in a separate agreement or invoice.<br />
                - Thedevsl.com reserves the right to request a deposit before starting any project. Full payment is expected upon completion unless otherwise agreed in writing.<br />
                - All invoices must be paid within 2 days of receipt. Late payments may result in delays to the project or additional fees.
            </p>

            <h2>4. Confidentiality</h2>
            <p style={{marginLeft:'4rem'}}>
                Both parties agree to maintain confidentiality regarding all proprietary information and materials shared during the project. 
                This includes, but is not limited to, code, design elements, business strategies, and client data. Thedevsl.com will not share 
                your data with third parties without explicit consent, except as required by law.
            </p>

            <h2>6. Intellectual Property Rights</h2>
            <p style={{marginLeft:'4rem'}}>
                - Upon full payment, ownership of the deliverables will be transferred to the client, except for third-party components (e.g., plugins, libraries) 
                which may be subject to separate licensing agreements.<br />
                - Thedevsl.com retains the right to showcase non-confidential aspects of completed projects in its portfolio and marketing materials 
                unless otherwise agreed upon.
            </p>

            <h2>7. Termination</h2>
            <p style={{marginLeft:'4rem'}}>
                - Either party may terminate the agreement at any time by providing written notice. Any work completed up to the point of termination 
                will be invoiced and must be paid for by the client.<br />
                - In the event of termination, any advance payments may be forfeited, and Thedevsl.com reserves the right to cease all work immediately.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p style={{marginLeft:'4rem'}}>
                - Thedevsl.com will not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.<br />
                - Our total liability to you, for any reason, will be limited to the amount paid for the services in question.
            </p>

            <h2>9. Warranties and Disclaimers</h2>
            <p style={{marginLeft:'4rem'}}>
                - Thedevsl.com makes no warranties regarding the suitability of our services for any specific purpose.<br />
                - While we strive for perfection, we cannot guarantee that our services will be error-free, uninterrupted, or meet your expectations in every respect.
            </p>

            <h2>10. Force Majeure</h2>
            <p style={{marginLeft:'4rem'}}>
                Thedevsl.com will not be liable for delays or failures to perform any part of the service due to events beyond our reasonable control, 
                including but not limited to natural disasters, strikes, wars, or other unforeseen circumstances.
            </p>

            <h2>11. Amendments</h2>
            <p style={{marginLeft:'4rem'}}>
                Thedevsl.com reserves the right to amend these Terms and Conditions at any time. Any changes will be posted on our website, and continued use 
                of our services after such updates will constitute acceptance of the new terms.
            </p>

            <p style={{marginLeft:'4rem'}}>By using our services, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.</p>
            <p style={{marginLeft:'4rem'}}>If you have any questions or need further clarification, feel free to contact us at thedevsl@outlook.com.</p>
        </div>
    );
}

export default TermsAndConditions;
