const customMiddleWare = (store: any) => (next: any) => (action: any) => {
  if (action.type === "userSlice/login") {
    console.log("customMiddleware --> store", store);
    console.log("customMiddleware --> action", action);
    console.log("customMiddleware --> next", next);
  }
  return next(action);
};

export default customMiddleWare;
