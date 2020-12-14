import React from "react";
import clsx from "clsx";
import "../../styles/components/table.scss";

export default function IconCustom(props) {
  const { color, size, Icon } = props;
  return (
    <div className={clsx(color)}>
      <Icon style={{ fontSize: size }} />
    </div>
  );
}
IconCustom.defaultProps = {
  color: "white",
  size: 25
};
