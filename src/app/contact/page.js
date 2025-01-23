const ContactPage = () => {
  return (
    <div className="columns is-centered m-4">
        <div className="column is-5">
            <div className="card has-background-white-bis centrado">
                <div className="card-content">
                    <div className="centrado m-2">
                        <h1 className="has-text-grey-dark title is-3 m-2">Contacts</h1>
                        <p className="has-text-grey m-2">Email: <a href="mailto:chummi620@gmail.com">chummi620@gmail.com</a></p> 
                        <p className="has-text-grey m-2">Phone: <a href="mailto:chummi620@gmail.com">chummi620@gmail.com</a></p>
                    </div>
                    <div className="linea m-2">
                        <h1 className="has-text-grey-dark title is-3 m-2">Customer service hours</h1>
                        <p className="has-text-grey m-2">Monday to Friday: 9:00 am - 5:00 pm</p>
                        <p className="has-text-grey m-2">Saturday: 9:00 am - 1:00 pm</p>
                        <p className="has-text-grey m-2">Sunday: Closed</p>
                    </div>
                    <div cllasName="linea m-2">
                        <h1 className="has-text-grey-dark title is-3 m-2">Location Machine</h1>
                        <p className="has-text-grey m-2">Irvine, CA 92614</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContactPage;