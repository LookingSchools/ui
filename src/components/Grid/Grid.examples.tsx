import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Grid, GridItem } from "./Grid";

storiesOf("LookingSchools/Components|Grid/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Grid.md").default
      }
    })
  )
  .add("playground", () => {
    const items = [
      { content: "Item 1" },
      { content: "Item 2" },
      { content: "Item 3" },
      { content: "Item 4" },
      { content: "Item 5" },
      { content: "Item 6" },
      { content: "Banner", fullWidth: true },
      { content: "Item 7" },
      { content: "Item 8" },
      { content: "Item 9" },
      { content: "Item 10" },
      { content: "Item 11" },
      { content: "Item 12" }
    ];

    const itemMinWidth = number("Item min width, px", 136);
    const rowGap = number("Row gap, px", 24);
    const columnGap = number("Column gap, px", 16);

    const style = `
            .my-grid {
                --adaptive-grid-row-gap: ${rowGap}px;
                --adaptive-grid-column-gap: ${columnGap}px;
                --adaptive-grid-item-min-width: ${itemMinWidth}px;
            }
            .my-grid-item {
                background: #f7f8f9;
            }
        `;

    return (
      <>
        <style>{style}</style>
        <Grid className="my-grid">
          {items.map((item, index) => (
            <GridItem
              key={index}
              fullWidth={item.fullWidth}
              className="my-grid-item"
            >
              {item.content}
            </GridItem>
          ))}
        </Grid>
      </>
    );
  });
