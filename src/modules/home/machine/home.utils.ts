export const homeViewsData = {
  welcome: {
    id: "welcome",
    order: 0,
    titleTKey: "projects.welcome.name",
    colorA: "#" + Math.floor(Math.random() * 16777215).toString(16),
    colorB: "#" + Math.floor(Math.random() * 16777215).toString(16),
  },
  kubamichalkiewicz: {
    id: "kubamichalkiewicz",
    order: 1,
    titleTKey: "projects.kubamichalkiewicz.name",
    colorA: "#" + Math.floor(Math.random() * 16777215).toString(16),
    colorB: "#" + Math.floor(Math.random() * 16777215).toString(16),
  },
  frontdoor: {
    id: "frontdoor",
    order: 2,
    titleTKey: "projects.frontdoor.name",
    colorA: "#" + Math.floor(Math.random() * 16777215).toString(16),
    colorB: "#" + Math.floor(Math.random() * 16777215).toString(16),
  },
};

export const homeViewsDataArray = Object.values(homeViewsData).sort(
  (a, b) => a.order - b.order
);
