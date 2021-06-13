export const mymiddleware = (store)=>(next)=>(action)=>{
    console.log(`before action dispatch`);
    console.log(action)
    console.log(`state before action execution`);
    console.log(store.getState())
    next(action);
    console.log(`action action dispatch`);
    console.log(`state after action dispatch`);
    console.log(store.getState()); 
}