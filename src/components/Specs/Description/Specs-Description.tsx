import React, { FC } from "react";

import { Cut } from "../../Cut/Cut.bundle";
import { Typography } from "../../Typography/Typography.bundle";
import { cnSpecs } from "../Specs";

type SpecsDescriptionProps = {
  text: string;
  expandable?: boolean;
};

export const SpecsDescription: FC<SpecsDescriptionProps> = ({
  text,
  expandable = false
}) => {
  return (
    <div className={cnSpecs("Description")}>
      {expandable ? (
        <Typography>
          <Cut
            hide="Скрыть"
            visible={text.slice(0, 320)}
            invisible={text.slice(320)}
          />
        </Typography>
      ) : (
        <Typography>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </Typography>
      )}
    </div>
  );
};
