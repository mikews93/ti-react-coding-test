type GlobalStateReducer = ({ type, payload, entityName }: ReducerAction) => Promise<void | GlobalState>
