export const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };
    const enablePreven = () => window.addEventListener("beforeunload", listener);
    const disablePreven = () =>
        window.removeEventListener("beforeunload", listener);
    return { enablePreven, disablePreven };
};
