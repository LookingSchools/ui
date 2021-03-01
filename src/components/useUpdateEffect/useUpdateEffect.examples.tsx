import React, { useState } from 'react';

import { useUpdateEffect } from '.';
import { Button } from '../Button/Button.bundle';
import { Typography } from '../Typography/Typography.bundle';

export const Default = () => {
    const [count, setCount] = useState(0);

    useUpdateEffect(() => alert(count), [count]);

    return (
        <>
            <Typography>{count} &nbsp;</Typography>
            <Button theme="primary" size="m" onClick={() => setCount((prev) => prev + 1)}>
                +
            </Button>
        </>
    );
};
