"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { color } from "../../../const/style";
import Item from "./Dropdown/Item";

const StyledHeader = styled.div`
  height: 100%;
  header {
    padding: 10px 10px;
    display: flex;
    img {
      border-radius: 50%;
    }
    .accountIcon {
      cursor: pointer;
    }
    .siteLogo {
      margin: 0 auto;
    }
  }
  .menuWrapper {
    position: absolute;

    .menu {
      position: absolute;
      opacity: 0;
      top: 0;

      &.open {
        background: #fff;
        left: -280px;
        top: -55px;
        height: auto;
        width: 280px;
        z-index: 100;
        opacity: 1;
        transform: translateX(280px);
        transition: transform 0.3s;
      }

      .menuHeader {
        padding: 20px;
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
      }
      .menuTitle {
        font-weight: 900;
      }
      .menuClose {
        border: none;
        background: none;
        font-weight: bold;
        font-size: 1.25em;
      }
      .menuAccountInfo {
        padding: 20px;
      }
      .menuAccountIcon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & img {
          border-radius: 50%;
        }
      }
      .menuAccountName {
        font-weight: bold;
      }
      .menuAccountId {
        font-size: 14px;
      }
      .menuAccountFollow {
        margin-top: 10px;
        color: #000;
        font-size: 14px;
        a + a {
          margin-left: 10px;
        }
        span.amount {
          padding-right: 5px;
          font-weight: bolder;
        }
      }
      .menuItem a {
        display: flex;
        align-items: center;
        padding: 15px;
        span {
          margin-left: 20px;
          font-weight: 900;
          font-size: 1.25em;
        }
      }
      .menuListEnd {
        margin: 0 15px;
        border-bottom: 1px solid #ddd;
      }
      .dropdownList {
      }
      .dropdownItem {
        font-size: 16px;
        font-weight: bold;
      }
      .dropdownText {
        padding: 12px 15px;
        position: relative;
        width: 100%;
        border: none;
        background: none;
        text-align: left;
        &:after {
          position: absolute;
          content: "";
          top: 18px;
          right: 18px;
          display: block;
          width: 10px;
          height: 10px;
          border-right: 2px solid #000;
          border-bottom: 2px solid #000;
          transform: rotate(45deg);
          transition: transform 0.1s;
        }
        &.open:after {
          transform: rotate(-135deg);
          border-color: ${color.primary};
        }
      }
      .dropdownInnerItem {
        > a {
          padding: 12px 15px;
          display: flex;
          align-items: center;
          span {
            font-size: 16px;
            font-weight: normal;
            margin-left: 10px;
          }
        }
      }
    }
  }
  .overlay {
    opacity: 0;
    &.open {
      opacity: 1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    border-bottom: 1px solid #eee;
    button {
      width: 100%;
      cursor: pointer;
      background: none;
      border: none;

      span {
        display: inline-block;
        padding: 15px 0;
      }
      &.selected span {
        font-weight: bolder;
        border-bottom: 3px solid ${color.primary};
      }
    }
  }
`;
const Header: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"recommend" | "follow">(
    "recommend"
  );
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenDropdownCreatorStudio, setIsOpenDropdownCreatorStudio] =
    useState(false);
  const [isOpenDropdownProfessionalTool, setIsOpenDropdownProfessionalTool] =
    useState(false);
  const [isOpenDropdownSetting, setIsOpenDropdownSetting] = useState(false);

  return (
    <StyledHeader>
      <header>
        <span className="accountIcon">
          <Image
            src="/images/account_icon.png"
            alt="アカウントのアイコン"
            width={30}
            height={30}
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
          />
        </span>

        <div className="siteLogo">
          <Image
            src="/images/twitter.png"
            alt="Twitterロゴ"
            width={30}
            height={30}
          />
        </div>
      </header>

      <div className="menuWrapper">
        <div className={`menu ${isOpenMenu ? "open" : ""}`}>
          <div className="menuHeader">
            <span className="menuTitle">アカウント情報</span>
            <button
              className="menuClose"
              onClick={() => {
                setIsOpenMenu(!isOpenMenu);
              }}
            >
              <span>×</span>
            </button>
          </div>
          <div className="menuBody">
            <div className="menuAccountInfo">
              <div className="menuAccountIcon">
                <Image
                  src="/images/account_icon.png"
                  alt="アカウントのアイコン"
                  width={40}
                  height={40}
                />
              </div>
              <p className="menuAccountName">mimu</p>
              <p className="menuAccountId">@mmrakt0716</p>
              <div className="menuAccountFollow">
                <a href="">
                  <span className="amount">300</span>フォロー中
                </a>
                <a href="">
                  <span className="amount">200</span>フォロワー
                </a>
              </div>
            </div>
            <div className="menuList">
              <ul className="">
                <li className="menuItem">
                  <a href="">
                    <Image
                      src="/images/person.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <span>プロフィール</span>
                  </a>
                </li>
                <li className="menuItem">
                  <a href="Twitter Blueのアイコン">
                    <Image
                      src="/images/twitter_circle.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <span>Twitter Blue</span>
                  </a>
                </li>
                <li className="menuItem">
                  <a href="トピックのアイコン">
                    <Image
                      src="/images/chat_message.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <span>トピック</span>
                  </a>
                </li>
                <li className="menuItem">
                  <a href="ブックマークのアイコン">
                    <Image
                      src="/images/bookmark.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <span>ブックマーク</span>
                  </a>
                </li>
                <li className="menuItem">
                  <a href="リストのアイコン">
                    <Image
                      src="/images/list.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <span>リスト</span>
                  </a>
                </li>
                <li className="menuItem">
                  <a href="Twitterサークルのアイコン">
                    <Image
                      src="/images/people.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <span>Twitterサークル</span>
                  </a>
                </li>
                <li className="menuItem">
                  <a href="認証済み組織のアイコン">
                    <Image
                      src="/images/check_circle.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <span>認証済み組織</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menuListEnd"></div>
            <div className="dropdownList">
              <ul className="dropdown">
                <li className="dropdownItem">
                  <button
                    className={`dropdownText ${
                      isOpenDropdownCreatorStudio ? "open" : ""
                    }`}
                    onClick={() => {
                      setIsOpenDropdownCreatorStudio(
                        !isOpenDropdownCreatorStudio
                      );
                    }}
                  >
                    <span className="">Creator Studio</span>
                  </button>
                  {isOpenDropdownCreatorStudio && (
                    <Item
                      innerList={[
                        { image: "analytics.png", text: "アナリティクス" },
                      ]}
                    />
                  )}
                </li>
              </ul>
              <ul className="dropdown">
                <li className="dropdownItem">
                  <button
                    className={`dropdownText ${
                      isOpenDropdownProfessionalTool ? "open" : ""
                    }`}
                    onClick={() => {
                      setIsOpenDropdownProfessionalTool(
                        !isOpenDropdownProfessionalTool
                      );
                    }}
                  >
                    <span className="">プロフェッショナルツール</span>
                  </button>
                  {isOpenDropdownProfessionalTool && (
                    <Item
                      innerList={[
                        { image: "rocket.png", text: "Twitter Pro" },
                        { image: "arrow_upper_right.png", text: "Twitter広告" },
                        { image: "money.png", text: "収益化" },
                      ]}
                    />
                  )}
                </li>
              </ul>
              <ul className="dropdown">
                <li className="dropdownItem">
                  <button
                    className={`dropdownText ${
                      isOpenDropdownSetting ? "open" : ""
                    }`}
                    onClick={() => {
                      setIsOpenDropdownSetting(!isOpenDropdownSetting);
                    }}
                  >
                    <span className="">設定とサポート</span>
                  </button>
                  {isOpenDropdownSetting && (
                    <Item
                      innerList={[
                        { image: "setting.png", text: "設定とプライバシー" },
                        { image: "question.png", text: "ヘルプセンター" },
                        { image: "clock.png", text: "データセーバー" },
                        { image: "paint.png", text: "表示" },
                        { image: "a11y.png", text: "キーボードショートカット" },
                        { image: "logout.png", text: "ログアウト" },
                      ]}
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`overlay ${isOpenMenu ? "open" : ""}`}></div>

      <nav>
        <button
          onClick={() => {
            setSelectedTab("recommend");
          }}
          className={selectedTab === "recommend" ? "selected" : ""}
        >
          <span>おすすめ</span>
        </button>
        <button
          onClick={() => {
            setSelectedTab("follow");
          }}
          className={selectedTab === "follow" ? "selected" : ""}
        >
          <span>フォロー中</span>
        </button>
      </nav>
    </StyledHeader>
  );
};

export default Header;
