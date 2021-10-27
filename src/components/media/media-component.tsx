import { H1Bold, H3Bold, TextRegularBold } from "../shared/typography";
import React, { useEffect, useState } from "react";

import { IImage } from "./media.interface";
import { IUser } from "../shared/shared.interface";
import ImageList from "./image-list";
import styled from "@emotion/styled";
import { theme } from "../shared/theme";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: auto;
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  background: ${theme.colors.bgLight.white};
  height: 60px;
  position: sticky;
  top: 0;
`;

const MenuItem = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 15px 1rem;
  transition: 0.3s ease-in;
  cursor: ${(props) => (props["aria-current"] ? "unset" : "pointer")};
  background: ${(props) =>
    props["aria-current"]
      ? theme.colors.greyLight.grey15
      : theme.colors.bgLight.white};
  p {
    color: black;
    text-align: center;
    margin: 0;
  }

  &:hover {
    background: ${theme.colors.greyLight.grey15};
  }
`;

type Props = {
  type: "cover" | "logo" | "product";
  user?: IUser
};

const MediaComponent: React.FC<Props> = ({type, user}: Props) => {
  const [currentTab, setCurrentTab] = useState<"cover" | "logo" | "product">(type);
  const [images, setImages] = useState<IImage[]>([]);
  const isLoggedin = user ? true : false

  useEffect(() => {
    if (currentTab === "logo") {
      setImages(MockImgLogo);
    }
    if (currentTab === "cover") {
      setImages(MockImg);
    }
    if (currentTab === "product") {
      setImages(MockImgProduct);
    }
  }, [currentTab]);

  const loginEvent = () => {
    if (!isLoggedin) {
      window.dispatchEvent(new CustomEvent("mediaLoginRequestEvent"));
    }
  };

  const logoutEvent = () => {
    if (isLoggedin) {
      window.dispatchEvent(new CustomEvent("mediaLogoutRequestEvent"));
    }
  };
 


  return (
      <Container>
        {!isLoggedin ? (
          <div>
            <H3Bold>Login required</H3Bold>
            <button onClick={() => loginEvent()}>Login</button>
          </div>
        ) : (
          <>
            <button onClick={() => logoutEvent()}>Logout</button>
            <Menu>
              <MenuItem
                aria-current={currentTab === "logo"}
                onClick={() => setCurrentTab("logo")}
              >
                <TextRegularBold>Logo images</TextRegularBold>
              </MenuItem>
              <MenuItem
                aria-current={currentTab === "cover"}
                onClick={() => setCurrentTab("cover")}
              >
                <TextRegularBold>Cover images</TextRegularBold>
              </MenuItem>
              <MenuItem
                aria-current={currentTab === "product"}
                onClick={() => setCurrentTab("product")}
              >
                <TextRegularBold>Product images</TextRegularBold>
              </MenuItem>
            </Menu>
            <ImageList images={images} />
          </>
        )}
      </Container>
  );
};

export default MediaComponent;

export const MockImg: IImage[] = [
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
];

export const MockImgLogo: IImage[] = [
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
];

export const MockImgProduct: IImage[] = [
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
  {
    imgid: "123",
    type: "undefined",
    imgurl: "https://picsum.photos/400",
  },
];
