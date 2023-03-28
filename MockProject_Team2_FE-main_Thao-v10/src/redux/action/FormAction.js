import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Constants/ActionType";

export let actionShowForm =()=> {
    return {type:SHOW_INPUT_FORM};
};
export let actionCloseShowForm =()=> {
    return {type: CLOSE_INPUT_FORM};
};