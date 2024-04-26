type Menu = "" | "all" | "dog" | "cat" | "fish";

export const showMarkedMenu = (menu: Menu) => {
  let menuOptions = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (menu !== "") {
    menuOptions[menu] = true;
  }

  return menuOptions;
};
