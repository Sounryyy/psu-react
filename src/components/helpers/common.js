const getLowerCaseString = (str) => str.toLowerCase();

export const checkContentEntry = ({ content }, needfulString) => getLowerCaseString(content).indexOf(getLowerCaseString(needfulString)) !== -1;

