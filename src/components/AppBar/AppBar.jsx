import { Navigation, NavigationLink, AppBarContainer } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarContainer>
      <Navigation>
        <NavigationLink to="/">
          <span>REACT EDITOR Test</span>
        </NavigationLink>
      </Navigation>
    </AppBarContainer>
  );
};
