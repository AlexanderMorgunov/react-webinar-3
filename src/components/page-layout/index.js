import React from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";
import "./style.css";

function PageLayout({ children, height }) {
  const cn = bem("PageLayout");

  return (
    <div className={cn()} style={height ? { minHeight: `${height}px` } : null}>
      <div className={cn("center")}>{children}</div>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default React.memo(PageLayout);
