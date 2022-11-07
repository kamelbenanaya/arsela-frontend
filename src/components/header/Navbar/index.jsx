import React from "react";
import { BrowserRouter as BrowserRouter, Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import {
  NavContainer,
  LogoContainer,
  BurgerContainer,
  StyledFontAwesomeIcon,
  StyledFontAwesomeIconArrow,
  LogoImg,
  Drawer,
  CancelButtonContainer,
  Menuitem,
  MenuitemContainer,
  SubMenu,
  SubMenuContent,
  MenuDeskContainer,
  MenuDesk,
  SubMenuDesk,
  SubMenuDeskContent,
  MenuDeskCategories,
  IconContainer,
  StyledFontAwesomeIconMenu,
  IconContainerMobile,
  StyledLink,CartItemContainer,Countshopcard
} from "./styles";
import {
  faBars,
  faTimes,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import logoheader from "../../../images/normal.png";
import { useState } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
  
}

function enableScrolling(){
  window.onscroll=function(){};
}

export const Index = () => {
  const { globalState } = useGlobalContext();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const onBurgerClicked = () => {
    setDrawerOpen(true);  
    disableScrolling()

  };
  const onCancelClicked = () => {
    setDrawerOpen(false);
    enableScrolling()
  };
  const onSubMenuClicked = () => {
    setSubMenuOpen(!isSubMenuOpen)
  
  };
  return (
    <NavContainer>
      <LogoContainer>
        <LogoImg src={logoheader} alt="aaa" />
      </LogoContainer>
      <MenuDeskContainer>
        <MenuDesk>
          <StyledLink to="/">Home</StyledLink>
        </MenuDesk>
        <MenuDesk >
          <StyledLink  to="/about">About us</StyledLink>
        </MenuDesk>
        <MenuDesk>
          <StyledLink to="/contact">Contact us</StyledLink>
        </MenuDesk>
        <MenuDeskCategories>
              <StyledLink>Categories</StyledLink>
          
          <StyledFontAwesomeIconArrow
            isOpen={isSubMenuOpen}
            icon={faCaretDown}
            onClick={onSubMenuClicked}
          />
          <SubMenuDesk isOpen={isSubMenuOpen}>
            <SubMenuDeskContent isOpen={isSubMenuOpen}>
              <StyledLink to="/Laptop">Laptop</StyledLink>
            </SubMenuDeskContent>
            <SubMenuDeskContent isOpen={isSubMenuOpen}>
              <StyledLink to="/Phone">Phone</StyledLink>
            </SubMenuDeskContent>
            <SubMenuDeskContent isOpen={isSubMenuOpen}>
              <StyledLink to="/Accessoires">Accessoires</StyledLink>
            </SubMenuDeskContent>
          </SubMenuDesk>
        </MenuDeskCategories>
      </MenuDeskContainer>
      <IconContainer>
        <StyledFontAwesomeIconMenu icon={faHeart} />
        <CartItemContainer> 
            <Countshopcard>{globalState.cartTotalItems}</Countshopcard>
            <StyledLink to="/cart"> <StyledFontAwesomeIconMenu icon={faCartShopping} /></StyledLink>
        </CartItemContainer>
        
        <StyledFontAwesomeIconMenu icon={faUser} />
      </IconContainer>
      <BurgerContainer>
        <StyledFontAwesomeIcon icon={faBars} onClick={onBurgerClicked} />
      </BurgerContainer>
      <Drawer isOpen={isDrawerOpen}>
        <CancelButtonContainer>
          <StyledFontAwesomeIcon icon={faTimes} onClick={onCancelClicked} />
        </CancelButtonContainer>
        <MenuitemContainer>
          <Menuitem onClick={onCancelClicked}>
            <StyledLink to="/">Home</StyledLink>
          </Menuitem>
          <Menuitem onClick={onCancelClicked}>
            <StyledLink to="/about">About us</StyledLink>
          </Menuitem>
          <Menuitem onClick={onCancelClicked}>
            <StyledLink to="/contact">Contact us</StyledLink>
          </Menuitem>
          <Menuitem>
           <StyledLink>Categories</StyledLink> 
            <StyledFontAwesomeIconArrow
              isOpen={isSubMenuOpen}
              icon={faCaretDown}
              onClick={onSubMenuClicked}
            />
          </Menuitem>
          <SubMenu isOpen={isSubMenuOpen}>
            <SubMenuContent onClick={onCancelClicked} isOpen={isSubMenuOpen}>
              <StyledLink to="/Laptop">Laptop</StyledLink>
            </SubMenuContent>
            <SubMenuContent onClick={onCancelClicked} isOpen={isSubMenuOpen}>
              <StyledLink to="/Phone">Phone</StyledLink>
            </SubMenuContent>
            <SubMenuContent onClick={onCancelClicked} isOpen={isSubMenuOpen}>
              <StyledLink to="/Accessoires">Accessoires</StyledLink>
            </SubMenuContent>
          </SubMenu>
        </MenuitemContainer>
        <IconContainerMobile>
          <StyledFontAwesomeIconMenu icon={faHeart} />
          <CartItemContainer>
          <Countshopcard>{globalState.cartTotalItems}</Countshopcard>
                  <StyledFontAwesomeIconMenu icon={faCartShopping} />
        </CartItemContainer>
          <StyledFontAwesomeIconMenu icon={faUser} />
        </IconContainerMobile>
      </Drawer>
    </NavContainer>
  );
};
export default Index;
