
import "./App.css";
import { AiOutlineDown,AiOutlineSearch } from 'react-icons/ai';
import { BsBrowserSafari } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';

function App() {
  return (
    <div id="root">
      <div class="Toastify"></div>
      <div class="dash-container">
        <div class="navbox">
          <div class="nav-hambar">
            <RxHamburgerMenu
              class="hamburgur"
            />
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
          <div style={{position: 'relative'}}>
            <div class="nav-link-left">
              <BsBrowserSafari
                class="browse-icon"
                />
              <span class="browse-title">Browse</span>
              <AiOutlineDown
                class="down-arrow"
              />
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
                    <AiOutlineSearch
                      class="nav-search-icon-open"
                    />
                    <div style={{width: '100%'}}>
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
              
            </div>
            <div class="nav-avatar">…</div>
            <div class="watch-points-cont" id="nav-cipher-points">
              ...
            </div>
            <div id="nav-mode" title="Change Theme" class>
              …
            </div>
          </div>
        </div>
        <div class="jss10">…</div>
      </div>
    </div>
  );
}

export default App;
