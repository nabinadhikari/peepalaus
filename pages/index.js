export default function Home() {
  return (
    <>
      <header className="masthead" style={{height:'100%'}}>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                {/* <!-- Page heading--> */}
                <h2 className="mb-5">Peepal Aus</h2>
                <h1 className="mb-5">
                  Enter your email below to secure your early place
                </h1>
                <form
                  className="form-subscribe"
                  id="contactForm"
                >
                  <div className="row">
                    <div className="col">
                      <input
                        className="form-control form-control-lg"
                        id="emailAddress"
                        type="email"
                        placeholder="Email Address"
                      />
                      <div
                        className="invalid-feedback text-white"
                      >
                        Email Address is required.
                      </div>
                      <div
                        className="invalid-feedback text-white"
                      >
                        Email Address Email is not valid.
                      </div>
                    </div>
                    <div className="col-auto">
                      <button
                        className="btn btn-primary btn-lg"
                        id="submitButton"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
