import "./App.css";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BsBrowserSafari,BsPencil } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

function App() {
  return (
    <div id="root">
      <div class="Toastify"></div>
      <div class="dash-container">
        <div class="navbox">
          <div class="nav-hambar">
            <RxHamburgerMenu class="hamburgur" />
          </div>
          <div class="nav-brand">
            <img
              src="https://ik.imagekit.io/cipherschools/Cipherschools_192x192_peVdJkKAl.png?updatedAt=1641213187169"
              class="nav-logo"
              alt="cipherschools-logo"
            />
            <h1 class="nav-title">CipherSchools</h1>
          </div>
          <div class="nav-space-1"></div>
          <div style={{ position: "relative" }}>
            <div class="nav-link-left">
              <BsBrowserSafari class="browse-icon" />
              <span class="browse-title">Browse</span>
              <AiOutlineDown class="down-arrow" />
            </div>
          </div>
          <div class="nav-space-2"></div>
          <div class="nav-right">
            <div>
              <AiOutlineSearch
                class="nav-search-icon-hide"
                id="nav-search"
                title="Search"
              />
              <div class="nav-mobile-bar">
                <span class="nav-search">
                  <div class="search-box">
                    <AiOutlineSearch class="nav-search-icon-open" />
                    <div style={{ width: "100%" }}>
                      <input
                        type="search"
                        class="search-input-field"
                        placeholder="Search and Learn"
                        autocomplete="off"
                        spellcheck="false"
                      ></input>
                    </div>
                    <div>
                      <AiOutlineSearch
                        class="nav-search-icon"
                        aria-haspopup="true"
                      />
                    </div>
                  </div>
                  <button class="nav-search-btn">
                    <AiOutlineSearch
                      width="20"
                      height="20"
                      viewBox="0 0 10 11"
                      fill="none"
                    />
                  </button>
                </span>
              </div>
            </div>
            <div class="nav-notification" id="nav-notification">
              <div class="nav-notification-desk-path">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="nav-notification-icon"
                  title="Notification"
                >
                  …
                </svg>
              </div>
              <div class="nav-notification-mobile-path">
                <svg
                  width="15"
                  height="19"
                  fill="none"
                  viewBox="0 0 20 25"
                  xmlns="http://www.w3.org/2000/svg"
                  class="nav-notification-icon"
                ></svg>
              </div>
            </div>
            <div class="nav-avatar">
              <div
                class="MuiAvatar-root MuiAvatar-circular avatar"
                title="Het Patel"
              >
                <img
                  src="https://lh3.googleusercontent.com/a/AGNmyxY442JLswIjDQYJ2N92s3IkPhcx5TbziZEtjTzdsQ=s96-c"
                  class="MuiAvatar-img"
                ></img>
              </div>
            </div>
            <div class="watch-points-cont" id="nav-cipher-points">
              <div class="rpm-top" title="CipherPoint: 00"></div>
            </div>
            <div id="nav-mode" title="Change Theme" class>
              <div class="tb-cont">…</div>
            </div>
          </div>
        </div>
        <div class="jss10">
          {/* <div class="main-drawer">
            <div class="MuiDrawer-root MuiDrawer-docked jss12 jss14 side_drawer-closed">
              <div class="MuiPaper-root MuiDrawer-paper jss14 MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft MuiPaper-elevation0">
                <div class="MuiBox-root jss17 sidebar">
                  <ul class="MuiList-root sidebar-cont MuiList-padding">
                    <ul class="MuiList-root MuiList-padding">
                      <div
                        class="MuiButtonBase-root MuiListItem-root jss18 inactive MuiListItem-gutters MuiListItem-button"
                        tabindex="0"
                        role="button"
                        aria-disabled="false"
                      >
                        <div class="MuiListItemIcon-root ms-item-icon-container">
                          <div class="ms-item-icon">
                            <svg
                              width="21"
                              height="15"
                              viewBox="0 0 28 20"
                              fill="none"
                              class="hamburgur"
                              xmlns="http://www.w3.org/2000/svg"
                            ></svg>
                          </div>
                        </div>
                        <span class="MuiTouchRipple-root"></span>
                      </div>
                    </ul>
                    <ul class="MuiList-root MuiList-padding">
                      <div
                        class="MuiButtonBase-root MuiListItem-root jss18 inactive MuiListItem-gutters MuiListItem-button"
                        tabindex="0"
                        role="button"
                        aria-disabled="false"
                        id="msp-home"
                      ></div>
                    </ul>
                  </ul>
                  <div class="log-btn">
                    <li class="MuiListItem-root jss18 MuiListItem-gutters">
                      <div
                        class="MuiListItemIcon-root ms-item-icon-container"
                        title="Logout"
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 30 25"
                          fill="none"
                          xmlns="http: //www.w3.org/2000/svg"
                        ></svg>
                        <div class="ms-item-text">Logout</div>
                      </div>
                      <div class="MuiListItemText-root">
                        <span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displa yBlock">
                          <strong>Logout</strong>
                        </span>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <main class="jss16 main-container">
            <div class="jss15 contents-top"></div>
            <div classnmae="pf-container" id="pf-container">
              <div class="pf-user-box">
                <div class="pf-user-back">
                  <div class="pf-user-content">
                    <div class="pf-user-profile-box">
                      <div class="MuiAvatar-root MuiAvatar-circular pf-user-profile">
                        <img
                          alt="user-profile"
                          src="https://lh3.googleusercontent.com/a/AGNmyxY442JLswIjDQYJ2N92s3IkPhcx5TbziZEtjTzdsQ=s96-c"
                          class="MuiAvatar-img"
                        />
                      </div>
                      <div class="pf-user-profile-pencil">
                        <BsPencil
                          class="pf-profile-pencil-icon"
                        />
                      </div>
                    </div>
                    <div class="pf-user-details">
                      <div class="pf-user-detail-box">
                        <div id="pf-user-side">
                          <h2 class="pf-user-greeting">Hello,</h2>
                          <h1 class="pf-user-name">Het Patel</h1>
                          <h2 class="pf-user-email">hetp943@gmail.com</h2>
                        </div>
                        <div class="pf-right-side">
                          <div
                            class="pf-user-followers-count"
                            title="Followers"
                          >
                            <span>10</span> Followers
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pf-dashboard">
                <div class="jss20">
                  <main class="jss26">
                    <div class="jss25"></div>
                    <div class="mp-container">
                      <div class="mp-about-me-box">
                        <div class="mp-top-row">
                          <div class="mp-left-header">About me</div>
                          <div class="mp-right-header">Edit</div>
                        </div>
                        <div class="mp-input-box">
                          <textarea
                            class="mp-about-text"
                            placeholder="Add something about you."
                            rows="4"
                            disabled=""
                          ></textarea>
                        </div>
                      </div>
                      <div class="mp-underline"></div>
                      <div class="mp-achievement-box">
                        <div class="mp-top-row">
                          <div class="mp-left-header">
                            <span>Cipher Map</span>
                          </div>
                        </div>
                      </div>
                      <div class="mp-underline"></div>
                      <div class="mp-web-links-box">
                        <div class="mp-top-row">
                          <div class="mp-left-header">On the web</div>
                          <div class="mp-right-header">Edit</div>
                        </div>
                        <div class="mp-links-box">
                          <div class="mp-link">
                            <div class="mp-title">Linkedin</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <AiOutlineLinkedin class="linkedin" />
                              </span><input class="mp-link-text" placeholder="LinkedIn" disabled></input>
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">Github</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <AiFillGithub class="github" />
                              </span><input class="mp-link-text" placeholder="GitHub" disabled/>
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">Facebook</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <AiOutlineFacebook class="facebook" />
                              </span><input class="mp-link-text" placeholder="Facebook" disabled/>
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">Twitter</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <AiOutlineTwitter class="twitter" />
                              </span><input class="mp-link-text" placeholder="Twitter" disabled/>
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">Instagram</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <AiFillInstagram class="instagram" />
                              </span><input class="mp-link-text" placeholder="Instagram" disabled/>
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">Website</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <CgWebsite class="website" />
                              </span><input class="mp-link-text" placeholder="Your website" disabled/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mp-underline"></div>
                      <div class="mp-professional-box">
                        <div class="mp-top-row">
                          <div class="mp-left-header">
                            Professional Information
                          </div>
                          <div class="mp-right-header">Edit</div>
                        </div>
                        <div class="mp-prof-info-box">
                          <div class="mp-link">
                            <div class="mp-title">Highest education</div>
                            <div class="mp-input-link">
                              <span class="mp-link-text">Graduation</span>
                              <span style={{ flex: "1 1 0%;" }}></span>
                              <AiOutlineDown
                                width="10px"
                                class="open"
                                alt="bottom-arrow"
                              />
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">
                              What do you do currently?
                            </div>
                            <div class="mp-input-link">
                              <span class="mp-link-text">College Student</span>
                              <span style={{ flex: "1 1 0%" }}></span>
                              <AiOutlineDown
                                width="10px"
                                class="open"
                                alt="bottom-arrow"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mp-underline"></div>
                      <div class="mp-security-box">
                        <div class="mp-top-row">
                          <div class="mp-left-header">
                            Password &amp; Security
                          </div>
                          <div class="mp-right-header">Change</div>
                        </div>
                        <div class="mp-links-box">
                          <div class="mp-link">
                            <div class="mp-title">Password</div>
                            <div class="mp-input-link">
                              <input
                                type="password"
                                class="mp-link-text"
                                placeholder="password"
                                disabled=""
                                value=".................."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mp-underline"></div>
                      <div class="mp-security-box">
                        <div class="mp-top-row">
                          <div class="mp-left-header">Interests</div>
                          <div class="mp-right-header">Edit</div>
                        </div>
                        <div class="mp-interests-box"></div>
                      </div>
                    </div>
                  </main>
                  <div class="bottom-tabs-container">Remaining</div>
                </div>
              </div>
            </div>
          </main>
          <div>bottom tabs container</div>
        </div>
      </div>
    </div>
  );
}

export default App;
