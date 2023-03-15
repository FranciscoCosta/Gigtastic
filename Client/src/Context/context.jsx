import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const Context = createContext();
function Provider({ children }) {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [userFilter, setuserFilter] = useState([]);

  const context = useMemo(
    () => ({
      category,
      search,
      userFilter,
      setCategory,
      setSearch,
      setuserFilter,
    }),
    [category, search, userFilter]
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
