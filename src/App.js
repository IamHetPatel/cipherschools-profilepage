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
import { BsBrowserSafari, BsPencil } from "react-icons/bs";
import { RxHamburgerMenu,RxCross1 } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";

function App() {
  return (
    <div id="root">
      <div class="Toastify"></div>
      {/* <div class="jss5" tabindex="-1">
        <div class="sm-right-side">
          <div class="sm-header">
            <span>Signin</span>
            <span style={{cursor: "pointer;"}}>
              <RxCross1
              />
            </span>
          </div>
          <div class="auth-content">
            <div class="auth-content-container">
              <div class="auth-info-area">
                <div class="auth-logo">
                  <img
                    src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                    class="nav-logo"
                    alt="cipherschools-logo"
                  ></img>
                  <h1 class="nav-title">CipherSchools</h1>
                </div>
                <div class="auth-welcome">
                  <h2>Hey, Welcome!</h2>
                  <p>Please provide your email and password to signin</p>
                </div>
              </div>
              <div class="sm-form">
                <div class="sm-row">
                  <div class="sm-login-error">
                    <span></span>
                  </div>
                </div>
                <div class="sm-row">
                  <input
                    type="email"
                    class="sm-input-box"
                    placeholder="Email ID"
                    value=""
                  />
                </div>
                <div class="sm-row">
                  <div class="sm-input-password">
                    <input
                      id="pass"
                      type="password"
                      class="sm-input-box"
                      placeholder="Password"
                      value=""
                    />
                    <img
                      src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg"
                      alt="eye"
                      class="sm-eye-icon"
                    ></img>
                  </div>
                </div>
                <div class="sm-extra-row">
                  <div class="sm-forget-password">Forgot Password ?</div>
                </div>
                <button class="sm-login-btn sm-disabled" disabled="">
                  <span>Signin</span>
                </button>
                <div class="sm-bottom-row">
                  <div class="sm-not-account-text">Don't have an account ?</div>
                  <span>Get Started</span>
                </div>
              </div>
              <div class="sm-saperator">
                <span>OR</span>
              </div>
              <div class="sm-google-login">
                <div class="S9gUrf-YoZ4jf" style={{position: "relative;"}}>
                  <div></div>
                  <iframe
                    src="https://accounts.google.com/gsi/button?theme=outline&amp;size=large&amp;width=300&amp;text=Continue%20with%20Google&amp;client_id=49437268356-qg3si5dd9plsig6s9afjbnh1pf5bet30.apps.googleusercontent.com&amp;iframe_id=gsi_816784_91047&amp;as=ks8%2BwYpu13XNChYaALgfOg"
                    id="gsi_816784_91047"
                    title="Sign in with Google Button"
                    style={{display: 'block', position: 'relative;', top: '0px;', left: '0px;', height: '44px;',width: '320px;',border: '0px;', margin: '-2px -10px;'}}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
                <IoMdNotificationsOutline class="nav-notification-icon" />
              </div>
              <div class="nav-notification-mobile-path">
                <IoMdNotificationsOutline class="nav-notification-icon" />
              </div>
            </div>
            <div class="nav-avatar">
              <div
                class="MuiAvatar-root MuiAvatar-circular avatar"
                title="Het Patel"
              >
                <img
                  src="https://lh3.googleusercontent.com/a/AGNmyxY442JLswIjDQYJ2N92s3IkPhcx5TbziZEtjTzdsQ=s96-c"
                  alt="pp"
                  class="MuiAvatar-img"
                ></img>
              </div>
            </div>
            <div class="watch-points-cont" id="nav-cipher-points">
              <div class="rpm-top" title="CipherPoint: 00">
                <img
                  src="https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg"
                  class="rpm-watchpoint"
                  alt="watchpoint-icon"
                ></img>
                <div class="rpm-point-title">
                  <span>0</span>
                </div>
              </div>
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
                        <BsPencil class="pf-profile-pencil-icon" />
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
                        <div>
                          <svg
                            class="react-calendar-heatmap"
                            viewBox="0 0 612 90"
                          >
                            <g
                              transform="translate(30, 0)"
                              class="react-calendar-heatmap-month-labels"
                            >
                              <text
                                x="11"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                May
                              </text>
                              <text
                                x="66"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Jun
                              </text>
                              <text
                                x="110"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Jul
                              </text>
                              <text
                                x="165"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Aug
                              </text>
                              <text
                                x="209"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Sep
                              </text>
                              <text
                                x="253"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Oct
                              </text>
                              <text
                                x="308"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Nov
                              </text>
                              <text
                                x="352"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Dec
                              </text>
                              <text
                                x="396"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Jan
                              </text>
                              <text
                                x="451"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Feb
                              </text>
                              <text
                                x="495"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Mar
                              </text>
                              <text
                                x="539"
                                y="10"
                                class="react-calendar-heatmap-month-label"
                              >
                                Apr
                              </text>
                            </g>
                            <g
                              transform="translate(30, 14)"
                              class="react-calendar-heatmap-all-weeks"
                            >
                              <g
                                transform="translate(0, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Apr 19, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Apr 20, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Apr 21, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Apr 22, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Apr 23, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(11, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Sunday, Apr 24, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Apr 25, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Apr 26, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Apr 27, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Thursday, Apr 28, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Apr 29, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Apr 30, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(22, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, May 1, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, May 2, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, May 3, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, May 4, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, May 5, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, May 6, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, May 7, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(33, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, May 8, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, May 9, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, May 10, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, May 11, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, May 12, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, May 13, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, May 14, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(44, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Sunday, May 15, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, May 16, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, May 17, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, May 18, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Thursday, May 19, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, May 20, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, May 21, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(55, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, May 22, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, May 23, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, May 24, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, May 25, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, May 26, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, May 27, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, May 28, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(66, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, May 29, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, May 30, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, May 31, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Jun 1, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Thursday, Jun 2, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Jun 3, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jun 4, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(77, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jun 5, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Jun 6, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Jun 7, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Jun 8, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jun 9, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Jun 10, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jun 11, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(88, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jun 12, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Jun 13, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Jun 14, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Jun 15, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jun 16, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Jun 17, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jun 18, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(99, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jun 19, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jun 20, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Jun 21, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Jun 22, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jun 23, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Jun 24, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jun 25, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(110, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jun 26, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jun 27, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Jun 28, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Jun 29, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jun 30, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Jul 1, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jul 2, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(121, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jul 3, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jul 4, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Jul 5, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Jul 6, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jul 7, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Jul 8, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jul 9, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(132, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jul 10, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jul 11, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Jul 12, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Jul 13, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Thursday, Jul 14, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Jul 15, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Saturday, Jul 16, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(143, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jul 17, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jul 18, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Jul 19, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Jul 20, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jul 21, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Jul 22, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jul 23, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(154, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jul 24, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jul 25, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Jul 26, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Jul 27, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jul 28, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Jul 29, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jul 30, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(165, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Sunday, Jul 31, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Monday, Aug 1, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Tuesday, Aug 2, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Wednesday, Aug 3, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Thursday, Aug 4, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Friday, Aug 5, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Saturday, Aug 6, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(176, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Sunday, Aug 7, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Monday, Aug 8, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Tuesday, Aug 9, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Wednesday, Aug 10, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Thursday, Aug 11, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Friday, Aug 12, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-1"
                                  data-tip="0 Cipher Points on Saturday, Aug 13, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(187, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Aug 14, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Aug 15, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Aug 16, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Aug 17, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Thursday, Aug 18, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Aug 19, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Aug 20, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(198, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Aug 21, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Aug 22, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Aug 23, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Aug 24, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Aug 25, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Aug 26, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Aug 27, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(209, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Aug 28, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Aug 29, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Aug 30, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Aug 31, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Sep 1, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Sep 2, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Sep 3, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(220, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Sep 4, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Sep 5, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Sep 6, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Sep 7, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Sep 8, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Sep 9, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Sep 10, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(231, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Sep 11, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Sep 12, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Sep 13, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Sep 14, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Thursday, Sep 15, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Sep 16, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Sep 17, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(242, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Sep 18, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Sep 19, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Sep 20, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Sep 21, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Sep 22, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Sep 23, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Sep 24, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(253, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Sep 25, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Sep 26, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Sep 27, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Sep 28, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Thursday, Sep 29, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Sep 30, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Oct 1, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(264, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Oct 2, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Oct 3, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Oct 4, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Oct 5, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Oct 6, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Oct 7, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Oct 8, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(275, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Oct 9, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Oct 10, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Oct 11, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Oct 12, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Oct 13, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Oct 14, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Oct 15, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(286, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Oct 16, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Oct 17, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Oct 18, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Oct 19, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Oct 20, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Oct 21, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Oct 22, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(297, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Oct 23, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Oct 24, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Oct 25, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Oct 26, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Thursday, Oct 27, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Oct 28, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Oct 29, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(308, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Oct 30, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Oct 31, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Nov 1, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Nov 2, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Nov 3, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Nov 4, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Nov 5, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(319, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Nov 6, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Nov 7, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Nov 8, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Nov 9, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Nov 10, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Nov 11, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Nov 12, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(330, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Nov 13, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Nov 14, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Nov 15, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Nov 16, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Nov 17, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Nov 18, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Nov 19, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(341, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Nov 20, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Nov 21, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Nov 22, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Nov 23, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Thursday, Nov 24, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Nov 25, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Nov 26, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(352, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Nov 27, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Nov 28, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Nov 29, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Nov 30, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Dec 1, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Dec 2, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Dec 3, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(363, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Dec 4, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Dec 5, 2022"
                                  currentItem=""
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Dec 6, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Dec 7, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Dec 8, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Dec 9, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Dec 10, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(374, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Dec 11, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Dec 12, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Dec 13, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Dec 14, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Dec 15, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Dec 16, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Dec 17, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(385, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Dec 18, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Monday, Dec 19, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Tuesday, Dec 20, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Wednesday, Dec 21, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Thursday, Dec 22, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Dec 23, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Dec 24, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(396, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Dec 25, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Dec 26, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Dec 27, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Dec 28, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Dec 29, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Dec 30, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Dec 31, 2022"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(407, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jan 1, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jan 2, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Jan 3, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Jan 4, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jan 5, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Jan 6, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jan 7, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(418, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jan 8, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jan 9, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Jan 10, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Jan 11, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jan 12, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-4"
                                  data-tip="0 Cipher Points on Friday, Jan 13, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jan 14, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(429, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jan 15, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jan 16, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Jan 17, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Jan 18, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jan 19, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Jan 20, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jan 21, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(440, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jan 22, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jan 23, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Jan 24, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Jan 25, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Jan 26, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Jan 27, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Jan 28, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(451, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Jan 29, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Jan 30, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Jan 31, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Feb 1, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Feb 2, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Feb 3, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Feb 4, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(462, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Feb 5, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Feb 6, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Feb 7, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Feb 8, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Feb 9, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Feb 10, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Feb 11, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(473, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Feb 12, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Feb 13, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Feb 14, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Feb 15, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Feb 16, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Feb 17, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Feb 18, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(484, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Feb 19, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Feb 20, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Feb 21, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Feb 22, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Feb 23, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Feb 24, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Feb 25, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(495, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Feb 26, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Feb 27, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Feb 28, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Mar 1, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Mar 2, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Mar 3, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Mar 4, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(506, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Mar 5, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Mar 6, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Mar 7, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Mar 8, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Mar 9, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Mar 10, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Mar 11, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(517, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Mar 12, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Mar 13, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Mar 14, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Mar 15, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Mar 16, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Mar 17, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Mar 18, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(528, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Mar 19, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Mar 20, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Mar 21, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Mar 22, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Mar 23, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Mar 24, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Mar 25, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(539, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Mar 26, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Mar 27, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Mar 28, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Mar 29, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Mar 30, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Mar 31, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Apr 1, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(550, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Apr 2, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Apr 3, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Apr 4, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Apr 5, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Apr 6, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Apr 7, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Apr 8, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(561, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Apr 9, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Apr 10, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Apr 11, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Apr 12, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Apr 13, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="55"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Friday, Apr 14, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="66"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Saturday, Apr 15, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                              <g
                                transform="translate(572, 0)"
                                class="react-calendar-heatmap-week"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="0"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Sunday, Apr 16, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="11"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Monday, Apr 17, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="22"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Tuesday, Apr 18, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="33"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Wednesday, Apr 19, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="0"
                                  y="44"
                                  class="color-cs-0"
                                  data-tip="0 Cipher Points on Thursday, Apr 20, 2023"
                                  currentItem="false"
                                >
                                  <title></title>
                                </rect>
                              </g>
                            </g>
                            <g
                              transform="translate(10, 14)"
                              class="react-calendar-heatmap-weekday-labels"
                            >
                              <text
                                x="0"
                                y="21"
                                class=" react-calendar-heatmap-weekday-label"
                              >
                                Mon
                              </text>
                              <text
                                x="0"
                                y="43"
                                class=" react-calendar-heatmap-weekday-label"
                              >
                                Wed
                              </text>
                              <text
                                x="0"
                                y="65"
                                class=" react-calendar-heatmap-weekday-label"
                              >
                                Fri
                              </text>
                            </g>
                          </svg>
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
                              </span>
                              <input
                                class="mp-link-text"
                                placeholder="LinkedIn"
                                disabled
                              ></input>
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">Github</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <AiFillGithub class="github" />
                              </span>
                              <input
                                class="mp-link-text"
                                placeholder="GitHub"
                                disabled
                              />
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">Facebook</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <AiOutlineFacebook class="facebook" />
                              </span>
                              <input
                                class="mp-link-text"
                                placeholder="Facebook"
                                disabled
                              />
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">Twitter</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <AiOutlineTwitter class="twitter" />
                              </span>
                              <input
                                class="mp-link-text"
                                placeholder="Twitter"
                                disabled
                              />
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">Instagram</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <AiFillInstagram class="instagram" />
                              </span>
                              <input
                                class="mp-link-text"
                                placeholder="Instagram"
                                disabled
                              />
                            </div>
                          </div>
                          <div class="mp-link">
                            <div class="mp-title">Website</div>
                            <div class="mp-input-link">
                              <span class="mp-link-icon">
                                <CgWebsite class="website" />
                              </span>
                              <input
                                class="mp-link-text"
                                placeholder="Your website"
                                disabled
                              />
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
                  {/* <span class="profile-sidebar">
                    <div class="MuiDrawer-root MuiDrawer-docked jss22 jss23 opened">
                      <div class="MuiPaper-root MuiDrawer-paper jss23 MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight MuiPaper-elevation0">
                        <div class="right-ham-box close" title="Collapse">
                          <svg width="12" height="14" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="close"></svg>
                          </div>
                          <div class="MuiBox-root jss28 pf-sidebar">
                             */}
                </div>
              </div>
            </div>
          </main>
          <div class="bottom-tabs-container">
            <div
              class="up-menu"
              style={{
                visibility: "hidden",
                transform: "translateY(173px) translateY(283px)",
              }}
              container="[object HTMLDivElement]"
            >
              <div
                class="MuiButtonBase-root MuiListItem-root jss18 MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="button"
                aria-disabled="false"
                style={{ color: "var(--heading)" }}
              >
                <div
                  class="MuiListItemIcon-root"
                  style={{
                    display: "flex;",
                    flexDirection: "column;",
                    justifyContent: "center",
                    lineHeight: "1",
                  }}
                >
                  <div class="ms-item-icon">
                    <svg
                      width="24"
                      height="27"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sidebar-icon"
                    ></svg>
                  </div>
                </div>
                <div class="MuiListItemText-root">
                  <span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                    <strong>Dashboard</strong>
                  </span>
                </div>
                <span class="MuiTouchRipple-root"></span>
              </div>
              <div
                class="MuiButtonBase-root MuiListItem-root jss18 MuiListItem-gutters MuiListItem-button Mui-selected jss19"
                tabindex="0"
                role="button"
                aria-disabled="false"
                style={{ color: "var(--brand-color)" }}
              >
                <div
                  class="MuiListItemIcon-root"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    lineHeight: "1",
                  }}
                >
                  <div class="ms-item-icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sidebar-icon"
                    ></svg>
                  </div>
                </div>
                <div class="MuiListItemText-root">
                  <span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                    <strong>Enrolled Courses</strong>
                  </span>
                </div>
                <span class="MuiTouchRipple-root"></span>
              </div>
              <div
                class="MuiButtonBase-root MuiListItem-root jss18 MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="button"
                aria-disabled="false"
                style={{ color: "var(--heading)" }}
              >
                <div
                  class="MuiListItemIcon-root"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    lineHeight: "1",
                  }}
                >
                  <div class="ms-item-icon">
                    <svg
                      width="28"
                      height="25"
                      viewBox="0 0 28 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sidebar-icon"
                    ></svg>
                  </div>
                </div>
                <div class="MuiListItemText-root">
                  <span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                    <strong>Following</strong>
                  </span>
                </div>
                <span class="MuiTouchRipple-root"></span>
              </div>
              <div
                class="MuiButtonBase-root MuiListItem-root jss18 MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="button"
                aria-disabled="false"
                style={{ color: "var(--heading)" }}
              >
                <div
                  class="MuiListItemIcon-root"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    lineHeight: "1",
                  }}
                >
                  <div class="ms-item-icon">
                    <svg
                      width="22"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="c-logo"
                    ></svg>
                  </div>
                </div>
                <div class="MuiListItemText-root">
                  <span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                    <strong>My Cipher Point</strong>
                  </span>
                </div>
                <span class="MuiTouchRipple-root"></span>
              </div>
              <div
                class="MuiButtonBase-root MuiListItem-root jss18 MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="button"
                aria-disabled="false"
                style={{ color: "var(--heading)" }}
              >
                <div
                  class="MuiListItemIcon-root"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    lineHeight: "1",
                  }}
                >
                  <div class="ms-item-icon">
                    <svg
                      width="24"
                      height="27"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sidebar-icon"
                    ></svg>
                  </div>
                </div>
                <div class="MuiListItemText-root">
                  <span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                    <strong>Wishlist</strong>
                  </span>
                </div>
                <span class="MuiTouchRipple-root"></span>
              </div>
              <div
                class="MuiButtonBase-root MuiListItem-root jss18 MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="button"
                aria-disabled="false"
                style={{ color: "var(--heading)" }}
              >
                <div
                  class="MuiListItemIcon-root"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    lineHeight: "1",
                  }}
                >
                  <div class="ms-item-icon">
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sidebar-icon"
                    ></svg>
                  </div>
                </div>
                <div class="MuiListItemText-root">
                  <span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                    <strong>Liked Videos</strong>
                  </span>
                </div>
                <span class="MuiTouchRipple-root"></span>
              </div>
              <li class="MuiListItem-root jss18 MuiListItem-gutters">
                <div
                  class="MuiListItemIcon-root"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    lineHeight: "1",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 30 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                </div>
                <div
                  class="MuiListItemText-root"
                  style={{ color: "var(--heading)" }}
                >
                  <span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                    <strong>Logout</strong>
                  </span>
                </div>
              </li>
            </div>
            <ul class="MuiList-root MuiList-padding">
              <div
                class="MuiButtonBase-root MuiListItem-root jss18 inactive MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="button"
                aria-disabled="false"
              >
                <div class="MuiListItemIcon-root sidebar-list-item-icon">
                  <div class="ms-item-icon">
                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sidebar-icon"
                    ></svg>
                  </div>
                  <div class="ms-item-text">Home</div>
                </div>
                <span class="MuiTouchRipple-root"></span>
              </div>
              <div
                class="MuiButtonBase-root MuiListItem-root jss18 inactive MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="button"
                aria-disabled="false"
              >
                <div class="MuiListItemIcon-root sidebar-list-item-icon">
                  <div class="ms-item-icon">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sidebar-icon"
                    ></svg>
                  </div>
                  <div class="ms-item-text">Courses</div>
                </div>
                <span class="MuiTouchRipple-root"></span>
              </div>
              <div
                class="MuiButtonBase-root MuiListItem-root jss18 inactive MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="button"
                aria-disabled="false"
              >
                <div class="MuiListItemIcon-root sidebar-list-item-icon">
                  <div class="ms-item-icon">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sidebar-icon"
                    ></svg>
                  </div>
                  <div class="ms-item-text">Trending</div>
                </div>
                <span class="MuiTouchRipple-root"></span>
              </div>
              <div
                class="MuiButtonBase-root MuiListItem-root jss18 MuiListItem-gutters MuiListItem-button Mui-selected jss19"
                tabindex="0"
                role="button"
                aria-disabled="false"
              >
                <div class="MuiListItemIcon-root sidebar-list-item-icon">
                  <div class="ms-item-icon">
                    <svg
                      width="15"
                      height="27"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </div>
                  <div class="ms-item-text">My Profile</div>
                </div>
                <span class="MuiTouchRipple-root"></span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
