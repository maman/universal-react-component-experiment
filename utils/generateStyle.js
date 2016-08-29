const generateStyle = (componentName, defaultStyle, styleOverrides) => {
    const overrides = Object.keys(styleOverrides);
    const shouldOverride = overrides.every(types => typeof styleOverrides[types] === 'undefined');
    if (shouldOverride) return Object.assign({}, defaultStyle[componentName]);
    return Object.assign({}, defaultStyle, ...overrides.map(override => {
        if (defaultStyle[`${componentName}-${override}`]) {
            return defaultStyle[`${componentName}-${override}`];
        }
        return {};
    }));
};

export default generateStyle;
