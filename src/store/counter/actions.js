import counterSlice from "./index";

export const { incremented, decremented } = counterSlice.actions;

// Пример использования thunk middleware
export const incrementCounterWithSideEffect = () => async (dispatch, getState) => {
  // Делаем какой то сайд эффект
  const result = await new Promise(resolve => setTimeout(() => resolve([1, 2, 3]), 1000));
  console.log(result);
  // Обновляем стейт
  dispatch(incremented());
}
