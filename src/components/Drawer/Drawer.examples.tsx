import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { Drawer } from "./Drawer.bundle";

export const parameters = {
  viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
  },
};

storiesOf("Controls|Drawer", module)
  .addDecorator(withKnobs)
  .addParameters(parameters)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Drawer.md").default
      }
    })
  )
  .add("preview", () => {
    const scopeRef = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const nested = false;
    const dragDisabled = false;
    const direction = 'bottom';
    const animation = {
        tension: 230,
        friction: 24,
        disabled: false,
        dragImmediate: false,
    };
    
    return (
      <div ref={scopeRef}>

      <p>
          Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue ad nisi
          tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque vivamus sit
          dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam mauris conubia.
          Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class mollis maecenas orci nibh.
      </p>
      <p>
          Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue ad nisi
          tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque vivamus sit
          dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam mauris conubia.
          Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class mollis maecenas orci nibh.
      </p>
      <p>
          <button onClick={() => setVisible(true)} data-testid="opener">
              Открыть большую шторку
          </button>
      </p>
      <Drawer
          visible={visible}
          onClose={() => setVisible(false)}
          scope={scopeRef}
          nested={nested}
          dragDisabled={dragDisabled}
          direction={direction}
          animation={animation}
          theme="default"
      >
          <div className="DrawerInnerContent">
              <p>
                  Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue
                  ad nisi tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque
                  vivamus sit dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam
                  mauris conubia. Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class
                  mollis maecenas orci nibh.
              </p>
              <p>
                  Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue
                  ad nisi tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque
                  vivamus sit dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam
                  mauris conubia. Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class
                  mollis maecenas orci nibh.
              </p>
              <p>
                  Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue
                  ad nisi tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque
                  vivamus sit dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam
                  mauris conubia. Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class
                  mollis maecenas orci nibh.
              </p>
              <p>
                  Phasellus sollicitudin in pellentesque cras sagittis platea mattis himenaeos, dui ligula congue
                  ad nisi tempor laoreet lacus, etiam gravida taciti mauris adipiscing id erat. Mollis scelerisque
                  vivamus sit dictum ultrices eros, suscipit varius cursus litora lectus montes, et posuere diam
                  mauris conubia. Inceptos metus vel ac hendrerit lacinia arcu taciti potenti, vulputate class
                  mollis maecenas orci nibh.
              </p>
              <button onClick={() => setVisible(false)}>Закрыть шторку</button>
          </div>
      </Drawer>
  </div>
    );
  });
