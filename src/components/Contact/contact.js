import React from 'react';
import Title from '../PageInfo/Title'
export default function contact () {
  return (
    <>
      <section className="py-5">
        <div className="row m-0">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="contacts" center />
            <form className="mt-5" action="https://formspree.io/f/mnqobjjk" method="POST">
              {/* Full Name */ }
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="John Doe"
                  required
                />
              </div>
              {/* Email */ }
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="johndoe@techstore.com"
                  required
                />
              </div>

              {/* Subject */ }
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject Here"
                  required
                />
              </div>
              {/* Message */ }
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Hello World! (Message Here)v"
                  required
                ></textarea>
              </div>
              <div className="form-group mt-3">
                <input type="submit" className="form-control main-link" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
