import React from 'react';
import { StoreApi } from 'zustand';

export const createZustandContext = <
  TState,
  TInitial = Omit<Partial<TState>, 'actions' | 'selectors'>,
>(
  getStore: (initial: TInitial) => StoreApi<TState>,
) => {
  const Context = React.createContext(null as unknown as StoreApi<TState>);

  const Provider = (props: { children?: React.ReactNode; initialValue: TInitial }) => {
    const [store] = React.useState(() => getStore(props.initialValue));

    return React.createElement(Context.Provider, { value: store }, props.children);
  };

  return {
    useContext: () => React.useContext(Context),
    Context,
    Provider,
  };
};
