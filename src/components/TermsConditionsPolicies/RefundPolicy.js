import React, { useEffect } from 'react';

const RefundPolicy = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Refund Policy</h1>
            <p>
                Thank you for purchasing from <strong>Thedevsl.com</strong>. We value your satisfaction and strive to provide you with the best online IT service experience possible. If, for any reason, you are not completely satisfied with our service, we are here to help.
            </p>

            <h2>Returns</h2>
            <p>
                We accept returns within <strong>2 days</strong> from the date of purchase.
            </p>

            <h2>Refunds</h2>
            <p>
                Once we receive your return and inspect the item, we will notify you of the status of your refund. If your return is approved, we will initiate a refund to your original method of payment. Please note that the refund amount will exclude service charges (Server cost + other add-ons) incurred after confirmation.
            </p>

            <h2>Exchanges / Revisions</h2>
            <p>
                If you would like to change or edit your product after delivery, please contact our customer support team within <strong>one day</strong> of delivery. We will provide you with further instructions on how to proceed with the revisions.
            </p>

            <h2>Non-Returnable Items</h2>
            <p>
                In the unfortunate event that you are not satisfied with your product, please contact us immediately. We will arrange for revisions or issue a refund, depending on your preference and product availability.
            </p>

            <h2>Processing Time</h2>
            <p>
                Refunds and exchanges will be processed within <strong>3-7 business days</strong> after we confirm the refund or revisions. Please note that it may take additional time for the refund to appear in your account, depending on your payment provider.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have any questions or concerns regarding our refund policy, please contact our customer support team. We are here to assist you and ensure your experience with us is enjoyable and hassle-free.
            </p>
        </div>
    );
};

export default RefundPolicy;
