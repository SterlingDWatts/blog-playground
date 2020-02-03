import React from "react";

export default React.createContext({
  theme: "elpheba",
  direction: "row",
  collapsed: true,
  toggleCollapse: () => {}
});
