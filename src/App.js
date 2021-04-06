// import Login from "./Login";
import React from "react";
import "./index.scss";
import {
  Fade16,
  Switcher24,
  Search24,
  Notification24,
  UserAvatar24,
} from "@carbon/icons-react";
import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  HeaderGlobalAction,
  HeaderGlobalBar,
  SideNavMenuItem,
  SideNavLink,
  // StoryContent,
  // Search20,
  // Notification20,
  // AppSwitcher20,
  SideNav,
  SideNavItems,
  SideNavMenu,
  HeaderSideNavItems,
  Switcher,
  SwitcherItem,
  HeaderPanel,
  Grid,
  Row,
  Column,
} from "carbon-components-react";
import Pie from "./Pie";

// import { SwitcherItemLink } from "carbon-components-react/lib/components/UIShell";

function App() {
  const action = () => {};
  const [openSwitcher, setOpenSwitcher] = React.useState(false);

  // return <Login></Login>;

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="CloudNatix Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
              isCollapsible
            />
            <HeaderName href="#" prefix="CloudNatix">
              [Platform]
            </HeaderName>
            <HeaderNavigation aria-label="CloudNatix [Platform]">
              <HeaderMenuItem href="#">Dashboard</HeaderMenuItem>
              <HeaderMenuItem href="#">Workload</HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" menuLinkName="Optimizer">
                <HeaderMenuItem href="#one">Executive view</HeaderMenuItem>
                <HeaderMenuItem href="#two">Developer view</HeaderMenuItem>
                <HeaderMenuItem href="#two">
                  Business analist view
                </HeaderMenuItem>
              </HeaderMenu>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Search"
                onClick={action("search click")}
              >
                <UserAvatar24 />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="Search"
                onClick={action("search click")}
              >
                <Search24 />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="Notifications"
                onClick={action("notification click")}
              >
                <Notification24 />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="App Switcher"
                onClick={() => setOpenSwitcher(!openSwitcher)}
                tooltipAlignment="end"
              >
                <Switcher24 />
              </HeaderGlobalAction>
            </HeaderGlobalBar>

            <HeaderPanel expanded={openSwitcher}>
              <Switcher>
                <SwitcherItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  quam.
                  {/* <SwitcherItemLink href="/">Link</SwitcherItemLink> */}
                </SwitcherItem>
              </Switcher>
            </HeaderPanel>
          </Header>

          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems hasDivider={true}>
                <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                  <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderSideNavItems>
              <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="/">Link</SideNavMenuItem>
                <SideNavMenuItem href="/">Link</SideNavMenuItem>
                <SideNavMenuItem href="/">Link</SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="/">Link</SideNavMenuItem>
                <SideNavMenuItem href="/">Link</SideNavMenuItem>
                <SideNavMenuItem href="/">Link</SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu
                renderIcon={Fade16}
                title="Category title"
                isActive={true}
              >
                <SideNavMenuItem href="/">Link</SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="/">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="/">Link</SideNavMenuItem>
              </SideNavMenu>
              <SideNavLink renderIcon={Fade16} href="/">
                Link
              </SideNavLink>
              <SideNavLink renderIcon={Fade16} href="/">
                Link
              </SideNavLink>
            </SideNavItems>
          </SideNav>

          <div class="bx--grid">
            <Grid>
              <Row>
                <Column>
                  <h2 style={{ margin: "0 0 130px" }}>Purpose and function</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique eveniet aliquam odit totam ab repellat et, alias
                    aliquid quod hic.
                  </p>
                  <Pie></Pie>
                </Column>
                <Column>
                  <p>
                    repellat cupiditate at, quaerat perspiciatis repudiandae eos
                    rem assumenda laboriosam illo.
                  </p>
                </Column>
                <Column>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    veritatis ut amet, provident doloremque!
                  </p>
                </Column>
              </Row>
            </Grid>
          </div>
        </>
      )}
    />
  );
}

export default App;
