"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { color } from "../../const/style";

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
    position: relative;
    .menu {
      position: absolute;
      opacity: 0;

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
        display: flex;
        justify-content: space-between;
        align-items: center;
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
      .menuBody {
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
      .menuItem {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
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
      margin: 0 auto;
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
