import { Navigation, NavigationText, AppBarContainer } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarContainer>
      <Navigation>
        <NavigationText to="/">
          <span>REACT EDITOR</span>
        </NavigationText>
      </Navigation>
    </AppBarContainer>
  );
};
