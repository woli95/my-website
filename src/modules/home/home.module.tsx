import {
  ProjectsSection,
  HomeScreenWrapper,
  WelcomeSection,
} from "./components";
import { HomeMachineContext } from "./machine";

export const HomeModule = () => (
  <HomeMachineContext.Provider>
    <HomeScreenWrapper>
      <WelcomeSection style={{ flex: 1 }} />
      <ProjectsSection style={{ flex: 0.7 }} />
    </HomeScreenWrapper>
  </HomeMachineContext.Provider>
);
