import { createContext, useState, useContext } from 'react';

const createSource = () => ({
    value: 1,
});

const counter = createSource();
const source = createContext(createSource());
const getId = (source) => source.value++;

const generateUniqId = (context, prefix = '') => {
    const id = getId(context || counter);
    return `${prefix}${id}`;
};

export const useUniqId = (prefix) => {
    const [id] = useState(generateUniqId(useContext(source), prefix));
    return id;
};
