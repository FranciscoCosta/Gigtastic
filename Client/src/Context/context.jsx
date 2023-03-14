import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const Context = createContext();
function Provider({ children }) {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const context = useMemo(
    () => ({
      category,
      setCategory,
      search,
      setSearch,
    }),
    [category, search]
  );

  Provider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
export default Provider;
