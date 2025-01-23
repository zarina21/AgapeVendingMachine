import { Kanit } from "next/font/google";
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"], // Puedes incluir más estilos si es necesario
});

const TermsAndConditionsPage = () => {
  return (
    <div className="m-4">
        <h1 className={kanit.className}><p className="titulo has-text-primary">Terms and conditions</p></h1>
        <div className="ml-6">
            <div id="VendorMachineDamagePolicy">
                <h1 className={kanit.className}><strong><p className="subtitulo has-text-grey">- Vending Machine Property Damage Policy</p></strong></h1>
                <p>At Agape Vending Machine, we strive to provide quality service and maintain our machines in excellent condition. To ensure the safety and satisfaction of all users, we have established the following policies regarding damage to our vending machines:</p>
                <div className="ml-6">
                    <p className="m-2"><strong className="has-text-grey">Responsible Use:</strong> Users must operate the vending machines responsibly. Any improper use, such as hitting, forcing, or attempting to tamper with the machines inappropriately, may cause damage and will be the user&apos;s responsibility.</p>
                    <p className="m-2"><strong className="has-text-grey">Accidental Damage:</strong>If accidental damage occurs during normal use of the machine, we ask the user to notify us immediately so that we can assess the situation and take the necessary steps to repair the machine.</p>
                    <p className="m-2"><strong className="has-text-grey">Intentional Damage:</strong>Any damage caused intentionally or due to vandalism will be considered an illegal act. The responsible party will be held liable for the cost of repairing or replacing the machine, and the incident will be reported to the appropriate authorities if deemed necessary.</p>
                    <p className="m-2"><strong className="has-text-grey">Liability for Damage:</strong>If a user is found to have caused damage to the machine, they will be responsible for covering the costs associated with repairing or replacing the damaged parts, as well as any other costs arising from the damage.</p>
                    <p className="m-2"><strong className="has-text-grey">Damage Notification:</strong>In the event that the machine malfunctions or is damaged, we ask users to report the issue immediately to our support team via the contact channels provided on the website or the machine.</p>
                    <p className="m-2"><strong className="has-text-grey">Security and Surveillance:</strong>Our machines are equipped with security monitoring systems to prevent misuse or damage. We take the safety of our products and our customers&apos; property seriously, and we will take all necessary measures to protect them.</p>
                    <p className="m-2"><strong className="has-text-grey">Limitation of Liability:</strong>Agape Vending Machine is not responsible for personal injury or property damage caused by improper use of our machines. Use of our vending machines is at the user&apos;s own risk.</p>
                    <div className="linea m-3">
                        <h1 className={kanit.className}><strong><p className="subtitulo has-text-grey">Contact for Reporting Damage</p></strong></h1>
                        <p className="m-2">If damage has occurred or you need assistance, please feel free to contact us at:</p>
                            <div>
                            <p className="has-text-grey">Email:</p>
                            <a className="has-text-Link" href="mailto:mailto:chummi620@gmail.com">chummi620@gmail.com</a>
                        </div>
                        <div>
                            <p className="has-text-grey">phone:</p>
                            <a href="tel:+1(949) 566-4664">+1(949) 566-4664</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="VendorMachineFoodDrinkPolicy">
                <h1 className={kanit.className}><strong><p className="subtitulo has-text-grey">- Vending Machine Food & Drink Policy</p></strong></h1>
                <p>At Agape Vending Machine, we are committed to providing high-quality food and drink products in our vending machines. To ensure the safety, satisfaction, and well-being of all users, we have established the following policies regarding the food and beverages available in our machines:</p>
                <div className="ml-6">
                    <p className="m-2"><strong className="has-text-grey">Product Quality:</strong> We guarantee that all food and drink products available in our vending machines are fresh, safe, and stored under optimal conditions. Any issues related to product quality should be reported immediately to our customer support team.</p>
                    <p className="m-2"><strong className="has-text-grey">Allergies and Dietary Restrictions:</strong> Users are encouraged to check the labels on products for potential allergens. We do not guarantee that the food and drinks are free of allergens. Please consume products at your own discretion, especially if you have known food allergies or dietary restrictions.</p>
                    <p className="m-2"><strong className="has-text-grey">Expiration Dates:</strong> All products are regularly checked for expiration dates to ensure that only safe, in-date products are available for purchase. If you notice a product that has passed its expiration date, please report it immediately.</p>
                    <p className="m-2"><strong className="has-text-grey">Product Availability:</strong> While we strive to maintain consistent stock, there may be occasional outages of certain items. We recommend users check the product availability on the machine or contact customer support for alternative options.</p>
                    <p className="m-2"><strong className="has-text-grey">Refund Policy:</strong> In the event that a product is faulty, expired, or the machine malfunctions, users may request a refund through the support channels listed below. Please keep your receipt or transaction information for processing the refund.</p>
                    <p className="m-2"><strong className="has-text-grey">Safe Consumption:</strong> Users are responsible for ensuring the food and drink are consumed within safe conditions. **Agape Vending Machine** is not responsible for any health issues caused by improper storage, handling, or consumption of products.</p>
                    <p className="m-2"><strong className="has-text-grey">Limitation of Liability:</strong> Agape Vending Machine is not liable for any adverse health effects or injuries caused by consuming any of the food or drink products offered in our vending machines. Use at your own risk.</p>
                    <div className="linea m-3">
                        <h1 className={kanit.className}><strong><p className="subtitulo has-text-grey">Contact for Food & Drink Issues</p></strong></h1>
                        <p className="m-2">If you encounter any issues with the food or drink products, please feel free to contact us at:</p>
                        <div>
                            <p className="has-text-grey">Email:</p>
                            <a className="has-text-Link" href="mailto:chummi620@gmail.com">chummi620@gmail.com</a>
                        </div>
                        <div>
                            <p className="has-text-grey">Phone:</p>
                            <a href="tel:+1(949) 566-4664">+1(949) 566-4664</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default TermsAndConditionsPage;