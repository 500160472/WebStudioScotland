export const setLanguage = (store, language = 'enUS') => {
  store.setState({
    ...store.state,
    language,
  });
};

export const setInitialLoading = (store, status = null) => {
  store.setState({
    ...store.state,
    initialLoading: status !== null ? status : !store.state.initialLoading,
  });
};

export const setLoadingOverlay = (store, status = null) => {
  store.setState({
    ...store.state,
    loadingOverlay: status !== null ? status : !store.state.loadingOverlay,
  });
};

export const setAlertBox = (
  store,
  status = null,
  title = null,
  message = null,
  buttonsType = 0,
  pressYes = () => {},
  pressNo = () => {},
  pressOk = () => {},
) => {
  const alertBox = {
    visible: status !== null ? status : !store.state.alertBox.visible,
    title,
    message,
    buttonsType: buttonsType,
    pressYes,
    pressNo,
    pressOk,
  };
  store.setState({
    ...store.state,
    alertBox: alertBox,
  });
};
