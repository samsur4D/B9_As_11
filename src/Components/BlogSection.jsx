import React, { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

const BlogSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && (
        <div className="sweet-loading flex items-center justify-center h-96">
          <RiseLoader color={"#F2AE02"} size={20} />
        </div>
      )}

      {!loading && (
        <div className="blog-section">
          <h2 className="section-title text-4xl font-bold text-green-800">
            Understanding Access Tokens and Refresh Tokens in OAuth 2.0
          </h2>
          <p className="section-description mb-5 text-2xl">
            An access token and a refresh token are both mechanisms used in
            authentication protocols, typically in OAuth 2.0, to facilitate
            secure access to protected resources on a server.
          </p>

          <div className="token-details">
            <div className="token-detail">
              <img
                data-aos="fade-right"
                className="detail-image lg:ml-96  lg:w-2/5"
                src="https://i.ibb.co/J3bwkhp/maxresdefault-1.jpg"
                alt="Access Token"
              />
              <div className="flex flex-col justify-end">
                <h3 className="detail-title text-3xl font-bold mb-3 mt-5">
                  Access Token
                </h3>
                <p
                  data-aos="zoom-in-up"
                  className="detail-description text-2xl mb-5"
                >
                  An access token is a credential that represents the
                  authorization granted to the client application to access
                  specific resources on behalf of the user. It's usually a
                  string that identifies the user, the client application, and
                  the duration of the access permissions. Access tokens are
                  short-lived and expire after a certain period to enhance
                  security.
                </p>
              </div>
            </div>

            <div className="token-detail">
              <img
                data-aos="fade-left"
                className="detail-image lg:ml-96 lg:w-2/5"
                src="https://i.ibb.co/sKZX12p/1-Elfza-IMNdlg-Zsn-CBWYCHm-Q.png"
                alt="Refresh Token"
              />
              <h3 className="detail-title text-3xl font-bold mb-3 mt-5">
                Refresh Token
              </h3>
              <p className="detail-description text-2xl">
                A refresh token is a credential used to obtain a new access
                token when the current one expires. Unlike access tokens,
                refresh tokens are typically long-lived and can be used to
                request new access tokens without requiring the user to
                re-authenticate. Refresh tokens are securely stored by the
                client application and are used only to obtain new access
                tokens.
              </p>
            </div>
          </div>
          <img
            data-aos="fade-right"
            className="lg:w-2/5 lg:ml-96 mt-5"
            src="https://i.ytimg.com/vi/GVgM_HdSrRw/maxresdefault.jpg"
            alt=""
          />
          <h3 className="section-subtitle text-3xl font-bold mt-5 mb-3">
            How They Work Together:
          </h3>
          <ol data-aos="zoom-in-up" className="section-list">
            <li className="text-2xl">
              When a user authenticates with a server, the server provides both
              an access token and a refresh token to the client application.
            </li>
            <li className="text-2xl">
              The client application includes the access token in each request
              to access protected resources on the server.
            </li>
            <li className="text-2xl">
              When the access token expires, the client application uses the
              refresh token to request a new access token from the
              authentication server without requiring the user to log in again.
            </li>
            <li>
              The authentication server verifies the refresh token and issues a
              new access token if the refresh token is valid.
            </li>
          </ol>

          <h3 className="section-subtitle text-3xl font-bold mt-5 mb-3">
            Where to Store Them on the Client Side:
          </h3>

          <div data-aos="zoom-in-up">
            <p className="section-description text-2xl mb-3">
              <strong>Access Token:</strong> Access tokens should be stored
              securely to prevent unauthorized access. They are typically stored
              in memory, such as in variables or in a session storage mechanism
              provided by the client framework (e.g., sessionStorage in web
              browsers). Storing them in memory helps minimize the risk of
              exposure to malicious actors.
            </p>
            <p className="section-description text-2xl mb-3">
              <strong>Refresh Token:</strong> Refresh tokens are more sensitive
              because they have a longer lifespan and can be used to obtain new
              access tokens. They should be stored securely and are often stored
              in more persistent storage mechanisms, such as secure HTTP cookies
              (with appropriate flags set, like Secure and HttpOnly) or secure
              storage mechanisms provided by the client platform (e.g., Keychain
              or SharedPreferences on mobile devices). This helps prevent their
              exposure to potential attackers.
            </p>
            <p className="section-description text-2xl text-yellow-600">
              It's crucial to follow security best practices when storing tokens
              on the client side to minimize the risk of unauthorized access or
              token leakage.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogSection;
